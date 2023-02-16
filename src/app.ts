import express ,{NextFunction , Request , Response } from "express";
import mongoose from "mongoose";
import testRoute from "./Router/test.routes";
import config from "config"
import mqtt from "mqtt"
import { updateDevice } from "./service/test.service";

const app  = express()
app.use(express.json())
const server = require('http').createServer(app)

const port = config.get<number>("port")
const host = config.get<string>("host")
const dbUrl = config.get<string>('dbUrl')

mongoose.connect(dbUrl)
const client = mqtt.connect('mqtts://7cb0bb03390b413ca6ebc8bf5bf63014.s2.eu.hivemq.cloud ', {
  username: 'lmo-12',
  password: 'mindin4580',
});

let sub_topic = "general";
let sub_options = { qos: 0 };

const connect = () =>{
    client.subscribe("#",  { qos: 0 } , function (err) {
        if (err) {
          console.log("An error occurred while subscribing");
        } else {
          console.log("Subscribed successfully to " + sub_topic.toString());
        }
      });
}

client.on("connect",connect);

client.on("message", async (topic , message)=>{

    // wss.clients.forEach(function each(client) {
    //   if (client.readyState == WebSocket.OPEN) {
    //     client.send(message.toString());
    //   }
    // });
  
    // messageForShow(topic , message)

    // console.log(topic , '///' , message.toString()) 
    let result = await updateDevice({_id : topic} ,{status :  message.toString()})
    
  });

app.get('/' , (req : Request , res : Response , next : NextFunction)=>{
    res.send("ok")
})

app.use("/testing" , testRoute)

server.listen(port, ()=> console.log(`server is running in  http://${host}:${port}`))

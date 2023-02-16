import mongoose from "mongoose";

export interface deviceDocument extends mongoose.Document {
    name : string,
    status : string
}

const deviceSchema = new mongoose.Schema({
    name : {type: String, required: true},
    status:{type: String, required: false, default:"OFF"},
    created : {type : Date , default : Date.now()}
})

const DeviceModel = mongoose.model("device" , deviceSchema)
export default DeviceModel
import { UpdateQuery } from "mongoose";
import DeviceModel , {deviceDocument} from "../model/device.model";



export const addDevice = async (payload : deviceDocument) =>{
    return await new DeviceModel(payload).save()
}

export const getDevice = async (payload : {} ) =>{
    return await DeviceModel.find(payload).lean()
}

export const updateDevice = async (query : {} , body : UpdateQuery<deviceDocument> ) =>{
    
    // console.log(body , 'here')

     await DeviceModel.updateMany( query , body)
    return await DeviceModel.find(query).lean()

}

export const deleteDevice = async (query : {} ) =>{
    await DeviceModel.deleteMany( query )
}
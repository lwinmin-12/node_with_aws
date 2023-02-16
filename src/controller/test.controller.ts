import express ,{NextFunction , Request , Response } from "express";
import { addDevice, getDevice ,updateDevice,deleteDevice } from "../service/test.service";

export const addDeviceHandler = async (req : Request  , res : Response, next : NextFunction) =>{
    try{
        let result = await addDevice(req.body)
        res.status(200).json({
            "con" : true,
            "result" : result
        })
    }catch(e : any){
        res.status(501).json({
            "con" : false,
            "error" : e.message
        })
    }
}

export const getDeviceHandler = async (req : Request  , res : Response, next : NextFunction) =>{
    try{
        let result = await getDevice(req.query)
        res.status(200).json({
            "con" : true,
            "result" : result
        })
    }catch(e : any){
        res.status(501).json({
            "con" : false,
            "error" : e.message
        })
    }
}

export const updateDeviceHandler = async (req : Request  , res : Response, next : NextFunction) =>{
    try{
        let result = await updateDevice(req.query , req.body)
        res.status(200).json({
            "con" : true,
            "result" : result
        })
    }catch(e : any){
        res.status(501).json({
            "con" : false,
            "error" : e.message
        })
    }
}

export const deleteDeviceHandler = async (req : Request  , res : Response, next : NextFunction) =>{
    try{
        let result = await deleteDevice(req.query)
        res.status(200).json({
            "con" : true,
            "result" : []
        })
    }catch(e : any){
        res.status(501).json({
            "con" : false,
            "error" : e.message
        })
    }
}
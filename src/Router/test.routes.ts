import { addDeviceHandler , deleteDeviceHandler, getDeviceHandler, updateDeviceHandler } from "../controller/test.controller";
const testRoute = require('express').Router()

testRoute.get('/' , getDeviceHandler)
testRoute.post('/' , addDeviceHandler)
testRoute.put('/' , updateDeviceHandler)
testRoute.delete('/' , deleteDeviceHandler)

export default testRoute
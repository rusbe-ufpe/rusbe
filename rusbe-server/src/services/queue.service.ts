import Router from 'express'

const queueService = Router()

queueService.get('/queue',async(req,res)=>{
    res.send({msg:"Olá"})
})

export default queueService
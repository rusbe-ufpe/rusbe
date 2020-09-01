import Router from 'express'

const queueRoutes = Router()

queueRoutes.get('/queue',async(req,res)=>{
    res.send({msg:"Olá"})
})

export default  queueRoutes
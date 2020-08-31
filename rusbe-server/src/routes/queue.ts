import Router from 'express'

const filaRoutes = Router()

filaRoutes.get('/queue',async(req,res)=>{
    res.send({msg:"Olá"})
})

export default  filaRoutes
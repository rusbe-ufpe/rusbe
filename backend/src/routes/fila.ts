import Router from 'express'

const filaRoutes = Router()

filaRoutes.get('/fila',async(req,res)=>{
    res.send({msg:"Olá"})
})

module.exports = filaRoutes
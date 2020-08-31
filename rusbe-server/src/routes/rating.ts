import Router from 'express'

const avaliacaoRoutes = Router()

avaliacaoRoutes.get('/rating',async(req,res)=>{
    res.send({msg:"Olá"})
})

export default avaliacaoRoutes
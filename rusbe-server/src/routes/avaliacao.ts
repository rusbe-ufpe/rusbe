import Router from 'express'

const avaliacaoRoutes = Router()

avaliacaoRoutes.get('/avaliacao',async(req,res)=>{
    res.send({msg:"Olá"})
})

export default avaliacaoRoutes
import Router from 'express'

const cardapioRoutes = Router()

cardapioRoutes.get('/cardapio',async(req,res)=>{
    res.send({msg:"Olá"})
})

module.exports = cardapioRoutes
import Router from 'express'

const sugestoesRoutes = Router()

sugestoesRoutes.get('/sugestoes',async(req,res)=>{
    res.send({msg:"Olá"})
})

module.exports = sugestoesRoutes
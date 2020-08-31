import Router from 'express'

const sugestoesRoutes = Router()

sugestoesRoutes.get('/suggestions',async(req,res)=>{
    res.send({msg:"Olá"})
})

export default  sugestoesRoutes
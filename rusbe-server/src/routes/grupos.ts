import Router from 'express'

const gruposRoutes = Router()

gruposRoutes.get('/grupos',async(req,res)=>{
    res.send({msg:"Olá"})
})

export default  gruposRoutes
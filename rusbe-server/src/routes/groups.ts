import Router from 'express'

const gruposRoutes = Router()

gruposRoutes.get('/groups',async(req,res)=>{
    res.send({msg:"Olá"})
})

export default  gruposRoutes
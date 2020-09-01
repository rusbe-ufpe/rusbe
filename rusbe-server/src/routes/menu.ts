import Router from 'express'

const menuRoutes = Router()

menuRoutes.get('/menu',async(req,res)=>{
    res.send({msg:"Olá"})
})

export default menuRoutes
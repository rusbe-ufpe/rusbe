import Router from 'express'

const menuService = Router()

menuService.get('/menu',async(req,res)=>{
    res.send({msg:"Olá"})
})

export default menuService
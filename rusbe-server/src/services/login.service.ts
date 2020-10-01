import Router from 'express'

const loginService = Router()

loginService.get('/login',async(req,res)=>{
    res.send({msg:"Olá"})
})

export default loginService
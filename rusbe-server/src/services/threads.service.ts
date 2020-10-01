import Router from 'express'

const threadsService = Router()

threadsService.get('/threads',async(req,res)=>{
    res.send({msg:"Olá"})
})
export default threadsService
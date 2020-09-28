import Router from 'express'

const threadsService = Router()

threadsService.get('/thread',async(req,res)=>{
    res.send({msg:"Olá"})
})
export default threadsService
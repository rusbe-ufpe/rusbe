import Router from 'express'

const groupsService = Router()

groupsService.get('/groups',async(req,res)=>{
    res.send({msg:"Olá"})
})
export default groupsService
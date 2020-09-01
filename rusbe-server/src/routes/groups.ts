import Router from 'express'

const groupsRoutes = Router()

groupsRoutes.get('/groups',async(req,res)=>{
    res.send({msg:"Olá"})
})

export default groupsRoutes
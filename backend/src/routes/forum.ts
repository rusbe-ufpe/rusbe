import Router from 'express'

const forumRoutes = Router()

forumRoutes.get('/forum',async(req,res)=>{
    res.send({msg:"Olá"})
})
module.exports = forumRoutes
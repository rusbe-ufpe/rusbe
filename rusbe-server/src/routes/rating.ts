import Router from 'express'

const ratingRoutes = Router()

ratingRoutes.get('/rating',async(req,res)=>{
    res.send({msg:"Olá"})
})

export default ratingRoutes
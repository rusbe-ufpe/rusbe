import Router from 'express'

const suggestionsRoutes = Router()

suggestionsRoutes.get('/suggestions',async(req,res)=>{
    res.send({msg:"Olá"})
})

export default  suggestionsRoutes
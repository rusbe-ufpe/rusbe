import Router from 'express'

const suggestionsService = Router()

suggestionsService.get('/suggestions',async(req,res)=>{
    res.send({msg:"Olá"})
})

export default suggestionsService
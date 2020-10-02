import Router from 'express'
import UserSchema from '../models/user'
const loginService = Router()

loginService.get('/login',async(req,res)=>{
    const id = req.query.id;
    const password = req.query.password;
    const user = await UserSchema.findOne({id});
    if(user!=null){
        res.send(user)
    }else{
        res.status(404).send({message: "User not found"});
    }
})
loginService.post('/newuser', async(req, res)=>{
    const {id, password, name} = req.body;
    let resp;
    await UserSchema.create({
        id,
        name,
        password,
        likes :[],
        voteRight:[],
        optionsVoted:[]
    })
    resp = await UserSchema.findOne({id})
    res.send(resp);
})

export default loginService
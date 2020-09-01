import Router from 'express'
import { BusinessGroups } from '../business/groups.business'

const groupsRoutes = Router()
const groups: BusinessGroups = new BusinessGroups() 

groupsRoutes.get('/groups',async(req,res)=>{
    res.send({msg:"Olá"})
})

groupsRoutes.get('/userGroups', async(req, res)=>{
    res.send({msg: groups.getUserGroups(req.query.id as string)})
})

export default groupsRoutes
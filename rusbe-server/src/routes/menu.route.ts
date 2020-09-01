import Router from 'express'
import { BusinessMenu } from '../business/menu.business';

const menuRoutes = Router()
var menu: BusinessMenu = new BusinessMenu();

menuRoutes.get('/menu',async(req,res)=>{
    res.send({msg:menu.getTodayCardapio()});
})

export default menuRoutes
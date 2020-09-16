import Router from 'express'
import { BusinessMenu } from '../business/menu.business';

const menuRoutes = Router();
const base_route = '/menu/';
var menu: BusinessMenu = new BusinessMenu();

menuRoutes.get(base_route+'dailymenu',async(req,res)=>{
    res.send({msg:menu.getTodayCardapio()});
})

export default menuRoutes
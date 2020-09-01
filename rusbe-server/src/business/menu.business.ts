

import { MenuApi } from './menu.api';

export class BusinessMenu{
    api: MenuApi = new MenuApi();

    getTodayCardapio(): String {
        
        return this.api.get();
    }
}
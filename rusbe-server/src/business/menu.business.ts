import { MenuApi } from './menu.api';

export class BusinessMenu{
    api: MenuApi = new MenuApi();

    getTodayCardapio(): Object {
        return this.api.get();
    }
}
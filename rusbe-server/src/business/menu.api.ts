export class MenuApi{
    todayDate : String = this.getTodayDate();

    getTodayDate() : String{
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        return mm + '/' + dd + '/' + yyyy;
    }

    get() : String{
        
        return this.todayDate;
    }
}
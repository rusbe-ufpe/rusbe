export class MenuApi{
    todayDate : any = this.getTodayDate();
    todayHash : Number = this.getTodayUniqueHashId();
    //Breakfast options
    breakfastProteinOptions : String[] = ["Ovos mexidos", "Carne de Charque", "Salsicha", "Carne de Sol"];
    breakfastCarbsOptions : String[] = ["Hiame","Macaxeira","Munguza","Batata doce","Torrada","Sopa de carne","Sopa de cebola"];
    breakfastDesertOptions : String[] = ["Frutas", "Goiabada"];
    breakfastDrinkOptions : String[] = ["Café", "Leite", "Refresco"];
    //Lunch options
    lunchProteinOptions : String[] = ["Peixe empanado", "Bife", "Peito de frango", "Coxa de frango"];
    lunchCarbsOptions : String[] = ["Macarrao","Arroz","Feijao","Pure","Batata","Salada"];
    lunchDesertOptions : String[] = ["Doce de banana", "Frutas", "Goiabada"];
    lunchDrinkOptions : String[] = ["Suco de acerola", "Suco de laranja", "Suco de goiaba", "Refresco"];
    //Lunch options
    dinnerProteinOptions : String[] = ["Ovos mexidos", "Carne de Charque", "Salsicha", "Carne de Sol"];
    dinnerCarbsOptions : String[] = ["Hiame","Macaxeira","Munguza","Batata doce","Torrada","Sopa de carne","Sopa de cebola"];
    dinnerDesertOptions : String[] = ["Frutas", "Goiabada"];
    dinnerDrinkOptions : String[] = ["Café", "Leite", "Refresco"];

    getTodayDate() : any{
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        return {"day":dd, "month":mm, "year":yyyy};
    }

    getTodayUniqueHashId() : Number{
        var dd = parseInt(this.todayDate.day),
            mm = parseInt(this.todayDate.month),
            yyyy = parseInt(this.todayDate.year);

        return dd*7 + mm*5 + yyyy*3;
    }

    getBreakFast() : string{
        var menu = {
            protein : [],
            carbs : [],
            desert : [],
            drink : []
        };

        var sz = 0;
        const hash = parseInt(this.todayHash.toString());
        const indexes = [hash, hash+1, hash+2];
        
        
        sz = this.breakfastProteinOptions.length;
        menu.protein.push(this.breakfastProteinOptions[indexes[0]%sz]);

        sz = this.breakfastCarbsOptions.length;
        menu.carbs.push(this.breakfastCarbsOptions[indexes[0]%sz]);
        menu.carbs.push(this.breakfastCarbsOptions[indexes[1]%sz]);
        menu.carbs.push(this.breakfastCarbsOptions[indexes[2]%sz]);

        sz = this.breakfastDesertOptions.length;
        menu.desert.push(this.breakfastDesertOptions[indexes[0]%sz]);

        sz = this.breakfastDrinkOptions.length;
        menu.drink.push(this.breakfastDrinkOptions[indexes[0]%sz]);
        
        return JSON.stringify(menu);
    }

    getLunch() : string{
        var menu = {
            protein : [],
            carbs : [],
            desert : [],
            drink : []
        };

        var sz = 0;
        const hash = parseInt(this.todayHash.toString());
        const indexes = [hash, hash+1, hash+2];
        
        
        sz = this.lunchProteinOptions.length;
        menu.protein.push(this.lunchProteinOptions[indexes[0]%sz]);

        sz = this.lunchCarbsOptions.length;
        menu.carbs.push(this.lunchCarbsOptions[indexes[0]%sz]);
        menu.carbs.push(this.lunchCarbsOptions[indexes[1]%sz]);
        menu.carbs.push(this.lunchCarbsOptions[indexes[2]%sz]);

        sz = this.lunchDesertOptions.length;
        menu.desert.push(this.lunchDesertOptions[indexes[0]%sz]);

        sz = this.lunchDrinkOptions.length;
        menu.drink.push(this.lunchDrinkOptions[indexes[0]%sz]);
        
        return JSON.stringify(menu);
    }

    getDinner() : string{
        var menu = {
            protein : [],
            carbs : [],
            desert : [],
            drink : []
        };

        var sz = 0;
        const hash = parseInt(this.todayHash.toString());
        const indexes = [hash, hash+1, hash+2];
        
        
        sz = this.dinnerProteinOptions.length;
        menu.protein.push(this.dinnerProteinOptions[indexes[0]%sz]);

        sz = this.dinnerCarbsOptions.length;
        menu.carbs.push(this.dinnerCarbsOptions[indexes[0]%sz]);
        menu.carbs.push(this.dinnerCarbsOptions[indexes[1]%sz]);
        menu.carbs.push(this.dinnerCarbsOptions[indexes[2]%sz]);

        sz = this.dinnerDesertOptions.length;
        menu.desert.push(this.dinnerDesertOptions[indexes[0]%sz]);

        sz = this.dinnerDrinkOptions.length;
        menu.drink.push(this.dinnerDrinkOptions[indexes[0]%sz]);
        
        return JSON.stringify(menu);
    }

    get() : String{
        var menu = {
            breakfast : this.getBreakFast() || "",
            lunch : this.getLunch() || "",
            dinner : this.getDinner() || ""
        }

        return JSON.stringify(menu);
    }
}
import * as shoppingUI from '../ui/shoppingUI';
import {
    updateIngredients
} from '../ui/recipeUI';


export default class ShoppingCart {
    constructor() {
        this.data = [];
    }

    addItem(quantity, unit, ingredient) {
        let ID;
        this.data.length > 0 ? ID = this.data[this.data.length - 1].id + 1 : ID = 0;

        const item = {
            id: ID,
            quantity,
            unit,
            ingredient
        }

        this.data.push(item);
        return item;
    }

    deleteItem(id) {
        const index = this.data.findIndex(el => el.id == id);
        this.data.splice(index, 1);
    }

}
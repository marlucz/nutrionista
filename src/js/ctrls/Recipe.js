import axios from 'axios';
import {
    apiKey,
    apiID
} from '../api'

export default class Recipe {
    constructor(ID) {
        this.ID = ID;
    }

    async getRecipe() {
        try {
            const result = await axios(`https://api.edamam.com/search?app_id=${apiID}&app_key=${apiKey}&from=0&to=30&r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${this.ID}`);
            console.log(result.data);
            this.title = result.data[0].label;
            this.author = result.data[0].source;
            this.img = result.data[0].image;
            this.url = result.data[0].url;
            this.ingredients = result.data[0].ingredients.map(a => a.text);
        } catch (error) {
            alert(error);
        }
    }

}
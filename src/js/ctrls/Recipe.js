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
            this.recipe = result.data;
            console.log(this.recipe);
            const recipe = result.data[0];
            this.title = recipe.label;
            this.author = recipe.source;
            this.img = recipe.image;
            this.url = recipe.url;
            this.calories = result;
            this.healthLabels = recipe.healthLabels;
            this.totalDaily = recipe.totalDaily;
            this.totalNutrients = recipe.totalNutrients;
            this.ingredients = recipe.ingredients.map(a => a.text);
            this.yield = recipe.yield;
        } catch (error) {
            alert(error);
        }
    }

}
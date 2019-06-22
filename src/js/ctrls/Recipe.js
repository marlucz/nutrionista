import axios from 'axios';
import {
    apiKey,
    apiID
} from '../api';

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


    parseIngredient() {
        if (!('contains' in String.prototype)) {
            String.prototype.contains = function (str, startIndex) {
                return -1 !== String.prototype.indexOf.call(this, str, startIndex);
            };
        }
        const units = {
            tbsp: ['tablespoons', 'tablespoon', 'tbsps', 'tbsp'],
            tsp: ['teaspoons', 'teaspoon', 'tsps', 'tsp'],
            cup: ['cups', 'cup'],
            oz: ['ounces', 'ounce'],
            pt: ['pints', 'pint', 'pt'],
            gal: ['gallons', 'gallon', 'gals', 'gal'],
            pound: ['pounds', 'pound', 'lbs', 'lb'],
            qt: ['quarts', 'quart', 'qts', 'qt'],
            l: ['liters', 'liter', 'l'],
            ml: ['mililiters', 'mililiter', 'mls', 'ml'],
            cl: ['centiliters', 'centiliter', 'cls', 'cl'],
            kg: ['kilograms', 'kilogram', 'kgs', 'kg'],
            g: ['grams', 'gram', 'gs', 'g'],
            mg: ['miligrams', 'miligram', 'mgs', 'mg'],
            inch: ['inches', 'inch', 'in']
        };


        const replacements = Object.entries(units).map(([key, values]) => {
            values = values.map(s => `\\b${s}\\b`).join("|");
            return [key, new RegExp(values, "i")];
        });
        console.log(replacements);
        const changedIngredients = this.ingredients.map(el => {
            replacements.forEach(([rep, regexp]) => el = el.replace(regexp, rep));
            return el;
        });

    }
}
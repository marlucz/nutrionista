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
        // object of unit replacements
        const unitsMap = {
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
            inch: ['inches', 'inch', 'in'],
            slice: ['slices', 'slice'],
            handful: ['handful'],
            pack: ['packs', 'pack'],
            bunch: ['bunches', 'bunch'],
            dash: ['dashes', 'dash'],
            couple: ['couples', 'couple'],
            touch: ['touches', 'touch'],
            pinch: ['pinches', 'pinch']
        };

        // generate pairs key and respective units
        const replacements = Object.entries(unitsMap).map(([key, values]) => {
            values = values.map(s => `\\b${s}\\b`).join("|");
            return [key, new RegExp(values, "i")];
        });

        // make an array of abbreviation of untis
        const units = replacements.map(item => item[0]);

        // replace units from ingredient with its respective replacement from the replacements array
        const changedIngredients = this.ingredients.map(el => {
            replacements.forEach(([rep, regexp]) => el = el.replace(regexp, rep));

            // split ingredient into quantity, unit and rest of ingredient
            const splitedIngr = el.split(' ');
            // check for index of the unit in the array
            const unitIndex = splitedIngr.findIndex(el2 => units.includes(el2));

            // declare object for ingredient items
            let newIng;

            // check if there is any unit at all
            if (unitIndex > -1) {
                // there is unit
                newIng = {
                    quantity: splitedIngr.slice(0, unitIndex).join(' '),
                    unit: splitedIngr[unitIndex],
                    ingredient: splitedIngr.slice(unitIndex + 1).join(' ')
                }
                // else if there is no unit but there is quantity of something
            } else if (parseInt(splitedIngr[0], 10)) {
                //check if there is more than one number item in the array
                const indexQuantities = splitedIngr.findIndex(ing => !parseInt(ing, 10));
                newIng = {
                    quantity: splitedIngr.slice(0, indexQuantities).join(' '),
                    unit: '',
                    ingredient: splitedIngr.slice(indexQuantities).join(' ')
                }
                // else there is no unit and no number at first position of ingredient
            } else {
                newIng = {
                    quantity: '',
                    unit: '',
                    ingredient: el
                }
            }

            //console.log(newIngredientObject);
            return newIng;
        });
        this.ingredients = changedIngredients;

    }




}
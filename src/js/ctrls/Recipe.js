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
            let newIngredientObject;

            // check whether there is a unit or quantity in the igredient array and generate corresponding to it object
            if (unitIndex > -1) {
                // There is a unit
                // Ex. 4 1/2 cups, arrCount is [4, 1/2]
                // Ex. 4 cups, arrCount is [4]
                const arrCount = splitedIngr.slice(0, unitIndex);
                let quantity;
                if (arrCount.length === 1) {
                    quantity = eval(splitedIngr[0].replace('-', '+'));
                    console.log(quantity);
                } else {
                    quantity = eval(splitedIngr.slice(0, unitIndex).join('+'));
                }

                newIngredientObject = {
                    quantity,
                    unit: splitedIngr[unitIndex],
                    ingredient: splitedIngr.slice(unitIndex + 1).join(' ')
                }

            } else if (parseInt(splitedIngr[0], 10)) {
                // There is no unit but 1st element is number
                newIngredientObject = {
                    quantity: parseInt(splitedIngr[0], 10),
                    unit: '',
                    ingredient: splitedIngr.slice(1).join(' ')
                }
            } else if (unitIndex === -1) {
                // there is no unit and no number in 1st position
                newIngredientObject = {
                    quantity: 1,
                    unit: '',
                    ingredient
                }
            } else {
                newIngredientObject = {
                    quantity: '',
                    unit: '',
                    ingredient

                }
            }
            //console.log(newIngredientObject);
            return newIngredientObject;
        });
        this.ingredients = changedIngredients;


    }




}
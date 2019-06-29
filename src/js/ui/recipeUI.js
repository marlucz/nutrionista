import {
    selectors
} from './selectors';
import unitPerPerson from './searchUI';

export const clearRecipe = () => {
    selectors.recipeShow.innerHTML = '';
}

// arrays with nutrients
const nutrientsBasic = ['Energy', 'Protein', 'Carbs', 'Fat'];
const nutrientsMore = ['Cholesterol', 'Saturated', 'Fiber', 'Sodium', 'Zinc', 'Potassium', 'Magnesium'];

const createNutrient = (recipe, arrItem, method) => `
        <li class="list__item recipe__nutrient">
            <span class="recipe__nutrient--name">${arrItem}</span>
            <span class="recipe__nutrient--unit">${unitPerPerson(recipe, arrItem)}</span>
            <span class="recipe__nutrient--quantity" title="daily value">${unitPerPerson(recipe, arrItem, method)}</span>
        </li>
        `;

export const renderRecipe = (recipe) => {
    console.log(recipe);
    const recipeHtml = `
        <figure class="recipe__fig">
            <img src="${recipe.img}" alt="${recipe.title}" class="recipe__img">
            <h2 class="heading-secondary">${recipe.title}</h2>
        </figure>
        <div class="recipe__info">
        ${recipe.healthLabels.map(el => {
           return `<span class="recipe__info-text">${el}</span>`
        }).join('')}
        </div>

        <div class="recipe__ingredients">
            <h3 class="heading-tertiary">Ingredients</h3>
            <div class="recipe__ingredients-header">
                <div class="recipe__servings">
                    <button class="btn btn-servings btn-servings--minus">
                        <svg class="btn-icon">
                            <use xlink:href="./img/sprite.svg#icon-minus"></use>
                        </svg>
                    </button>
                    <span class="recipe__servings-text">Servings</span>
                    <span class="recipe__servings-value">1</span>
                    <button class="btn btn-servings btn-servings--plus">
                        <svg class="btn-icon">
                            <use xlink:href="./img/sprite.svg#icon-plus"></use>
                        </svg>
                    </button>
                    </div>
                <div class="recipe__status">
                    <button class="btn btn-shopping">
                        <svg class="btn-icon">
                            <use xlink:href="./img/sprite.svg#icon-cart"></use>
                        </svg>
                    </button>
                    <button class="btn btn-likes">
                        <svg class="btn-icon">
                            <use xlink:href="./img/sprite.svg#icon-heart-outlined"></use>
                        </svg>
                    </button>
                </div>
            </div>
            <ul class="list recipe__ingredients-list">
                ${recipe.ingredients.map(el => {
                    return `
                    <li class="list__item recipe__ingredient">
                        <div class="recipe__ingredient-count">${el.quantity ? el.quantity : ''}</div>
                        <div class="recipe__ingredient-count--unit">${el.unit ? el.unit + ' ' : ''}</div>
                        <div class="recipe__ingredient-name">${el.ingredient}</div>
                    </li>
                    `
                }).join('')}

            </ul>
        </div>
        <div class="recipe__nutrients">
            <h3 class="heading-tertiary">Nutrition Facts per Serving</h3>
            <ul class="list recipe__nutrients-list recipe__nutrients-list--basic">
                ${nutrientsBasic.map(el=> createNutrient(recipe, el, 'totalDaily')).join('')}
            </ul>
            <ul class="list recipe__nutrients-list recipe__nutrients-list--more">
                ${nutrientsMore.map(el=> createNutrient(recipe, el, 'totalDaily')).join('')}
            </ul>
        </div>
        <div class="recipe__making">
            <p class="recipe__making-text">Full recipe directions can be found on
                <br/><span class="recipe__author">${recipe.author}</span></p>
            <a href="${recipe.url}" class="link recipe__making-source" target="_blank">
            <span>Get Recipe</span>
            </a>
        </div>

`;

    selectors.recipeShow.insertAdjacentHTML('afterbegin', recipeHtml);
};
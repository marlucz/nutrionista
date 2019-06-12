import {
    selectors
} from './selectors';

export const getInput = () => selectors.searchInput.value;

export const unitPerPerson = (recipe, label) => {
    let nutrient;
    const nutrients = recipe.totalNutrients;
    Object.keys(nutrients).forEach((key) => {
        if (nutrients[key].label === label) {
            nutrient = `${Math.round(nutrients[key].quantity/recipe.yield)} ${nutrients[key].unit}`
        }
    });
    return nutrient;
};

const renderRecipe = (recipe) => {
    const listItem = `
    <li class="list__item results__item">
        <a class="results__link">
            <figure class="results-fig">
                <img src="${recipe.image}" class ="results__img" alt="${recipe.label}">
                <svg class="results-fig__icon">
                    <use xlink:href="./img/sprite.svg#icon-heart-outlined"></use>
                </svg>
            </figure>
            <div class="results__data">
                <h4 class="heading-quarternary">${recipe.label}</h4>
                <ul class="list results__nutritions">
                    <li class="list__item results__nutrition">Calories<span class="results__value">${unitPerPerson(recipe, 'Energy')}</span></li>
                    <li class="list__item results__nutrition">Protein<span class="results__value">${unitPerPerson(recipe, 'Protein')}</span></li>
                    <li class="list__item results__nutrition">Carb<span class="results__value">${unitPerPerson(recipe, 'Carbs')}</span></li>
                    <li class="list__item results__nutrition">Fat<span class="results__value">${unitPerPerson(recipe, 'Fat')}</span></li>
                    <li class="list__item results__nutrition">Time<span class="results__value">${unitPerPerson(recipe, 'Energy')}</span></li>
                </ul>
            </div>
        </a>
    </li>
    `;
    selectors.resultsList.insertAdjacentHTML('beforeend', listItem);

};

export const populateResults = (recipes) => {

    recipes.forEach(renderRecipe);
};
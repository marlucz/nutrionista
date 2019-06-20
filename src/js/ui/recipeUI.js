import {
    selectors
} from './selectors';
import unitPerPerson from './searchUI';

export const clearRecipe = () => {
    selectors.recipeShow.innerHTML = '';
}

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
            <ul class="list recipe__ingredients-list">
                ${recipe.ingredients.map(el => {
                    return `
                    <li class="list__item recipe__ingredient">
                        <svg class="recipe__ingredient-icon">
                            <use xlink:href="./img/sprite.svg#icon-checkmark"></use>
                        </svg>
                        <div class="recipe__ingredient-count">200
                            <span class="recipe__ingredient-count--unit">g</span>
                        </div>
                        <div class="recipe__ingredient-name">
                            ${el}
                        </div>
                    </li>
                    `
                }).join('')}

            </ul>
        </div>
        <div class="recipe__nutrients">
            <h3 class="heading-tertiary">Nutrition Facts per Serving</h3>
            <ul class="list recipe__nutrients-list recipe__nutrients-list--basic">
                <li class="list__item recipe__nutrient">
                    <span class="recipe__nutrient--name">Calories</span>
                    <span class="recipe__nutrient--unit">${unitPerPerson(recipe, 'Energy')}</span>
                    <span class="recipe__nutrient--quantity" title="daily value">${unitPerPerson(recipe, 'Energy', 'totalDaily')}</span>
                </li>
                <li class="list__item recipe__nutrient">
                    <span class="recipe__nutrient--name">Protein</span>
                    <span class="recipe__nutrient--unit">${unitPerPerson(recipe, 'Protein')}</span>
                    <span class="recipe__nutrient--quantity" title="daily value">${unitPerPerson(recipe, 'Protein', 'totalDaily')}</span>
                </li>
                <li class="list__item recipe__nutrient">
                    <span class="recipe__nutrient--name">Carbs</span>
                    <span class="recipe__nutrient--unit">${unitPerPerson(recipe, 'Carbs')}</span>
                    <span class="recipe__nutrient--quantity" title="daily value">${unitPerPerson(recipe, 'Carbs', 'totalDaily')}</span>
                </li>
                <li class="list__item recipe__nutrient">
                    <span class="recipe__nutrient--name">Fats</span>
                    <span class="recipe__nutrient--unit">${unitPerPerson(recipe, 'Fat')}</span>
                    <span class="recipe__nutrient--quantity" title="daily value">${unitPerPerson(recipe, 'Fat', 'totalDaily')}</span>
                </li>
            </ul>
            <ul class="list recipe__nutrients-list recipe__nutrients-list--more">
                <li class="list__item recipe__nutrient">
                    <span class="recipe__nutrient--name">Cholesterol</span>
                    <span class="recipe__nutrient--unit">${unitPerPerson(recipe, 'Cholesterol')}</span>
                    <span class="recipe__nutrient--quantity" title="daily value">${unitPerPerson(recipe, 'Cholesterol', 'totalDaily')}</span>
                </li>
                <li class="list__item recipe__nutrient">
                    <span class="recipe__nutrient--name">Vitamin1</span>
                    <span class="recipe__nutrient--unit">1g</span>
                    <span class="recipe__nutrient--quantity" title="daily value">5%</span>
                </li>
                <li class="list__item recipe__nutrient">
                    <span class="recipe__nutrient--name">Vitamin2</span>
                    <span class="recipe__nutrient--unit">1g</span>
                    <span class="recipe__nutrient--quantity" title="daily value">5%</span>
                </li>
                <li class="list__item recipe__nutrient">
                    <span class="recipe__nutrient--name">Vitamin3</span>
                    <span class="recipe__nutrient--unit">1g</span>
                    <span class="recipe__nutrient--quantity" title="daily value">5%</span>
                </li>
                <li class="list__item recipe__nutrient">
                    <span class="recipe__nutrient--name">Vitamin3</span>
                    <span class="recipe__nutrient--unit">1g</span>
                    <span class="recipe__nutrient--quantity" title="daily value">5%</span>
                </li>
                <li class="list__item recipe__nutrient">
                    <span class="recipe__nutrient--name">Vitamin3</span>
                    <span class="recipe__nutrient--unit">1g</span>
                    <span class="recipe__nutrient--quantity" title="daily value">5%</span>
                </li>
                <li class="list__item recipe__nutrient">
                    <span class="recipe__nutrient--name">Vitamin3</span>
                    <span class="recipe__nutrient--unit">1g</span>
                    <span class="recipe__nutrient--quantity" title="daily value">5%</span>
                </li>
                <li class="list__item recipe__nutrient">
                    <span class="recipe__nutrient--name">Vitamin3</span>
                    <span class="recipe__nutrient--unit">1g</span>
                    <span class="recipe__nutrient--quantity" title="daily value">5%</span>
                </li>
                <li class="list__item recipe__nutrient">
                    <span class="recipe__nutrient--name">Vitamin3</span>
                    <span class="recipe__nutrient--unit">1g</span>
                    <span class="recipe__nutrient--quantity" title="daily value">5%</span>
                </li>
            </ul>
        </div>
        <div class="recipe__making">
            <p class="recipe__making-text">Full recipe directions can be found on
                <span class="recipe__author">Jon Doe</span>'s website</p>
            <a href="${recipe.url}" class="link recipe__making-source" target="_blank">
            <span>Get Recipe</span>
            </a>
        </div>

`;

    selectors.recipeShow.insertAdjacentHTML('afterbegin', recipeHtml);
};
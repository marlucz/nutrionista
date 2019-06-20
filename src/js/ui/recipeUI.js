import {
    selectors
} from './selectors';

export const clearRecipe = () => {
    selectors.recipeShow.innerHTML = '';
}




































const recipeHtml = `
<figure class="recipe__fig">
                    <img src="https://unsplash.it/200/200" alt="Fresh shake" class="recipe__img">
                    <h2 class="heading-secondary">Green Smothie For Your Health</h2>
                </figure>
                <div class="recipe__info">
                    <span class="recipe__info-text">Vegetarian</span>
                    <span class="recipe__info-text">Gluten Free</span>
                    <span class="recipe__info-text">Peanut Free</span>
                    <span class="recipe__info-text">Low-Carb</span>
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
                        <li class="list__item recipe__ingredient">
                            <svg class="recipe__ingredient-icon">
                                <use xlink:href="./img/sprite.svg#icon-checkmark"></use>
                            </svg>
                            <div class="recipe__ingredient-count">200
                                <span class="recipe__ingredient-count--unit">g</span>
                            </div>
                            <div class="recipe__ingredient-name">
                                Cheese
                            </div>
                        </li>
                        <li class="list__item recipe__ingredient">
                            <svg class="recipe__ingredient-icon">
                                <use xlink:href="./img/sprite.svg#icon-checkmark"></use>
                            </svg>
                            <div class="recipe__ingredient-count">200
                                <span class="recipe__ingredient-count--unit">g</span>
                            </div>
                            <div class="recipe__ingredient-name">
                                Cheese
                            </div>
                        </li>
                        <li class="list__item recipe__ingredient">
                            <svg class="recipe__ingredient-icon">
                                <use xlink:href="./img/sprite.svg#icon-checkmark"></use>
                            </svg>
                            <div class="recipe__ingredient-count">200
                                <span class="recipe__ingredient-count--unit">g</span>
                            </div>
                            <div class="recipe__ingredient-name">
                                Cheese
                            </div>
                        </li>
                        <li class="list__item recipe__ingredient">
                            <svg class="recipe__ingredient-icon">
                                <use xlink:href="./img/sprite.svg#icon-checkmark"></use>
                            </svg>
                            <div class="recipe__ingredient-count">200
                                <span class="recipe__ingredient-count--unit">g</span>
                            </div>
                            <div class="recipe__ingredient-name">
                                Cheese
                            </div>
                        </li>
                        <li class="list__item recipe__ingredient">
                            <svg class="recipe__ingredient-icon">
                                <use xlink:href="./img/sprite.svg#icon-checkmark"></use>
                            </svg>
                            <div class="recipe__ingredient-count">200
                                <span class="recipe__ingredient-count--unit">g</span>
                            </div>
                            <div class="recipe__ingredient-name">
                                Cheese
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="recipe__nutrients">
                    <h3 class="heading-tertiary">Nutrition Facts</h3>
                    <ul class="list recipe__nutrients-list recipe__nutrients-list--basic">
                        <li class="list__item recipe__nutrient">
                            <span class="recipe__nutrient--name">Calories</span>
                            <span class="recipe__nutrient--unit">500 kcal</span>
                            <span class="recipe__nutrient--quantity" title="daily value">20%</span>
                        </li>
                        <li class="list__item recipe__nutrient">
                            <span class="recipe__nutrient--name">Protein</span>
                            <span class="recipe__nutrient--unit">1g</span>
                            <span class="recipe__nutrient--quantity" title="daily value">5%</span>
                        </li>
                        <li class="list__item recipe__nutrient">
                            <span class="recipe__nutrient--name">Carbs</span>
                            <span class="recipe__nutrient--unit">1g</span>
                            <span class="recipe__nutrient--quantity" title="daily value">5%</span>
                        </li>
                        <li class="list__item recipe__nutrient">
                            <span class="recipe__nutrient--name">Fats</span>
                            <span class="recipe__nutrient--unit">1g</span>
                            <span class="recipe__nutrient--quantity" title="daily value">5%</span>
                        </li>
                    </ul>
                    <ul class="list recipe__nutrients-list recipe__nutrients-list--more">
                        <li class="list__item recipe__nutrient">
                            <span class="recipe__nutrient--name">Cholesterol</span>
                            <span class="recipe__nutrient--unit">50mg</span>
                            <span class="recipe__nutrient--quantity" title="daily value">20%</span>
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
                    <a href="http://leitesculinaria.com/94320/recipes-breakfast-pizza.html" class="link recipe__making-source" target="_blank">
                    <span>Get Recipe</span>
                    </a>
                </div>

`
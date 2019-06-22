import {
    selectors
} from './selectors';
import Pagination from './paginationUI';

export const getInput = () => selectors.searchInput.value;

export const clearResults = () => {
    selectors.paginationList.innerHTML = '';
    selectors.resultsList.innerHTML = '';
};

export const clearSearchInput = () => {
    selectors.searchInput.value = '';
}


const unitPerPerson = (recipe, label, method = 'totalNutrients') => {
    let nutrient;
    const nutrients = recipe[method];
    Object.keys(nutrients).forEach(key => {
        if (nutrients[key].label === label) {
            nutrient = `${Math.round(nutrients[key].quantity/recipe.yield)} ${nutrients[key].unit}`
        }
    });
    return nutrient;
};

export default unitPerPerson;

export const selectedRecipe = id => {
    const resultsArr = Array.from(document.querySelectorAll('.results__link'));
    resultsArr.forEach(el => {
        console.log(el.children[1]);
        el.children[1].classList.remove('results__data--active');
    });
    const selected = document.querySelector(`.results__link[href*="${id}"]`).children[1];
    console.log(selected);
    selected.classList.add('results__data--active');
}

const titleMaxLength = (title, length = 20) => {
    const newTitle = [];
    if (title.length > length) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= length) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);

        return `${newTitle.join(' ')} ...`;
    }
    return title;
};

const renderRecipe = (recipe) => {
    const listItem = `
    <li>
        <a class="results__link link" href="#${recipe.uri.substr(51)}">
            <figure class="results-fig">
                <img src="${recipe.image}" class ="results__img" alt="${recipe.label}">
                <svg class="results-fig__icon">
                    <use xlink:href="./img/sprite.svg#icon-heart-outlined"></use>
                </svg>
            </figure>
            <div class="results__data">
                <h4 class="heading-quarternary">${titleMaxLength(recipe.label)}</h4>
                <ul class="list results__nutritions">
                    <li class="list__item results__nutrition">Calories<span class="results__value">${unitPerPerson(recipe, 'Energy')}</span></li>
                    <li class="list__item results__nutrition">Protein<span class="results__value">${unitPerPerson(recipe, 'Protein')}</span></li>
                    <li class="list__item results__nutrition">Carb<span class="results__value">${unitPerPerson(recipe, 'Carbs')}</span></li>
                    <li class="list__item results__nutrition">Fat<span class="results__value">${unitPerPerson(recipe, 'Fat')}</span></li>
                </ul>
            </div>
        </a>
    </li>
    `;
    selectors.resultsList.insertAdjacentHTML('beforeend', listItem);

};

export const populateResults = (recipes, pageNumber = 1, recipesPerPage = 9, name) => {
    const startIndex = (pageNumber, recipesPerPage) => (pageNumber - 1) * recipesPerPage;
    const endIndex = (pageNumber, recipesPerPage) => recipesPerPage * pageNumber;

    // render pagination
    if (name) {
        Pagination[name]();
        recipes.slice(startIndex(Pagination.pageCur, recipesPerPage), endIndex(Pagination.pageCur, recipesPerPage)).forEach(renderRecipe);
    } else {
        recipes.slice(startIndex(pageNumber, recipesPerPage), endIndex(pageNumber, recipesPerPage)).forEach(renderRecipe);
        Pagination.totalItems = recipes.length;
        Pagination.pageCur = pageNumber;
        Pagination.recipesPerPage = recipesPerPage;
        Pagination.changePage(pageNumber);
    }

};
import '../scss/style.scss';
import Search from './ctrls/Search';
import {
    selectors
} from './ui/selectors';
import * as searchUI from './ui/searchUI';


// Event listener on search form submit

selectors.searchForm.addEventListener('submit', e => {
    recipeCtrl();
    e.preventDefault()
});


window.addEventListener('DOMContentLoaded', () => {
    recipeCtrl();
});

// Application data controller
const data = {};

// Recipe Controller

const recipeCtrl = async () => {
    // 1. Get input value
    const query = searchUI.getInput();
    // const query = 'pizza'; // only for testing purposes

    //    Check if input is not empty
    if (query) {
        // 2. Pass input value to new Search object
        data.search = new Search(query);
        console.log(data.search);

        // 3. Clear UI after search/for next search
        searchUI.clearResults();
        searchUI.clearSearchInput();

        // 4. Wait for input value to be searched
        try {
            await data.search.searchResults();
            console.log(data.search.recipes);

            // 5. Populate results to UI
            searchUI.populateResults(data.search.recipes);
        } catch (error) {
            alert('Something went wrong' + error);
        }
    }
}

// pagination controlls

selectors.paginationList.addEventListener('click', e => {
    e.preventDefault();
    const clicked = e.target.closest('li').dataset.gotopage;
    if (clicked) {
        const goToPage = parseInt(clicked, 10);
        if (Number.isInteger(goToPage)) {
            searchUI.clearResults();
            searchUI.populateResults(data.search.recipes, goToPage);
        } else {
            searchUI.clearResults();
            searchUI.populateResults(data.search.recipes, goToPage, 9, clicked);
        }

    }
});
























document.addEventListener('DOMContentLoaded', () => {
    const btnShopping = document.querySelector('[data-nav="shopping-cart"]');
    const btnFavourites = document.querySelector('[data-nav="favourites"]');
    const shoppingList = document.querySelector('.shopping');
    const favouritesList = document.querySelector('.likes');
    btnShopping.addEventListener('click', () => {
        shoppingList.classList.toggle('active');
        favouritesList.classList.remove('active');
    });
    btnFavourites.addEventListener('click', () => {
        favouritesList.classList.toggle('active');
        shoppingList.classList.remove('active');
    });

});
import '../scss/style.scss';
import Search from './ctrls/Search';
import Recipe from './ctrls/Recipe';
import {
    selectors
} from './ui/selectors';
import * as searchUI from './ui/searchUI';
import * as recipeUI from './ui/recipeUI';



// Event listener on search form submit

selectors.searchForm.addEventListener('submit', e => {
    searchCtrl();
    e.preventDefault()
});


window.addEventListener('DOMContentLoaded', () => {
    searchCtrl();
});

// Application data controller
const data = {};

// Search recipe Controller

const searchCtrl = async () => {
    // Get input value
    const query = searchUI.getInput();
    // const query = 'pizza'; // only for testing purposes

    //    Check if input is not empty
    if (query) {
        // Pass input value to new Search object
        data.search = new Search(query);

        // Clear UI after search/for next search
        searchUI.clearResults();
        searchUI.clearSearchInput();

        // Wait for input value to be searched
        try {
            await data.search.searchResults();

            // Populate results to UI
            searchUI.populateResults(data.search.recipes);
        } catch (error) {
            alert('Something went wrong' + error);
        }
    }
}

// Pagination controlls

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

// Show recipe controller

const recipeCtrl = async () => {
    const id = window.location.hash.replace('#', '');

    if (id) {

        // Reset UI before showing results
        recipeUI.clearRecipe();
        //check if id comes from searched recipe and highlight it in a view
        if (data.search) searchUI.selectedRecipe(id);

        data.recipe = new Recipe(id);
        try {
            data.recipe.getRecipe();
        } catch (error) {
            alert('Something went wrong' + error)
        }
        console.log(data.recipe);
    }

}


['hashchange', 'load'].forEach(event => window.addEventListener(event, recipeCtrl));

















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
import '../scss/style.scss';
import Search from './ctrls/Search';
import Recipe from './ctrls/Recipe';
import ShoppingCart from './ctrls/ShoppingCart';
import {
    selectors
} from './ui/selectors';
import * as searchUI from './ui/searchUI';
import * as recipeUI from './ui/recipeUI';
import * as shoppingUI from './ui/shoppingUI';



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
            await data.recipe.getRecipe();
            // parse ingredients
            data.recipe.parseIngredient();
            // Render recipe
            recipeUI.renderRecipe(data.recipe)
        } catch (error) {
            alert('Something went wrong' + error)
        }
    }

}



['hashchange', 'load'].forEach(event => window.addEventListener(event, recipeCtrl));



// Handle ingredients event listeners
selectors.recipeShow.addEventListener('click', (e) => {
    const clicked = e.target.closest('button');
    // handle increasing and decreasing servings quantity
    if (clicked.dataset.servings) {
        data.recipe.updateServings(clicked.dataset.servings);
        recipeUI.updateIngredients(data.recipe);
    } else if (clicked.dataset.likes) {
        // handle likes list to be done
        console.log(clicked.dataset.likes);
    } else if (clicked.classList.contains('btn-shopping')) {
        // handle shopping list to be done
        shoppingCtrl();
    }

});


// Shopping cart controller

const shoppingCtrl = () => {
    data.shopping = new ShoppingCart();

    data.recipe.ingredients.forEach(el => {
        const shoppingList = data.shopping.addItem(el.quantity, el.unit, el.ingredient);
        shoppingUI.showShoppingList(shoppingList);
    });
};













document.addEventListener('DOMContentLoaded', () => {

    selectors.navShopping.addEventListener('click', () => {
        selectors.shoppingCart.classList.toggle('active');
        selectors.favouritesCart.classList.remove('active');
    });
    selectors.navFavourites.addEventListener('click', () => {
        selectors.favouritesCart.classList.toggle('active');
        selectors.shoppingCart.classList.remove('active');
    });
    selectors.navRecipes.addEventListener('click', () => {
        selectors.favouritesCart.classList.remove('active');
        selectors.shoppingCart.classList.remove('active');
    });


});
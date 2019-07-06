import '../scss/style.scss';
import Search from './ctrls/Search';
import Recipe from './ctrls/Recipe';
import ShoppingCart from './ctrls/ShoppingCart';
import Likes from './ctrls/Likes';
import {
    selectors
} from './ui/selectors';
import * as searchUI from './ui/searchUI';
import * as recipeUI from './ui/recipeUI';
import * as shoppingUI from './ui/shoppingUI';
import * as likesUI from './ui/likesUI';






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
            recipeUI.renderRecipe(data.recipe, data.likes.checkIfLiked(id));
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
    } else if (clicked.closest('.btn-likes')) {
        // handle likes list to be done
        likesCtrl(data.recipe.ID);
    } else if (clicked.classList.contains('btn-shopping')) {
        // handle shopping list to be done
        shoppingCtrl();
    }

});


// Shopping cart controller

// making a list from ingredients in the recipe
const shoppingCtrl = () => {
    // make new Shopping object if there isn't one already
    if (!data.shopping) data.shopping = new ShoppingCart();

    // add shopping list to UI
    data.recipe.ingredients.forEach(el => {
        const shoppingList = data.shopping.addItem(el.quantity, el.unit, el.ingredient);
        shoppingUI.showShoppingList(shoppingList);
    });
};
// handle delete item
selectors.shoppingCart.addEventListener('click', (e) => {
    const clicked = e.target.closest('.btn-delete');
    const id = clicked.parentNode.dataset.id;
    data.shopping.deleteItem(id);
    shoppingUI.deleteItem(id);
});


// Favourites list controller

const likesCtrl = () => {
    // make Likes object if there isn't one already
    if (!data.likes) data.likes = new Likes();
    const id = data.recipe.ID;

    // check if passed recipe is not liked
    if (!data.likes.checkIfLiked(id)) {
        // add recipe to likes list
        const like = data.likes.addLike(
            id,
            data.recipe.title,
            data.recipe.img);

        // add like to UI
        likesUI.showFavouritesList(like);

        // change outline of the heart on recipe
        likesUI.changeHeartStatus(true);

    } else {
        // delete like from likes list
        data.likes.deleteLike(id);
        // delete like from UI
        likesUI.deleteLike(id);
        // change outline of the heart on recipe
        likesUI.changeHeartStatus(false);

    }
}

// Handle delete item from favourite list

selectors.favouritesList.addEventListener('click', (e) => {
    const clickedID = e.target.closest('.btn-unlike').previousElementSibling.id;
    // delete like from likes list
    data.likes.deleteLike(clickedID);
    // delete like from UI
    likesUI.deleteLike(clickedID);
    // change outline of the heart on recipe
    if (clickedID === data.recipe.ID) likesUI.changeHeartStatus(false);
})

// Get favourites from local storage on window load
window.addEventListener('load', () => {
    data.likes = new Likes();
    // get items from local storage
    data.likes.getItemsFromStorage();
    // populate items to UI
    data.likes.likes.forEach(el => likesUI.showFavouritesList(el));
})






document.addEventListener('DOMContentLoaded', () => {
    // hide navigation item for recipe when not on mobile
    // selectors.navRecipe.style.display = 'none';

    // Handle nav list items opening and closing
    selectors.navShopping.addEventListener('click', () => {
        selectors.shoppingCart.classList.toggle('active');
        selectors.favouritesCart.classList.remove('active');
    });
    selectors.navFavourites.addEventListener('click', () => {
        selectors.favouritesCart.classList.toggle('active');
        selectors.shoppingCart.classList.remove('active');
    });
    selectors.navSearch.addEventListener('click', () => {
        selectors.favouritesCart.classList.remove('active');
        selectors.shoppingCart.classList.remove('active');
    });
    selectors.navSearch.addEventListener('click', () => {
        selectors.favouritesCart.classList.remove('active');
        selectors.shoppingCart.classList.remove('active');
    });


});
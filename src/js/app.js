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


// Recipe Controller

const recipeCtrl = async () => {
    // 1. get input value 
    const query = searchUI.getInput();

    // 2. pass 
    console.log(query);

}








































// document.addEventListener('DOMContentLoaded', () => {
//     const btnShopping = document.querySelector('[data-nav="shopping-cart"]');
//     const btnFavourites = document.querySelector('[data-nav="favourites"]');
//     const shoppingList = document.querySelector('.shopping');
//     const favouritesList = document.querySelector('.likes');
//     btnShopping.addEventListener('click', () => {
//         shoppingList.classList.toggle('active');
//         favouritesList.classList.remove('active');
//     });
//     btnFavourites.addEventListener('click', () => {
//         favouritesList.classList.toggle('active');
//         shoppingList.classList.remove('active');
//     });

// });
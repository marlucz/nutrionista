import '../scss/style.scss';
import Search from './ctrls/Search';
import {
    selectors
} from './ui/selectors';




selectors.searchForm.addEventListener('submit', e => {
    console.log(selectors.searchInput.value);
    e.preventDefault()
});













































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
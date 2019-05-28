import '../scss/style.scss';

document.addEventListener('DOMContentLoaded', () => {
    const btnShopping = document.querySelector('[data-nav="shopping-cart"]');
    const btnFavourites = document.querySelector('[data-nav="favourites"]');
    const shoppingList = document.querySelector('.shopping');
    const favouritesList = document.querySelector('.likes');
    btnShopping.addEventListener('click', () => {
        shoppingList.classList.toggle('active');
    });
    btnFavourites.addEventListener('click', () => {
        favouritesList.classList.toggle('active');
    });

});
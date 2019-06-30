import {
    selectors
} from './selectors';


export const showShoppingList = (list) => {
    console.log(list);
    const fragment = `
    <li class="list__item shopping__item">
        <p class="shopping__name">${list.ingredient}</p>
        <p class="shopping__count">${list.quantity} ${list.unit}</p>
        <button class="btn btn-delete">
            <svg class="btn-icon">
                <use xlink:href="./img/sprite.svg#icon-cross"></use>
            </svg>
        </button>
    </li>
    `;

    selectors.shoppingList.insertAdjacentHTML('beforeend', fragment);
};
import {
    selectors
} from './selectors';


export const showShoppingList = (list) => {
    const fragment = `
    <li class="list__item shopping__item" data-id="${list.id}">
        <p class="shopping__name">${list.ingredient}</p>
        <p class="shopping__count">${list.quantity} ${list.unit}</p>
        <button class="btn btn-delete">
            <svg class="btn-icon">
                <use href="./img/sprite.svg#icon-cross"></use>
            </svg>
        </button>
    </li>
    `;

    selectors.shoppingList.insertAdjacentHTML('beforeend', fragment);
};

export const deleteItem = id => {
    const item = document.querySelector(`[data-id="${id}"]`);
    if (item) item.parentElement.removeChild(item);
};
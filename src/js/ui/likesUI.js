import {
    selectors
} from './selectors';

export const changeHeartStatus = (boolean) => {
    const heartIcon = boolean ? 'icon-heart' : 'icon-heart-outlined';
    // innerHTML is hotfix for chrome not showing change of svg properly
    // in firefox .setAttribute('href', `./img/sprite.svg#${heartIcon}` ) was working just fine
    document.querySelector('.btn-likes').innerHTML = `
    <svg class="btn-icon">
        <use xlink:href="./img/sprite.svg#${heartIcon}"></use>
    </svg>
    `
}

export const showFavouritesList = (like) => {
    const fragment = `
    <li class="list__item likes__item">
        <a href="#${like.id}" class="link likes__link" id="${like.id}">
            <figure class="likes__fig">
                <img src=${like.img} alt ="${like.title}">
            </figure>
            <div class="list likes__data">
                <h4 class="heading-quarternary">${like.title}</h4>
            </div>
        </a>
        <button class="btn btn-unlike">
            <svg class="btn-icon">
                <use xlink:href="./img/sprite.svg#icon-heart"></use>
            </svg>
        </button>
    </li>
    `;

    selectors.favouritesList.insertAdjacentHTML('beforeend', fragment);
};

export const deleteLike = (id) => {
    const like = document.querySelector(`.likes__link[href*="${id}"]`);
    if (like) like.parentElement.remove(like);
}
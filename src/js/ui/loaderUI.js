import {
    selectors
} from './selectors';

export const addLoader = (parent) => {
    const loader = `
    <div class="pan-loader">
        <div class="loader"></div>
        <div class="pan-container">
            <div class="pan"></div>
            <div class="handle"></div>
        </div>
    </div>
    `
    parent.insertAdjacentHTML('afterbegin', loader);

}

export const clearLoader = () => {
    const loader = document.querySelector('.pan-loader');
    if (loader) loader.parentElement.removeChild(loader);
}
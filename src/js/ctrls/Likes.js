export default class Likes {
    constructor() {
        this.likes = [];
    }

    //return true if given recipe id is in likes array
    checkIfLiked(id) {
        return this.likes.findIndex(el => el.id === id) !== -1;
    }

    addLike(id, title, img) {
        const like = {
            id,
            title,
            img
        }

        this.likes.push(like);
        // add item to local storage
        this.storeLikes();
        return like;
    }

    deleteLike(id) {
        const index = this.likes.findIndex(el => el.id == id);
        this.likes.splice(index, 1);
        // update local storage
        this.storeLikes();
    }

    storeLikes() {
        localStorage.setItem('storageLikes', JSON.stringify(this.likes));
    }

    getItemsFromStorage() {
        const storageLikes = JSON.parse(localStorage.getItem('storageLikes'));
        // set likes from local storage
        if (storageLikes) this.likes = storageLikes;
    }

}
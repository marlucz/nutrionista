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
        console.log(this.likes);
        return like;
    }

    deleteLike(id) {
        console.log(id);
        const index = this.likes.findIndex(el => el.id == id);
        console.log(index);
        this.likes.splice(index, 1);
    }

}
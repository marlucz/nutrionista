import axios from 'axios';
import {
    apiKey,
    apiID
} from '../api'

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async searchResults() {
        try {
            const results = await axios(`https://api.edamam.com/search?q=${this.query}&app_id=${apiID}&app_key=${apiKey}&from=0&to=45`);
            this.recipes = results.data.hits.map(index => index.recipe);
        } catch (error) {
            alert(error);
        }
    }

}
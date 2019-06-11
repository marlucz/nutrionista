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
            const results = await axios(`https://api.edamam.com/search?q=${query}&app_id=${apiID}app_key=${apiKey}from=0&to=45`);
            console.log(results);
        } catch (error) {
            alert(error);
        }
    }

}
import axios from 'axios';
import config from './config';



export default axios.create({
    baseURL: 'https://api.twitch.tv/helix/search/',
    params: {
        first: 5
    }
});
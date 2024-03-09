//const API_KEY='41849458-2d98265c06659a45ba73a30c';

import axios from 'axios';

const apiKey = '41849458-2d98265c06659a45ba73a30c';
export async function searchImages(query, page = 1, perPage = 15) {
    try {
        const response = await axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${query}&page=${page}&per_page=${perPage}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
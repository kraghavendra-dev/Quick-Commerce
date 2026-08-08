import axios from 'axios';

const Base_URL = "https://dummyjson.com/products";

export const getProducts = async () => {
     try {
        const response = await axios.get(Base_URL);
        return response.data.products;
     } catch (error) {
        throw error;
     }
}

export const getSingleProduct = async (id) => {
    const response = await axios.get(`${Base_URL}/${id}`);
    return response.data;
}

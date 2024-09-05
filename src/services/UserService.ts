import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchUsers = async () => {
    const response = await axios.get(API_URL);
    console.log("response = ", response);
    return response.data;
};

import axios from 'axios';

const API_URL = 'https://portfolio-backend-zq5y.onrender.com';

export const sendContactForm = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/api/contact`, formData, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};
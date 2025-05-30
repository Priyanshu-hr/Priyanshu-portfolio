const API_URL = 'https://portfolio-backend-zq5y.onrender.com';

export const sendContactForm = async (formData) => {
    const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(formData)
    });
    
    return await response.json();
};
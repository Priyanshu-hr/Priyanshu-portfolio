import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    console.log("Sending data:", formData);
    
    try {
        const response = await fetch('https://portfolio-backend-zq5y.onrender.com/api/contact', {
            method: 'POST',  // Make sure this is uppercase 'POST'
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'  // Added this header
            },
            body: JSON.stringify(formData),
            mode: 'cors'  // Added this explicitly
        });

        const responseData = await response.json();
        console.log("Response:", responseData);
        
        if (response.ok) {
            setStatus('success');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
            
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Message sent successfully!';
            e.target.appendChild(successMessage);
            
            setTimeout(() => {
                successMessage.remove();
            }, 3000);
        } else {
            throw new Error(responseData.message || 'Failed to send message');
        }
    } catch (error) {
        console.error("Error sending message:", error);
        setStatus('error');
        
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = error.message || 'Failed to send message. Please try again.';
        e.target.appendChild(errorMessage);
        
        setTimeout(() => {
            errorMessage.remove();
        }, 3000);
    } finally {
        setStatus('idle');
    }
};

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="contact" id="contact">
            <h2 className="heading">Get in <span>Touch!</span></h2>

            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <textarea
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button 
                    type="submit" 
                    className="btn"
                    disabled={status === 'sending'}
                >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </section>
    );
};

export default Contact;
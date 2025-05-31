import React, { useState } from 'react';
import axios from 'axios';  
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
        
        try {
            const response = await axios.post('https://portfolio-backend-zq5y.onrender.com/api/contact', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            console.log('Response:', response.data);
            setStatus('success');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
            
            alert('Message sent successfully!');
            
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
            alert('Failed to send message. Please try again.');
        }
    };

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
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
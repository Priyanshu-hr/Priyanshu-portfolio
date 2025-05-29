import { API_URL } from '../config';

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message
      }),
    });
    
    if (response.ok) {
      // Show success message
      alert('Message sent successfully!');
      // Clear form
      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Failed to send message. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  }
};
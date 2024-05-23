import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  // Define styles as JavaScript objects
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Full height of the viewport
    backgroundColor: '#ffffff', // White background
    color: '#000000', // Black text
    
  };

  const formContainerStyle = {
    width: '100%',
    maxWidth: '500px',
    backgroundColor: '#fff', // White background for the form container
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional: adds a shadow for better visual separation
    borderRadius: '10px', // Optional: rounds the corners of the form container
    padding: '100px',
    textAlign: 'center',
    paddingBottom: '50px'
  };

  const formGroupStyle = {
    marginBottom: '15px',
    width: '100%'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '10px'
  };

  const textareaStyle = {
    width: '100%',
    height: '100px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    resize: 'vertical'
  };

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1em'
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3'
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label htmlFor="name" style={labelStyle}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="email" style={labelStyle}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="message" style={labelStyle}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={textareaStyle}
            />
          </div>
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;


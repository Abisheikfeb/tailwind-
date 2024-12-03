import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/auth/register', formData);
      console.log(res.data);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        className="mb-2 p-2 w-full border"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="mb-2 p-2 w-full border"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        className="mb-2 p-2 w-full border"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white w-full">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;

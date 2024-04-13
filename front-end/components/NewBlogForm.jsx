// NewBlogForm.js
import React, { useState } from 'react';
import axios from 'axios';

function NewBlogForm() {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    content: '',
    cover: '',
    readTime: {
      value: '',
      unit: ''
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/blogs', formData);
      // Redirect or show success message
    } catch (error) {
      console.error('Failed to create blog:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Create New Blog</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
        <textarea name="content" placeholder="Content" value={formData.content} onChange={handleChange} />
        <input type="text" name="cover" placeholder="Cover Image URL" value={formData.cover} onChange={handleChange} />
        <input type="number" name="value" placeholder="Read Time Value" value={formData.readTime.value} onChange={handleChange} />
        <input type="text" name="unit" placeholder="Read Time Unit" value={formData.readTime.unit} onChange={handleChange} />
        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
}

export default NewBlogForm;

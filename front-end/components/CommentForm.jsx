// CommentForm.js
import React, { useState } from 'react';
import axios from 'axios';

function CommentForm({ blogId }) {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/blogs/${blogId}`, { text });
      // Redirect or show success message
    } catch (error) {
      console.error('Failed to add comment:', error);
    }
  };

  return (
    <div>
      <h3>Add Comment</h3>
      <form onSubmit={handleSubmit}>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}

export default CommentForm;

// AvatarUploadForm.js
import React, { useState } from 'react';
import axios from 'axios';

function AvatarUploadForm() {
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('avatar', avatar);
      await axios.patch('/profile/avatar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // Redirect or show success message
    } catch (error) {
      console.error('Failed to upload avatar:', error);
    }
  };

  return (
    <div>
      <h3>Upload Avatar</h3>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
        <button type="submit">Upload Avatar</button>
      </form>
    </div>
  );
}

export default AvatarUploadForm;

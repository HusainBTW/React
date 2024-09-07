// src/components/PostForm.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function PostForm({ addPost, updatePost, posts }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  // If we're editing, find the post by ID and prefill the form
  useEffect(() => {
    if (id) {
      const postToEdit = posts.find((post) => post.id === id);
      if (postToEdit) {
        setTitle(postToEdit.title);
        setContent(postToEdit.content);
      }
    }
  }, [id, posts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: id || Date.now().toString(), // Generate ID if it's a new post
      title,
      content,
    };

    if (id) {
      updatePost(newPost);
    } else {
      addPost(newPost);
    }
    
    navigate('/posts'); // Redirect back to posts list after submission
  };

  return (
    <div>
      <h2>{id ? 'Edit Post' : 'Create Post'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Content</label>
          <textarea 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">{id ? 'Update Post' : 'Add Post'}</button>
      </form>
    </div>
  );
}

export default PostForm;

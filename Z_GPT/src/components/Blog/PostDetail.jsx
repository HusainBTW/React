// src/components/PostDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function PostDetail({ posts }) {
  const { id } = useParams();
  const post = posts.find(post => post.id === id);

  if (!post) {
    return <p>Post not found!</p>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
    
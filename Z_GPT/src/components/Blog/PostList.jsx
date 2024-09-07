// src/components/PostList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function PostList({ posts, deletePost }) {
  return (
    <div>
      <h2>All Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available. Create a new post!</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
              <button onClick={() => deletePost(post.id)}>Delete</button>
              <Link to={`/edit/${post.id}`}>Edit</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostList;

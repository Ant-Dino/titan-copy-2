// src/components/ExampleComponent.js

import React, { useState, useEffect } from 'react';
import { fetchData, sendData } from '../services/apiService';

const ExampleComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const postsData = await fetchData('posts');
        setPosts(postsData);
      } catch (error) {
        console.error("Failed to load posts:", error);
      }
    };

    loadPosts();
  }, []);

  const handleSubmit = async (postData) => {
    try {
      const newPost = await sendData('posts', postData);
      console.log('Post created:', newPost);
      // Optionally, update the UI here (e.g., add the new post to the list of posts)
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      {/* Assume there's a form here to submit a new post, calling handleSubmit on submit */}
    </div>
  );
};

export default ExampleComponent;
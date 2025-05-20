import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.css';

function Home() {
  var apiUrl = "https://fc0e-2400-adc1-41d-3c00-806a-fc5-394b-605a.ngrok-free.app/";
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(apiUrl+'posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(console.error);
  }, []);

  const deletePost = (id) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;

    fetch(apiUrl+`posts/${id}`, { method: 'DELETE' })
      .then(() => setPosts(posts.filter(post => post.id !== id)))
      .catch(console.error);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Posts List</h1>
        <Link to="/create" className={styles.createButton}>+ Create New Post</Link>
      </header>

      <ul className={styles.postList}>
        {posts.length === 0 && <p className={styles.noPosts}>No posts found.</p>}
        {posts.map(post => (
          <li key={post.id} className={styles.postItem}>
            <span className={styles.postTitle}>{post.title}</span>
            <div className={styles.actionButtons}>
              <Link to={`/edit/${post.id}`}>Edit</Link>
              <button onClick={() => deletePost(post.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

  import React, { useEffect, useState } from 'react';
  import { Link } from 'react-router-dom';

  import styles from './Home.module.css';
  // import config from '../config';

  function Home() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      fetch('http://localhost:4000/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(console.error);
    }, []);

    const deletePost = (id) => {
      if (!window.confirm('Are you sure you want to delete this post?')) return;

      fetch(`http://localhost:4000/posts/${id}`, { method: 'DELETE' })
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
                <button onClick={() => deletePost(post.id)}>Delevbvvbvbbte</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default Home;

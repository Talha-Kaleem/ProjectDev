import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

import styles from './Edit.module.css';

function Edit() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/posts/${id}`)
      .then(res => res.json())
      .then(data => setTitle(data.title))
      .catch(console.error);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:4000/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    })
      .then(() => navigate('/'))
      .catch(console.error);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Edit Post</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          className={styles.input}
        />
        <div className={styles.buttons}>
          <Link to="/" className={styles.cancel}>Cancel</Link>
          <button type="submit" className={styles.submit}>Save Changes</button>
        </div>
      </form>
    </div>
  );
}

export default Edit;

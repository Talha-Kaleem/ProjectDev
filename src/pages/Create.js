import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import styles from './Create.module.css';
import config from '../config';

function Create() {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(config+'posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    })
      .then(() => navigate('/'))
      .catch(console.error);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create Post</h2>
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
          <button type="submit" className={styles.submit}>Add Post</button>
        </div>
      </form>
    </div>
  );
}

export default Create;

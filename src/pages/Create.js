import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import styles from './Create.module.css';

function Create() {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();
    var apiUrl = "https://fc0e-2400-adc1-41d-3c00-806a-fc5-394b-605a.ngrok-free.app/";

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(apiUrl+'posts', {
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

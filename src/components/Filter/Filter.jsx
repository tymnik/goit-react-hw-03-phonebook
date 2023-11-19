import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div className={styles.filterForm}>
    <label className={styles.filterLabel}>
      Find contacts by name:
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Search..."
        className={styles.inputField}
      />
    </label>
  </div>
);

export default Filter;

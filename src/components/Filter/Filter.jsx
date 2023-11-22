import React, { Component } from 'react';
import styles from './Filter.module.css';

class Filter extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
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
  }
}

export default Filter;

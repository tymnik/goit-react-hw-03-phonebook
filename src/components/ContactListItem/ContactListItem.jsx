import React, { Component } from 'react';
import styles from './ContactListItem.module.css';

class ContactListItem extends Component {
  render() {
    const { contact, onDelete } = this.props;

    return (
      <li className={styles.listItem}>
        {contact.name}: {contact.number}
        <button className={styles.delBtn} onClick={() => onDelete(contact.id)}>
          Delete
        </button>
      </li>
    );
  }
}

export default ContactListItem;

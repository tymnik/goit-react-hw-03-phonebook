import React from 'react';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ contact, onDelete }) => (
  <li className={styles.listItem}>
    {contact.name}: {contact.number}
    <button className={styles.delBtn} onClick={() => onDelete(contact.id)}>Delete</button>
  </li>
);

export default ContactListItem;

import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => (
  <ul className={styles.contactList}>
    {contacts.map(contact => (
      <ContactListItem key={contact.id} contact={contact} onDelete={onDelete} />
    ))}
  </ul>
);

export default ContactList;

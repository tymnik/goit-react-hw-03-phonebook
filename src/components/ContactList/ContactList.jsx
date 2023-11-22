import React, { Component } from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const { contacts, onDelete } = this.props;

    return (
      <ul className={styles.contactList}>
        {contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
          />
        ))}
      </ul>
    );
  }
}

export default ContactList;

import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({ contacts, onSubmit }) => {
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setContact(prevContact => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isDuplicate = contacts.some(
      existingContact =>
        existingContact.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    onSubmit(contact);
    setContact({
      name: '',
      number: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.inputForm}>
      <label className={styles.inputLabel}>
        Name:
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
      </label>
      <label className={styles.inputLabel}>
        Number:
        <input
          type="tel"
          name="number"
          value={contact.number}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
      </label>
      <button type="submit" className={styles.addBtn}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;

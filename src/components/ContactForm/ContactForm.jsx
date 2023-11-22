import React, { Component } from 'react';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    contact: {
      name: '',
      number: '',
    },
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      contact: {
        ...prevState.contact,
        [name]: value,
      },
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    const { contacts, onSubmit } = this.props;
    const { contact } = this.state;

    const isDuplicate = contacts.some(
      existingContact =>
        existingContact.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    onSubmit(contact);
    this.setState({
      contact: {
        name: '',
        number: '',
      },
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.inputForm}>
        <label className={styles.inputLabel}>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.contact.name}
            onChange={this.handleChange}
            required
            className={styles.inputField}
          />
        </label>
        <label className={styles.inputLabel}>
          Number:
          <input
            type="tel"
            name="number"
            value={this.state.contact.number}
            onChange={this.handleChange}
            required
            className={styles.inputField}
          />
        </label>
        <button type="submit" className={styles.addBtn}>
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

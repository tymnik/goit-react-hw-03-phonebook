import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
   const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [
     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
    
     this.setState({ contacts: storedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      this.updateLocalStorage();
    }
  }

  componentWillUnmount() {}

  updateLocalStorage = () => {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  };

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...contact, id: nanoid() }],
    }));
  };

  handleFilterChange = filterValue => {
    this.setState({ filter: filterValue });
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1 style={{ color: '#121849', fontSize: '24px', textAlign: 'center' }}>
          Phonebook
        </h1>
        <ContactForm contacts={contacts} onSubmit={this.addContact} />

        <h2 style={{ color: '#121849', fontSize: '24px', textAlign: 'center' }}>
          Contacts
        </h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;

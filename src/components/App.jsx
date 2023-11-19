import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [state, setState] = useState({
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  });

  const addContact = contact => {
    setState(prevState => ({
      ...prevState,
      contacts: [...prevState.contacts, { ...contact, id: nanoid() }],
    }));
  };

  const handleFilterChange = filterValue => {
    setState(prevState => ({
      ...prevState,
      filter: filterValue,
    }));
  };

  const handleDeleteContact = contactId => {
    setState(prevState => ({
      ...prevState,
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  const filteredContacts = state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.toLowerCase())
  );

  return (
    <div>
      <h1 style={{ color: '#121849', fontSize: '24px', textAlign: 'center' }}>
        Phonebook
      </h1>
      <ContactForm contacts={state.contacts} onSubmit={addContact} />

      <h2 style={{ color: '#121849', fontSize: '24px', textAlign: 'center' }}>
        Contacts
      </h2>
      <Filter value={state.filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
};

export default App;

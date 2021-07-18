import { filter } from 'domutils';
import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/contactForm/ContactForm';
import ContactList from './components/contactList/ContactList';
import Filter from './components/filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = newContact => {
    this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] }));
  };

  handleRemoveContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  handleOnChange = filter => this.setState({ filter });

  getFiltredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.includes(filter));
  };

  render() {
    const { filter } = this.state;
    const filtredContacts = this.getFiltredContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleOnChange} />
        <ContactList
          contacts={filtredContacts}
          onRemove={this.handleRemoveContact}
        />
      </>
    );
  }
}

export default App;

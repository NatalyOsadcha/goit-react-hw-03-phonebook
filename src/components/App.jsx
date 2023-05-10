import React, { Component } from 'react';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
// import initialContacts from '../InitialContacts.json';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in the contacts.`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  };

  componentDidUpdate (prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  };
  
  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <PhonebookForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <Contacts
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;

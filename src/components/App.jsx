import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handelChange = e => {
    const { name, value } = e.currentTarget;
    return this.setState({ [name]: value });
  };

  handelSubmit = e => {
    e.preventDefault();
    const { contacts, name, number } = this.state;
    const contact = {
      number,
      name,
      id: nanoid(),
    };
    contacts.push(contact);
    this.reset(e);
  };

  reset = e => {
    this.setState({ name: '' });
    const { name, number } = e.currentTarget;
    name.value = '';
    number.value = '';
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.handelSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handelChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handelChange}
            />
          </label>
          <button type="submit">Add contact</button>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map(({ id, name, number }) => (
              <li key={id}>
                {name}:{number}
              </li>
            ))}
          </ul>
        </form>
      </>
    );
  }
}

export default App;

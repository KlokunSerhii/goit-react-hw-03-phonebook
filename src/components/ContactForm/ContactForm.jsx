import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    id: nanoid(),
  };
  handelChange = e => {
    const { name, value } = e.currentTarget;
    return this.setState({ [name]: value });
  };
  handelSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
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
        </form>
      </>
    );
  }
}
ContactForm.prototype = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;

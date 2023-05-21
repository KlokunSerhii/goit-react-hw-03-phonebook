import PropTypes from 'prop-types';

const ContactList = ({ contacts, onSubmit }) => {
  return (
    <ul onSubmit={onSubmit}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}:{number}
        </li>
      ))}
    </ul>
  );
};
ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;

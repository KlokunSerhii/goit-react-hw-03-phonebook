import PropTypes from 'prop-types';
import { Button, Li } from './ContactList.styled';
const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Li key={id}>
          {name}:{number}
          <Button onClick={() => onDelete(id)}>Delete </Button>
        </Li>
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

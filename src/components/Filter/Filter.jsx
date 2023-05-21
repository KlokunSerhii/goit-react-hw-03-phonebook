import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
};
Filter.prototype = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Filter;
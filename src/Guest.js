import React from 'react';
import PropTypes from 'prop-types';

const Guest = props =>
      <li>
        <span>{props.name}</span>
        <label>
          <input
            type="checkbox"
            checked={props.isConfirmed}
            onChange={props.handleConfirmation} /> Confirmed
        </label>
        <button onClick={props.handleEditing}>edit</button>
        <button>remove</button>
      </li>;

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  handleEditing: PropTypes.func.isRequired
}

export default Guest;

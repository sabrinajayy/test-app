import React from 'react';
import PropTypes from 'prop-types';

const PendingGuest = props =>
      <li className="pending">
        <span>
          {props.name}
        </span>
      </li>;

PendingGuest.propTypes = {
  name: PropTypes.string.isRequired,
}

export default PendingGuest;

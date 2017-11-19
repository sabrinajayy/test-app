import React from 'react';
import PropTypes from 'prop-types';

const ConfirmedFilter = props =>
    <div>
      <h2>Invitees</h2>
        <label>
          <input
            onChange={props.toggleFilter}
            type="checkbox"
            checked={props.isFiltered} />
            Hide those who haven't responded
        </label>
    </div>;

ConfirmedFilter.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired
}

export default ConfirmedFilter;

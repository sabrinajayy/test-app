import React from 'react';
import PropTypes from 'prop-types';

import GuestInputForm from './GuestInputForm';

const Header = props =>
  <header>
    <h1>RSVP</h1>
    <p>An app by Sabrina John</p>
    <GuestInputForm
      pendingGuest={props.pendingGuest}
      handleNameInput={props.handleNameInputAt}
      newGuestSubmitHandler={props.newGuestSubmitHandler} />
  </header>;


Header.propTypes = {
  handleNameInputAt: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  newGuestSubmitHandler: PropTypes.func.isRequired
}

export default Header;

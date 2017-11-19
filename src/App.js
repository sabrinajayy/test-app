import React, { Component } from 'react';

import Header from './Header';
import MainContent from './MainContent';

class App extends Component {

  state = {
    currentId: 0,
    isFiltered: false,
    pendingGuest: "",
    guests: []

  }

  toggleGuestPropertyAt = (property, guestId) =>
    this.setState({
      guests: this.state.guests.map((guest) => {
        if (guest.id == guestId) {
          return{
            ...guest,
            [property]: !guest[property]
          }
        }
        return guest;
      })
    });

  toggleConfirmationAt = guestId =>
    this.toggleGuestPropertyAt("isConfirmed", guestId);

  removeGuestAt = guestId =>
    this.setState({
      guests: this.state.guests.filter(guest => guestId !== guest.id)
    });

  toggleEditingAt = guestId =>
    this.toggleGuestPropertyAt("isEditing", guestId);

  setNameAt = (name, guestId) =>
    this.setState({
      guests: this.state.guests.map((guest) => {
        if (guest.id === guestId) {
          return{
            ...guest,
            name
          }
        }
        return guest;
      })
    });

  toggleFilter = () =>
    this.setState({ isFiltered: !this.state.isFiltered });

  handleNameInput = e =>
    this.setState({ pendingGuest: e.target.value });

  newGuestSubmitHandler = e => {
    e.preventDefault();
    const nextId = this.state.currentId += 1
    this.setState({
      guests: [
          {
            name: this.state.pendingGuest,
            isConfirmed: false,
            isEditing: false,
            id: nextId
          },
          ...this.state.guests
        ],
        pendingGuest: ""
      });
  }

  getTotalInvited = () => this.state.guests.length;
  getAttendingGuests = () => this.state.guests.reduce(
    (total, guest) => guest.isConfirmed ? total + 1 : total,
    0);


  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;

    return (
      <div className="App">
        <Header
          handleNameInputAt={this.handleNameInput}
          pendingGuest={this.state.pendingGuest}
          newGuestSubmitHandler={this.newGuestSubmitHandler}/>

        <MainContent
          toggleFilterAt={this.toggleFilter}
          isFiltered={this.state.isFiltered}
          totalInvited={totalInvited}
          numberUnconfirmed={numberUnconfirmed}
          numberAttending={numberAttending}
          guests={this.state.guests}
          toggleConfirmationAt={this.toggleConfirmationAt}
          toggleEditingAt={this.toggleEditingAt}
          setNameAt={this.setNameAt}
          isFiltered={this.state.isFiltered}
          removeGuestAt={this.removeGuestAt}
          pendingGuest={this.state.pendingGuest} />

      </div>
    );
  }
}

export default App;

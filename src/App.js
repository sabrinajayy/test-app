import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import Results from './components/Results';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
          <h1>Test App</h1>
            <p>This is a sample react app by Sabrina Jayy</p>
            <SearchForm />
          </Grid>
        </Jumbotron>
        <Results />
      </div>
    );
  }
}

export default App;

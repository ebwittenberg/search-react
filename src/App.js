import React from 'react';
import './App.css';

import User from './User';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    // make fetch request and store the returned JSON data in users state
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      this.setState({
        users: data
      })
    });

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          {
            this.state.users ? <User users={this.state.users}/> : null
          }
        </header>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';

import User from './User';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchText: ''
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
          <input 
            placeholder="Search users"
            style={{width: '200px'}}
            onChange={(e) => this.setState({ searchText: e.target.value })}
          />
          {
            this.state.users ? <User users={ this.state.users }/> : null
          }
        </header>
      </div>
    );
  }
}

export default App;

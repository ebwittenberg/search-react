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
            onChange={(e) => this._handleChange(e.target.value)}
          />
          {
            this.state.users ? <User users={ this.state.users } searchText={ this.state.searchText }/> : null
          }
        </header>
      </div>
    );
  }

  _handleChange = (searchText) => {
    // 1. update searchText state with typed in value
    console.log(searchText);
    this.setState({
      searchText
    })
    // 2. filter users state to include names that start with search text

  }
}

export default App;

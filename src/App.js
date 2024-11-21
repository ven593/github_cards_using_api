import React, { Component } from 'react';
import './App.css';
import GitHubCard from './GitHubCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '', // Stores the username input
    };
  }

  // Update the username in the state
  handleInputChange = (event) => {
    this.setState({ username: event.target.value });
  };

  // Handle form submission
  handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
  };

  render() {
    return (
      <div className="App">
        <h1>GitHub Cards</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <button type="submit">Search</button>
        </form>

        {this.state.username && (
          <GitHubCard username={this.state.username} />
        )}
      </div>
    );
  }
}

export default App;

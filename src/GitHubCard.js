// src/GitHubCard.js
import React, { Component } from 'react';

class GitHubCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,      // To store the fetched GitHub user data
      loading: false,  // To indicate if the data is still loading
      error: null,     // To store any error that occurs during fetch
    };
  }

  // Fetch GitHub user data when the component mounts
  componentDidMount() {
    this.setState({ loading: true, error: null });

    // Start fetching the data from GitHub API
    fetch(`https://api.github.com/users/${this.props.username}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          this.setState({ error: data.message, loading: false });
        } else {
          this.setState({ user: data, loading: false });
        }
      })
      .catch((error) => {
        this.setState({ error: 'Failed to fetch user data', loading: false });
      });
  }

  render() {
    const { user, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }
    if (!user) {
      return <div>No user data available.</div>;
    }

    return (
      <div className="github-card">
        <img src={user.avatar_url} alt={user.login} />
        <h2>{user.login}</h2>
        <p>{user.bio}</p>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          Visit GitHub Profile
        </a>
      </div>
    );
  }
}

export default GitHubCard;

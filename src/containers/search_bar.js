import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = { value: '' };

  onInputChange(event) {
    const { value } = event.target;
    this.setState({ value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // Fetch weather data
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.value}
          onChange={this.onInputChange.bind(this)}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}

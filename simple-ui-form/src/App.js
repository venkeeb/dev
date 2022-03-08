import React from 'react';
import Table from './Table.js';
import Form from './Form.js';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      city: '',
      items: []
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({username: this.state.username, city: this.state.city});

    this.setState({
      items,
      username: '',
      city: ''
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  render() {
    return (
      <div className="App">
        <Form handleFormSubmit={ this.handleFormSubmit } handleInputChange={ this.handleInputChange } newUsername={ this.state.username } newCity={ this.state.city }/>
        <Table items={ this.state.items }/>
      </div>
    );
  }
}

export default App;
import React from 'react';
import './App.css';

class Form extends React.Component {
  render() {
    return (
      <div id="Form">
        <h3>Add a new item to the table:</h3>  
        <form onSubmit={this.props.handleFormSubmit}>
          <label htmlFor="username">
          Username:
          <input id="username" value={this.props.newUsername} type="text" name="username" onChange={this.props.handleInputChange} required />
          </label>
          <label htmlFor="city">
          City:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input id="city" value={this.props.newCity} type="text" name="city" onChange={this.props.handleInputChange} required />
          </label>
          <button type="submit" value="Submit" className="form-button">Add Item</button>
        </form>
      </div>
    );
  }
}
export default Form;
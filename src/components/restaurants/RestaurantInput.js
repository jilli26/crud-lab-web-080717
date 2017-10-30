import React, { Component } from 'react';
import cuid from 'cuid';
export const cuidFn = cuid;


class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    console.log('submitted form');
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text
      }
    })
    this.setState({
      text: ''
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>Create new restaurant:</label>
            <input type='text' onChange={(event) => this.handleChange(event)}/>
          </p>
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

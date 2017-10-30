import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor() {
    super()

    this.state = {
      text: ''
    }
  }



  handleChange = (event) => {
    console.log(event);
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    console.log('submitted');
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId
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
            <label>Add a review:</label>
            <input
              type='text'
              // value={this.state.text}
              onChange={(event) => this.handleChange(event)}/>
            <input type='submit'/>
          </p>
          <Reviews
            store={this.props.store}
            restaurantId={this.props.restaurantId}/>
        </form>
      </div>
    );
  }
};


export default ReviewInput;

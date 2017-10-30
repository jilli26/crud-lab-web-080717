import React, { Component } from 'react';
import cuid from 'cuid';
export const cuidFn = cuid;
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {

  handleDelete = (event) => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }

  render() {

    return (
      <div>
        <li id={this.props.restaurant.id}>
          {this.props.restaurant.text}
          <button onClick={(event) => this.handleDelete(event)}>Delete</button>
        </li>
        <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id}/>
      </div>
    );
  }
};

export default Restaurant;

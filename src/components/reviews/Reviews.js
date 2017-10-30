import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  debugger
  render() {
    const associatedReviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId)
    const listReviews = associatedReviews.map((review, index) => {
      return <Review review={review} store={this.props.store} key={index}/>
    })
    return (
      <ul>
        {listReviews}
        reviews go here
      </ul>
    );
  }
};

export default Reviews;

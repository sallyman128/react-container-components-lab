import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'AK12QD90gEcvz423dtEL2ywZtmdjIlW6';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch(URL)
      .then( resp => resp.json() )
      .then( reviewsData => this.setState({ reviews: reviewsData.results}))
      .catch( err => console.log(err) )
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews = {this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;
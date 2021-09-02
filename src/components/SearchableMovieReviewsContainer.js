import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'AK12QD90gEcvz423dtEL2ywZtmdjIlW6';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleSubmit = (e) => {
    this.setState({
      searchTerm: e.target.searchTerm.value,
    });
  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Search: </label>
          <input name="searchTerm"></input>
          <button type="submit">Submit</button>
        </form>
        <MovieReviews />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer

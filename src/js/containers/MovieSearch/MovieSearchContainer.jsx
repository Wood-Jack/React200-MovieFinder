import React from 'react';
import MovieDetailContainer from '../MovieDetails/MovieDetailContainer';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { updateMovieSearch, fetchMovies } from './movieSearchAction';


class MovieSearchContainer extends React.Component {

  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.handleMovieInput = this.handleMovieInput.bind(this);
    this.fetchDataClick = this.fetchDataClick.bind(this);
  }

  clickHandler(event) {
    window.location.assign(`/#/movie/${event.target.value}`);
  }
  handleMovieInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateMovieSearch(value));
  }

  fetchDataClick(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(fetchMovies(value));
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { movie, lineItems } = this.props;
    const noImageUrl = 'https://www.freeiconspng.com/uploads/no-image-icon-23.jpg';

    // console.log("LineItems.Search",lineItems.Search);
    return (
      <Router>
        <div className='container'>
          <div className='jumbotron mt-3'>
            <h1 className='display-4 mb-4 text-center'> Movie Search</h1>
            <div className='input-group mb-2'>
              <input
                className='form-control search-movie' id='movieInput'
                type='text' onChange={ this.handleMovieInput } value={ movie }
                placeholder='Enter Movie Name'
                aria-label='Movie Contains.'
                aria-describedby='button-addon2'
              />
              <div className='input-group-append'>
                <button
                  className='btn btn-primary search' type='button'
                  value={ movie } onClick={ this.fetchDataClick }
                  id='button-addon2'
                > Go
                </button>
              </div>
            </div>
          </div>
          { lineItems.Search.map(lineItem => (
            <div className='media rounded mb-3'>
              <img
                src={ lineItem.Poster !== 'N/A' ? lineItem.Poster : noImageUrl }
                className='image-fluid img-thumbnail m-2'
                alt='No Poster Available'
                width='20%'
                height='auto'
              />
              <div className='media-body'>
                <h5 className='my-1 title'>
                  {lineItem.Title !== 'N/A'
                                        ? lineItem.Title
                                        : 'No Title Available'}
                </h5>
                <p className='my-0 year' >
                  {lineItem.Year !== 'N/A'
                                        ? lineItem.Year
                                        : 'No Release Data Information Available'}
                </p>
                <hr />
                <p className='mb-5 plot'>
                  {lineItem.Plot !== 'N/A'
                                        ? lineItem.Plot
                                        : 'No Plot Information Available'}
                </p>
                <button
                  className='btn btn-primary more-info'
                  id={ `frog${lineItems.Search}` }
                  onClick={ this.clickHandler }
                  value={ lineItem.imdbID }
                >
                                    More Information
                                    </button>
              </div>
            </div>
            ))}
          <Route path='/movie/:id' component={ MovieDetailContainer } />
        </div>
      </Router>
    );
  }
}

export default MovieSearchContainer;

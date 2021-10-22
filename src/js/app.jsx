import React, { Component } from 'react';
<<<<<<< HEAD
import { HashRouter as Router, Route } from 'react-router-dom';
import { ReactDOM } from 'react-dom';

import MovieSearchContainer from './containers/MovieSearch/index';
import MovieDetailContainer from './containers/MovieDetails/index';

export default class App extends Component {

=======
import {HashRouter as Router, Route} from 'react-router-dom';

export default class App extends React.Component {
>>>>>>> b9d0ca6c8606e6834ae9ae82aa15b84c5fbb33a2
  render() {

    return (

      <Router>
<<<<<<< HEAD
        <div className="container">
          <Route exact path="/" component={ MovieSearchContainer } />
          <Route path="/movie/:id" component={ MovieDetailContainer } />
=======
        <div className='container'>
          <Route exact path='/' component={ MovieSearchContainer}/>
          <Route path='/movie/:id' component={ MovieDetailContainer } />
>>>>>>> b9d0ca6c8606e6834ae9ae82aa15b84c5fbb33a2
        </div>
      </Router> 
    );
  }
}

import MovieSearchContainer from './containers/MovieSearchContainer';
import MovieDetailContainer from './containers/MovieDetailContainer';
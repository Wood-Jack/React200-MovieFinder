/* eslint-disable linebreak-style */
import React from 'react';

class MovieDetailContainer extends React.Component {

  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

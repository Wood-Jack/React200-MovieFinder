/* eslint-disable linebreak-style */
import { connect } from 'react-redux';

import MovieSearchContainer from './MovieSearchContainer';


function mapStoreToProps(store) {
  return {
    movie: store.search.movie,
    lineItems: store.search.lineItems
  };
}

<<<<<<< HEAD
export default connect(mapStoreToProps)(MovieSearchContainer);
=======
export default connect(mapStoreToProps)(MovieSearchContainer);
>>>>>>> 744a98eee8a250c78db5e7aff7afe5e5a4a57396

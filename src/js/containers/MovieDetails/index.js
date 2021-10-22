import { connect } from 'react-redux'; 
import MovieDetailContainer from './MovieDetailContainer';


function mapStoreToProps(store) {
  return {

    lineItems: store.search.lineItems,
  };
}

<<<<<<< HEAD
export default connect(mapStoreToProps)(MovieDetailContainer);
=======
export default connect(mapStoreToProps)(MovieDetailContainer);
>>>>>>> 744a98eee8a250c78db5e7aff7afe5e5a4a57396

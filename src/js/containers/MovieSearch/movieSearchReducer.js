/* eslint-disable linebreak-style */
const defaultState = {
<<<<<<< HEAD
    movie: "",
    movieInfo: "",
    error: "",
    lineItems: {
      Search: []
    }
  };
  
  export default function MovieSearchReducer(state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
   
      case 'UPDATE_MOVIE_SEARCH': {
        return { 
          ...state,
          movie: payload.movie
        };
      }
  
      case 'FETCH_MOVIES_PENDING': {
        return {
          ...state
        };
      }
  
      case 'FETCH_MOVIES_FULFILLED': {
        return {
          movie: "",
          lineItems: action.payload.data
        };
      }
  
      case 'FETCH_MOVIES_REJECTED': {
        return {
          ...state,
          movie: "",
          movieInfo: "",
          error: true
        };
      }
  
  
      default: {
        return state;
      }
    }
  }
=======
  movie: "",
  movieInfo: "",
  error: "",
  lineItems: {
    Search: []
  }
};

export default function MovieSearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
 
    case 'UPDATE_MOVIE_SEARCH': {
      return { 
        ...state,
        movie: payload.movie
      };
    }

    case 'FETCH_MOVIES_PENDING': {
      return {
        ...state
      };
    }

    case 'FETCH_MOVIES_FULFILLED': {
      return {
        movie: "",
        lineItems: action.payload.data
      };
    }

    case 'FETCH_MOVIES_REJECTED': {
      return {
        ...state,
        movie: "",
        movieInfo: "",
        error: true
      };
    }


    default: {
      return state;
    }
  }
}
>>>>>>> 744a98eee8a250c78db5e7aff7afe5e5a4a57396

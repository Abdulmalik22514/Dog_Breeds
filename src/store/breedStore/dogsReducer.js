import * as dogActions from './actions';

const initialState = {
  dogs: [],
  loading: false,
  error: null,
};

const dogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case dogActions.GET_DOGS_BEGIN: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case dogActions.GET_DOGS_SUCCESS: {
      return {
        ...state,
        dogs: action.payload,
      };
    }

    case dogActions.GET_DOGS_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default dogsReducer;

import * as dogActions from './types';

const initialState = {
  dogs: [],
  loading: false,
  error: null,
  favorites: [],
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

    case dogActions.ADD_TO_FAVORITES: {
      const breed = action.payload;
      const isFav = [...state.favorites].includes(breed);
      const prevFavs = [...state.favorites].filter(item => item !== breed);
      const data = isFav ? prevFavs : [...state.favorites, breed];

      return {
        ...state,
        favorites: data,
      };
    }

    default:
      return state;
  }
};

export default dogsReducer;

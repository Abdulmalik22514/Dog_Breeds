export const GET_DOGS_BEGIN = 'GET_DOGS_BEGIN';
export const GET_DOGS_SUCCESS = 'GET_DOGS_SUCCESS';
export const GET_DOGS_FAILURE = 'GET_DOGS_FAILURE';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';

export const getDogsSuccess = dogs => ({
  type: GET_DOGS_SUCCESS,
  payload: dogs,
});

export const getDogsFailure = error => ({
  type: GET_DOGS_FAILURE,
  payload: error,
});

export const startLoading = () => ({
  type: GET_DOGS_BEGIN,
  payload: true,
});

export const stopLoading = () => ({
  type: GET_DOGS_BEGIN,
  payload: false,
});

export const addToFavorites = breed => ({
  type: ADD_TO_FAVORITES,
  payload: breed,
});

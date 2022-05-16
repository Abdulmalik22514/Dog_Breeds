import axios from 'axios';
import {
  getBreedImageFailure,
  getBreedImageSuccess,
  getDogsFailure,
  getDogsSuccess,
  startLoading,
  stopLoading,
} from './types';

export const GetAllBreeds = () => {
  return async dispatch => {
    try {
      dispatch(startLoading());
      const res = await axios.get('https://dog.ceo/api/breeds/list/all');

      const refinedData = Object.entries(res.data.message).map(
        ([key, value]) => ({
          name: key,
          options: value,
        }),
      );
      dispatch(getDogsSuccess(refinedData));
    } catch (error) {
      dispatch(getDogsFailure(error));
    } finally {
      dispatch(stopLoading());
    }
  };
};

export const GetBreedDetails = breed => {
  return async dispatch => {
    try {
      dispatch(startLoading());
      const res = await axios.get(`https://dog.ceo/api/breed/${breed}/images`);

      dispatch(getBreedImageSuccess(res.data.message[0]));
    } catch (error) {
      dispatch(getBreedImageFailure(error));
    } finally {
      dispatch(stopLoading());
    }
  };
};

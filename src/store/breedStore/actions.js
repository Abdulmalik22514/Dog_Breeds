import axios from 'axios';
import {
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

      //   console.log(refinedData);

      dispatch(getDogsSuccess(refinedData));
    } catch (error) {
      dispatch(getDogsFailure(error));
    } finally {
      dispatch(stopLoading());
    }
  };
};

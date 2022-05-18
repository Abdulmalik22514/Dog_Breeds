import * as authActions from './actions';

const initialState = {
  authToken: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActions.LOGIN:
      return {
        ...state, //copy all previous states
        authToken: action.payload,
      };
    case authActions.LOGOUT:
      return {
        authToken: null,
      };
    default:
      return state;
  }
};

export default authReducer;

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const Login = (username, password) => {
  const token = username + password;
  return {
    type: LOGIN,
    payload: token,
  };
};

export const Logout = () => {
  return {
    type: 'LOGOUT',
  };
};

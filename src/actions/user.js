export const TOGGLE_LOGIN_FORM = 'TOGGLE_LOGIN_FORM';
export const toggleLoginForm = () => ({
  type: TOGGLE_LOGIN_FORM,
});

export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';
export const changeFieldValue = (field, value) => ({
  type: CHANGE_FIELD_VALUE,
  field,
  value,
});

export const LOGIN = 'LOGIN';
export const login = () => ({
  type: LOGIN,
});

export const CONNECT_USER = 'CONNECT_USER';
export const connectUser = (pseudo, id, logged, token) => ({
  type: CONNECT_USER,
  pseudo,
  id,
  logged,
  token,
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT,
});

// partie inscription

export const CHANGE_SIGNUP_FIELD_VALUE = 'CHANGE_SIGNUP_FIELD_VALUE';
export const changeSignFieldValue = (field, value) => ({
  type: CHANGE_SIGNUP_FIELD_VALUE,
  field,
  value,
});

export const SIGNUP = 'SIGNUP';
export const signup = () => ({
  type: SIGNUP,
});

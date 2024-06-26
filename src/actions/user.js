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
export const connectUser = (currentUser) => ({
  type: CONNECT_USER,
  currentUser,
});

export const FOUND_USER_DATAS = 'FOUND_USER_DATAS';
export const foundUserDatas = () => ({
  type: FOUND_USER_DATAS,
});

export const LOAD_DATAS = 'LOAD_DATAS';
export const loadDatas = (userDatas) => ({
  type: LOAD_DATAS,
  userDatas,
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT,
});

export const UNLOAD_DATA = 'UNLOAD_DATA';
export const unloadData = () => ({
  type: UNLOAD_DATA,
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

export const AVAILABLE = 'AVAILABLE';
export const available = () => ({
  type: AVAILABLE,
});

export const MODIFIER_PROFILE = 'MODIFIER_PROFILE';
export const modifierProfile = () => ({
  type: MODIFIER_PROFILE,
});

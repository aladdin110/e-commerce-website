export const AUTH_USER = "AUTH_USER";
export const LOGOUT_USER = "LOGOUT_USER";

//authenticate user action
const authUserAction = user => ({
  type: AUTH_USER,
  payload: user
});

//logout user action
const logoutUserAction = () => ({
  type: LOGOUT_USER,
});

//attempt to authenticate user
export const authUser = user => {
  console.log(user)
  return dispatch => {
    dispatch(authUserAction(user));
  };
};

//attempt to logout user
export const logoutUser = () => {
  //console.log(user)
  return dispatch => {
    dispatch(logoutUserAction());
  };
};
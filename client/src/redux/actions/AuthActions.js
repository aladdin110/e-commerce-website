export const AUTH_USER = "AUTH_USER";

//the actual authenticate user action
const authUserAction = user => ({
  type: AUTH_USER,
  payload: user
});

//attempt to authenticate user
export const authUser = user => {
  console.log(user)
  return dispatch => {
    dispatch(authUserAction(user));
  };
};
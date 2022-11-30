import {AUTH_USER, LOGOUT_USER} from "../actions/AuthActions";

const initState = {
    
};

//if authenticated user, populate state with user data
const authReducer = (state = initState, action) => {
    if (action.type === AUTH_USER) {
        return action.payload;
    }
    if (action.type === LOGOUT_USER) {
        return initState;
    }
    return state;
};


export default authReducer;
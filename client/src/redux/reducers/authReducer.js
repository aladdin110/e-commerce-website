import {AUTH_USER} from "../actions/AuthActions";

const initState = {
    user: {}
};

//if authenticated user, populate state with user data
const authReducer = (state = initState, action) => {
    if (action.type === AUTH_USER) {
        return action.payload;
    }

    return state;
};

export default authReducer;
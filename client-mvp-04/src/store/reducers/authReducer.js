import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  SET_USER,
} from '../actions/types';

const authDefaultState = {
  isLoaded: null,
  authToken: null,
  loggedIn: null,
  user: null,
  error: null,
  userProfile: null,
};

export default (state = authDefaultState, { type, payload }) => {
  switch (type) {
    case AUTH_START:
      return {
        ...state,
        isLoaded: false,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        loggedIn: true,
        authToken: payload.authToken,
        user: payload.user,
        userProfile: {
          firstName: payload.user.name.firstName,
          lastName: payload.user.name.lastName,
          signupEmail: payload.user.email,
          isAdmin: payload.user.accessLevel === 'admin',
        },
      };
    case AUTH_FAIL:
      return {
        ...state,
        isLoaded: true,
        loggedIn: false,
        error: payload,
      };
    case SET_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

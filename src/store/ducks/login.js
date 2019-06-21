/**
 * Types
 */
export const Types = {
  LOGIN_REQUEST: "login/LOGIN_REQUEST",
  LOGIN_FAILED: "login/LOGIN_FAILED",
  LOGIN_SUCCESS: "login/LOGIN_SUCCESS"
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  data: {}
};
export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_SUCCESS:
      return { data: action.payload };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  signUpRequest: login => ({
    type: Types.LOGIN_REQUEST,
    payload: login
  }),
  signUpSuccess: login => ({
    type: Types.LOGIN_SUCCESS,
    payload: login
  }),
  signUpFail: error => ({
    type: Types.LOGIN_FAILED,
    payload: error
  })
};

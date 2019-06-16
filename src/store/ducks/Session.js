/**
 * Types
 */

export const Types = {
  REQUEST: "session_REQUEST",
  SUCCESS: "session_SUCCESS",
  FAILURE: "session_FAILURE"
};

/**
 *  Reducers
 */

const INITIAL_STATE = {
  session: {},
  error: false,
  loading: false
};

export default function session(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return {
        ...state,
        session: action.payload.userData,
        error: false,
        loading: false
      };
    case Types.FAILURE:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  sessionRequest: (email, password) => ({
    type: "session_REQUEST",
    payload: { email, password }
  }),

  sessionSuccess: userData => ({
    type: "session_SUCCESS",
    payload: { userData }
  }),

  sessionFailure: () => ({
    type: "session_FAILURE"
  })
};

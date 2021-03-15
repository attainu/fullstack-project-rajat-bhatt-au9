import {GET_USERS, GET_USERS_ERROR} from '../actions/types'

const initialState = {
    users: [],
    user: null,
    loading: true,
    error: {},
  };

  export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}

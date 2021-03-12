import { CREATE_USER_SUCCESS, CREATE_USER_FAIL } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case CREATE_USER_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}

import {GET_USERS, 
GET_USERS_ERROR,
PUT_EDIT_PROFILE, 
PUT_EDIT_PROFILE_ERROR} from '../actions/types'


const initialState = {
    users: [],
    user: null,
    editprofiles: [],
    editprofile: null,
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

      case PUT_EDIT_PROFILE:
      return {
        ...state,
        editprofiles:payload,
        loading: false,
      };
    case PUT_EDIT_PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}

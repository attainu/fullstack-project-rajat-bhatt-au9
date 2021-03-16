import {
  GET_TICKETS,
  GET_TICKETS_ERROR,
  CREATE_TICKET_FAIL,
  CREATE_TICKET_SUCCESS,
} from "../actions/types";

const initialState = {
  tickets: [],
  ticket: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TICKETS:
      return {
        ...state,
        tickets: payload,
        loading: false,
      };

    case CREATE_TICKET_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case CREATE_TICKET_FAIL:
      return {
        ...state,
        loading: false,
      };
    case GET_TICKETS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}

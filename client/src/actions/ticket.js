import axios from "axios";

import { setAlert } from "./alert";
import {
  GET_TICKETS,
  GET_TICKETS_ERROR,
  CREATE_TICKET_SUCCESS,
  CREATE_TICKET_FAIL,
} from "./types";

export const getTickets = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/ticket/");

    dispatch({
      type: GET_TICKETS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_TICKETS_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

//create user
export const createTicket = ({
  ticket_issue,
  priority,
  req_category,
  desc,
}) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ ticket_issue, priority, req_category, desc });

  try {
    const res = await axios.post(
      "http://localhost:5000/api/ticket",
      body,
      config
    );
    dispatch({
      type: CREATE_TICKET_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert("Ticket Created Successfully", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: CREATE_TICKET_FAIL,
    });
  }
};

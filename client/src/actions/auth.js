import axios from "axios";
import { setAlert } from "./alert";

import { CREATE_USER_SUCCESS, CREATE_USER_FAIL } from "./types";
//create user
export const createUser = ({ name, email, password, role }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password, role });

  try {
    const res = await axios.post(
      "http://localhost:5000/api/users",
      body,
      config
    );
    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert("User Added Successfully", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: CREATE_USER_FAIL,
    });
  }
};

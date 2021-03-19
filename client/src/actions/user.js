import axios from "axios";
import {
  GET_USERS, 
  GET_USERS_ERROR,
  PUT_EDIT_PROFILE, 
  PUT_EDIT_PROFILE_ERROR

} from './types';

import { setAlert } from "./alert";

//Get User
export const getUsers = () => async (dispatch) => {
  
    try {
      const res = await axios.get("http://localhost:5000/api/users/allusers");
  
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_USERS_ERROR,
        payload: {
          msg: err.response.statusText,
          status: err.response.status,
        },
      });
    }
  };

 // Edit User Profile
  export const editProfile = (userId, { name, avatar, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, avatar, password });

  try {
    const res = await axios.put(
      `http://localhost:5000/api/users/editprofile/${userId}`,
      body,
      config
    );
    dispatch({
      type: PUT_EDIT_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert("User updated Successfully", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: PUT_EDIT_PROFILE_ERROR,
    });
  }
};
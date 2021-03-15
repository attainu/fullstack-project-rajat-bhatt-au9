import axios from "axios";
import {GET_USERS, GET_USERS_ERROR} from './types';



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
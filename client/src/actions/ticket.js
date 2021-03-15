import axios from "axios";
import {GET_TICKETS, GET_TICKETS_ERROR} from './types';



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
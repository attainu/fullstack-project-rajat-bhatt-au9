import React from "react";
import Moment from "react-moment";

const UserList = ({ user }) => {
  return (
    <tr>
      <td>
        <div className='d-flex align-items-center'>
          <div className='m-r-10'>
            <img className='btn btn-circle text-white' src={user.avatar} />
          </div>
          <div className=''>
            <h4 className='m-b-0 font-16'>{user.name}</h4>
          </div>
        </div>
      </td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>
        <label className='label label-danger'>
          <Moment format='DD/MM/YYYY'>{user.date}</Moment>
        </label>
      </td>
    </tr>
  );
};

export default UserList;

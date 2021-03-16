import React from "react";

const TicketList = ({ ticket }) => {
  return (
    <tr>
      <td>
        <div className='d-flex align-items-center'>
          <div className='m-r-10'>
            <img className='btn btn-circle text-white' src={ticket.avatar} />
          </div>
          <div className=''>
            <h4 className='m-b-0 font-16'>{ticket.name}</h4>
          </div>
        </div>
      </td>
      <td>{ticket.email}</td>
      <td>{ticket.ticket_issue}</td>
      <td>{ticket.priority}</td>
      <td>{ticket.desc}</td>
      <td>{ticket.req_category}</td>
      <td>
        <label className='label label-danger'>{ticket.status}</label>
      </td>
    </tr>
  );
};

export default TicketList;

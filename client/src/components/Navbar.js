import React, { Fragment } from "react";

const Navbar = () => (
  <Fragment>
    <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a class='navbar-brand' href='#'>
        CRM Ticket System
      </a>
      <button
        class='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span class='navbar-toggler-icon'></span>
      </button>
      <div class='collapse navbar-collapse ' id='navbarSupportedContent'>
        <ul class='nav navbar-nav'>
          <li class='nav-item active'>
            <a class='nav-link' href='./dashboardtemp.html'>
              Dashboard <span class='sr-only'>(current)</span>
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='./clientPage.html'>
              Client
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='./ticketConvo.html'>
              Ticket
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </Fragment>
);

export default Navbar;

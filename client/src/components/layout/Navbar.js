import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Navbar = ({ auth: { isAuthenticated, loading ,user}, logout }) => (
  <Fragment>
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link className='navbar-brand' to='/admin-dashboard'>
        CRM Ticket System
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse ' id='navbarSupportedContent'>
        <ul className='nav navbar-nav'>
          <li className='nav-item active'>
          {user.role === 'Admin' ? 
          <Link className='nav-link' to='/admin-dashboard'>Dashboard</Link>
          : <Link className='nav-link' to='/client-dashboard'>Dashboard</Link>}
            
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/user-page'>
            {user.role === 'Admin' ? <span> Client </span> : null }
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/ticket'>
              Ticket
            </Link>
          </li>
          <li className='nav-item'>
            <a className='nav-link' onClick={logout} href='#!'>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </Fragment>
);

Navbar.propsTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.auth.user
});

export default connect(mapStateToProps, { logout })(Navbar);

import React from "react";
import "./ClientDashboard.css";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import Profile from "./Profile";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ClientDashboard = ({ user, isAuthenticated }) => {
  return !isAuthenticated ? (
    <Redirect to='/' />
  ) : (
    <div id='wrapper'>
      <div className='overlay'></div>

      <div id='page-content-wrapper'>
        <div id='content'>
          <div className='container-fluid p-0 px-lg-0 px-md-0'>
            {/* Navbar */}
            <Navbar />

            <div className='container-fluid px-lg-4'>
              <div className='row'>
                <div className='col-md-12 mt-lg-4 mt-4'>
                  <div className='d-sm-flex align-items-center justify-content-between mb-4'>
                    <h1 className='h3 mb-0 text-gray-800'>Dashboard</h1>
                    <Link to="/ticket"
                      className='d-sm-inline-block btn btn-sm btn-primary shadow-sm'
                    >
                      <i className='fas fa-download fa-sm text-white-50'></i>
                      View Ticket Lists
                    </Link>
                    
                  </div>
                </div>

               
                {/* vhjgjhd */}
                <Profile user={user} />


                {/* vhjgjhd */}
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <Footer />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});
export default connect(mapStateToProps)(ClientDashboard);

import React, {useEffect} from "react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import "./userpage.css";
import { Link } from "react-router-dom";
import {getUsers} from '../../actions/user';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import UserList from './UserList'

const UserPage = ({getUsers, user: { users, loading }}) => {


  useEffect(() => {
    getUsers();
  }, [getUsers]);
  return (
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
                  <h1 className='h3 mb-0 text-gray-800'>Users</h1>
                  <Link to="/create-user"  className='d-sm-inline-block btn btn-sm btn-primary shadow-sm'>
                    <i className='fas fa-download fa-sm text-white-50'></i>
                    Add New User
                  </Link>
                
                </div>
              </div>
              {/* vhjgjhd */}
              <div className='col-md-12'>
                <div className='row'>
                  <div className='col-sm-3'>
                    <div className='card'>
                      <div className='card-body'>
                        <h5 className='card-title mb-4'>User Count</h5>
                        <h1 className='display-5 mt-1 mb-3'>42</h1>
                        <div className='mb-1'>
                          {/* <span className="text-danger"> <a href="#"></a><i className="mdi mdi-arrow-bottom-right">Go to Client</i></a> </span>
                                          <span className="text-muted">Since last week</span> */}
                          <span className='text-danger'>
                            <i className='mdi mdi-arrow-bottom-right'>
                              Go to Client
                            </i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

  

                <div className='col-md-12 mt-4'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='d-md-flex align-items-center'>
                        <div>
                          <h4 className='card-title'>List Of Users </h4>
                        </div>
                        <div className='ml-auto'>
                          <div className='dl'>
                            <select className='custom-select'>
                              <option value='0' selected=''>
                                Monthly
                              </option>
                              <option value='1'>Daily</option>
                              <option value='2'>Weekly</option>
                              <option value='3'>Yearly</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='table-responsive'>
                      <table className='table v-middle'>
                        <thead>
                          <tr className='bg-light'>
                          
                            <th className='border-top-0'>Name</th>
                            <th className='border-top-0'>Email</th>
                            <th className='border-top-0'>Role</th>
                            <th className='border-top-0'>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map((user)=>(

                            <UserList key={user.id} user={user} />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* vhjgjhd */}
            </div>
          </div>
        </div>
      </div>
      <div></div>
      {/* footer */}
      <Footer />
    </div>
  </div>
  );
};

UserPage.propTypes = {
  getUsers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {getUsers})( UserPage);

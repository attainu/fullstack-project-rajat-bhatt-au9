import React, { Fragment, useEffect, useState } from "react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import "./userpage.css";
import { Link } from "react-router-dom";
import { getUsers } from "../../actions/user";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import UserList from "./UserList";
import Alert from "../layout/Alert";
import Spinner from "../layout/Spinner";

const UserPage = ({ getUsers, user: { users, loading } }) => {
  const [allUser, setallUser] = useState(true);
  const [adminUser, setadminUser] = useState(false);
  const [clientUser, setclientUser] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const onChange = async (e) => {
    e.preventDefault();
    //e.target.value
    if (e.target.value === "Admin") {
      setadminUser(true);
      setclientUser(false);
      setallUser(false);
    } else if (e.target.value === "Client") {
      setadminUser(false);
      setclientUser(true);
      setallUser(false);
    } else {
      setadminUser(false);
      setclientUser(false);
      setallUser(true);
    }
  };

  return loading && users === null ? (
    <Fragment>
      <Navbar />
      <Spinner />
      <Footer />
    </Fragment>
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
                    <h1 className='h3 mb-0 text-gray-800'>Users</h1>
                    <Link
                      to='/create-user'
                      className='d-sm-inline-block btn btn-sm btn-primary shadow-sm'
                    >
                      <i class='fas fa-plus'></i>
                      Add New User
                    </Link>
                  </div>
                </div>
                {/* vhjgjhd */}
                <Alert />
                <div className='col-md-12'>
                  <div className='row'>
                    <div className='col-sm-3'>
                      <div className='card'>
                        <div className='card-body'>
                          <h5 className='card-title mb-4'>User Count</h5>
                          <h1 className='display-5 mt-1 mb-3'>
                            {Object.keys(users).length}
                          </h1>
                          <div className='mb-1'>
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
                            <h1 className='card-title'>List Of Users </h1>
                          </div>
                          <div className='ml-auto'>
                            <h3 className='card-title'>Filter</h3>
                            <div className='dl'>
                              <select
                                className='custom-select'
                                name='user'
                                onChange={(e) => onChange(e)}
                              >
                                <option value='All Users' selected=''>
                                  All Users
                                </option>
                                <option value='Admin'>Admin</option>
                                <option value='Client'>Client</option>
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
                              <th className='border-top-0'>
                                User Created Date
                              </th>
                              <th className='border-top-0'>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {(function () {
                              if (allUser) {
                                return users.map((user) => (
                                  <UserList key={user.id} user={user} />
                                ));
                              } else if (adminUser) {
                                return users
                                  .filter((user) => user.role === "Admin")
                                  .map((filterAdmin) => (
                                    <UserList
                                      key={filterAdmin.id}
                                      user={filterAdmin}
                                    />
                                  ));
                              } else if (clientUser) {
                                return users
                                  .filter((user) => user.role === "Client")
                                  .map((filterAdmin) => (
                                    <UserList
                                      key={filterAdmin.id}
                                      user={filterAdmin}
                                    />
                                  ));
                              }
                            })()}
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

export default connect(mapStateToProps, { getUsers })(UserPage);

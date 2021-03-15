import React from "react";
import "./admindashboard.css";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import Profile from "./Profile";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AdminDashboard = ({ user, isAuthenticated }) => {
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
                    <a
                      href='#'
                      className='d-sm-inline-block btn btn-sm btn-primary shadow-sm'
                    >
                      <i className='fas fa-download fa-sm text-white-50'></i>
                      Generate Report
                    </a>
                  </div>
                </div>
                {/* vhjgjhd */}
                <Profile user={user} />
                <div className='col-md-12'>
                  <div className='row'>
                    <div className='col-sm-3'>
                      <div className='card'>
                        <div className='card-body'>
                          <h5 className='card-title mb-4'>Client Count</h5>
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
                    <div className='col-sm-3'>
                      <div className='card'>
                        <div className='card-body'>
                          <h5 className='card-title mb-4'>
                            Total Tickets Count
                          </h5>
                          <h1 className='display-5 mt-1 mb-3'>52</h1>
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
                    <div className='col-sm-3'>
                      <div className='card'>
                        <div className='card-body'>
                          <h5 className='card-title mb-4'>
                            Pending Tickets Count
                          </h5>
                          <h1 className='display-5 mt-1 mb-3'>52</h1>
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
                            <h4 className='card-title'>List Of tickets</h4>
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
                              <th className='border-top-0'>Products</th>
                              <th className='border-top-0'>License</th>
                              <th className='border-top-0'>Support Agent</th>
                              <th className='border-top-0'>Technology</th>
                              <th className='border-top-0'>Tickets</th>
                              <th className='border-top-0'>Sales</th>
                              <th className='border-top-0'>Earnings</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <div className='m-r-10'>
                                    <a className='btn btn-circle btn-info text-white'>
                                      EA
                                    </a>
                                  </div>
                                  <div className=''>
                                    <h4 className='m-b-0 font-16'>
                                      Elite Admin
                                    </h4>
                                  </div>
                                </div>
                              </td>
                              <td>Single Use</td>
                              <td>John Doe</td>
                              <td>
                                <label className='label label-danger'>
                                  Angular
                                </label>
                              </td>
                              <td>46</td>
                              <td>356</td>
                              <td>
                                <h5 className='m-b-0'>$2850.06</h5>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <div className='m-r-10'>
                                    <a className='btn btn-circle btn-orange text-white'>
                                      MA
                                    </a>
                                  </div>
                                  <div className=''>
                                    <h4 className='m-b-0 font-16'>
                                      Monster Admin
                                    </h4>
                                  </div>
                                </div>
                              </td>
                              <td>Single Use</td>
                              <td>Venessa Fern</td>
                              <td>
                                <label className='label label-info'>
                                  Vue Js
                                </label>
                              </td>
                              <td>46</td>
                              <td>356</td>
                              <td>
                                <h5 className='m-b-0'>$2850.06</h5>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <div className='m-r-10'>
                                    <a className='btn btn-circle btn-success text-white'>
                                      MP
                                    </a>
                                  </div>
                                  <div className=''>
                                    <h4 className='m-b-0 font-16'>
                                      Material Pro Admin
                                    </h4>
                                  </div>
                                </div>
                              </td>
                              <td>Single Use</td>
                              <td>John Doe</td>
                              <td>
                                <label className='label label-success'>
                                  Bootstrap
                                </label>
                              </td>
                              <td>46</td>
                              <td>356</td>
                              <td>
                                <h5 className='m-b-0'>$2850.06</h5>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <div className='m-r-10'>
                                    <a className='btn btn-circle btn-purple text-white'>
                                      AA
                                    </a>
                                  </div>
                                  <div className=''>
                                    <h4 className='m-b-0 font-16'>
                                      Ample Admin
                                    </h4>
                                  </div>
                                </div>
                              </td>
                              <td>Single Use</td>
                              <td>John Doe</td>
                              <td>
                                <label className='label label-purple'>
                                  React
                                </label>
                              </td>
                              <td>46</td>
                              <td>356</td>
                              <td>
                                <h5 className='m-b-0'>$2850.06</h5>
                              </td>
                            </tr>
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
export default connect(mapStateToProps)(AdminDashboard);

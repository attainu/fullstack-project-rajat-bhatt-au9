import React from "react";
import "./admindashboard.css";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import Profile from "./Profile";
import { connect } from "react-redux";

const AdminDashboard = ({ user, isAuthenticated }) => (
  <div id='wrapper'>
    <div class='overlay'></div>

    <div id='page-content-wrapper'>
      <div id='content'>
        <div class='container-fluid p-0 px-lg-0 px-md-0'>
          {/* Navbar */}
          <Navbar />

          <div class='container-fluid px-lg-4'>
            <div class='row'>
              <div class='col-md-12 mt-lg-4 mt-4'>
                <div class='d-sm-flex align-items-center justify-content-between mb-4'>
                  <h1 class='h3 mb-0 text-gray-800'>Dashboard</h1>
                  <a
                    href='#'
                    class='d-sm-inline-block btn btn-sm btn-primary shadow-sm'
                  >
                    <i class='fas fa-download fa-sm text-white-50'></i>
                    Generate Report
                  </a>
                </div>
              </div>
              {/* vhjgjhd */}
              <Profile user={user} />
              <div class='col-md-12'>
                <div class='row'>
                  <div class='col-sm-3'>
                    <div class='card'>
                      <div class='card-body'>
                        <h5 class='card-title mb-4'>Client Count</h5>
                        <h1 class='display-5 mt-1 mb-3'>42</h1>
                        <div class='mb-1'>
                          {/* <span class="text-danger"> <a href="#"></a><i class="mdi mdi-arrow-bottom-right">Go to Client</i></a> </span>
                                          <span class="text-muted">Since last week</span> */}
                          <span class='text-danger'>
                            <i class='mdi mdi-arrow-bottom-right'>
                              Go to Client
                            </i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='col-sm-3'>
                    <div class='card'>
                      <div class='card-body'>
                        <h5 class='card-title mb-4'>Total Tickets Count</h5>
                        <h1 class='display-5 mt-1 mb-3'>52</h1>
                        <div class='mb-1'>
                          <span class='text-danger'>
                            <i class='mdi mdi-arrow-bottom-right'>
                              Go to Client
                            </i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='col-sm-3'>
                    <div class='card'>
                      <div class='card-body'>
                        <h5 class='card-title mb-4'>Pending Tickets Count</h5>
                        <h1 class='display-5 mt-1 mb-3'>52</h1>
                        <div class='mb-1'>
                          <span class='text-danger'>
                            <i class='mdi mdi-arrow-bottom-right'>
                              Go to Client
                            </i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='col-md-12 mt-4'>
                  <div class='card'>
                    <div class='card-body'>
                      <div class='d-md-flex align-items-center'>
                        <div>
                          <h4 class='card-title'>List Of tickets</h4>
                        </div>
                        <div class='ml-auto'>
                          <div class='dl'>
                            <select class='custom-select'>
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
                    <div class='table-responsive'>
                      <table class='table v-middle'>
                        <thead>
                          <tr class='bg-light'>
                            <th class='border-top-0'>Products</th>
                            <th class='border-top-0'>License</th>
                            <th class='border-top-0'>Support Agent</th>
                            <th class='border-top-0'>Technology</th>
                            <th class='border-top-0'>Tickets</th>
                            <th class='border-top-0'>Sales</th>
                            <th class='border-top-0'>Earnings</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div class='d-flex align-items-center'>
                                <div class='m-r-10'>
                                  <a class='btn btn-circle btn-info text-white'>
                                    EA
                                  </a>
                                </div>
                                <div class=''>
                                  <h4 class='m-b-0 font-16'>Elite Admin</h4>
                                </div>
                              </div>
                            </td>
                            <td>Single Use</td>
                            <td>John Doe</td>
                            <td>
                              <label class='label label-danger'>Angular</label>
                            </td>
                            <td>46</td>
                            <td>356</td>
                            <td>
                              <h5 class='m-b-0'>$2850.06</h5>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class='d-flex align-items-center'>
                                <div class='m-r-10'>
                                  <a class='btn btn-circle btn-orange text-white'>
                                    MA
                                  </a>
                                </div>
                                <div class=''>
                                  <h4 class='m-b-0 font-16'>Monster Admin</h4>
                                </div>
                              </div>
                            </td>
                            <td>Single Use</td>
                            <td>Venessa Fern</td>
                            <td>
                              <label class='label label-info'>Vue Js</label>
                            </td>
                            <td>46</td>
                            <td>356</td>
                            <td>
                              <h5 class='m-b-0'>$2850.06</h5>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class='d-flex align-items-center'>
                                <div class='m-r-10'>
                                  <a class='btn btn-circle btn-success text-white'>
                                    MP
                                  </a>
                                </div>
                                <div class=''>
                                  <h4 class='m-b-0 font-16'>
                                    Material Pro Admin
                                  </h4>
                                </div>
                              </div>
                            </td>
                            <td>Single Use</td>
                            <td>John Doe</td>
                            <td>
                              <label class='label label-success'>
                                Bootstrap
                              </label>
                            </td>
                            <td>46</td>
                            <td>356</td>
                            <td>
                              <h5 class='m-b-0'>$2850.06</h5>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class='d-flex align-items-center'>
                                <div class='m-r-10'>
                                  <a class='btn btn-circle btn-purple text-white'>
                                    AA
                                  </a>
                                </div>
                                <div class=''>
                                  <h4 class='m-b-0 font-16'>Ample Admin</h4>
                                </div>
                              </div>
                            </td>
                            <td>Single Use</td>
                            <td>John Doe</td>
                            <td>
                              <label class='label label-purple'>React</label>
                            </td>
                            <td>46</td>
                            <td>356</td>
                            <td>
                              <h5 class='m-b-0'>$2850.06</h5>
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

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});
export default connect(mapStateToProps)(AdminDashboard);

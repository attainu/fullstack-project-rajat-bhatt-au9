import React,{useEffect,useState} from "react";
import "./admindashboard.css";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import Profile from "./Profile";
import { Redirect,Link } from "react-router-dom";
import { connect } from "react-redux";
import UserList from "../user/UserList";
import { getUsers } from "../../actions/user";
import ReactPaginate from "react-paginate"; 
const AdminDashboard = ( {isAuthenticated,user, getUsers, users: { users, loading } }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  /* const [user_data, setUsers] = useState(users.slice(0,20)); */
  const[pageNumber, setPageNumber] = useState(0)
  const usersPerPage = 5
  const pagesVisited = pageNumber * usersPerPage

  const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map((user)=> {
    return (
        <UserList key={user.id} user={user} />
    )
  })

  const pageCount = Math.ceil(users.length / usersPerPage)

  const changePage = ({selected}) => {
    setPageNumber(selected)
  }

  return !isAuthenticated ? (
    <Redirect to='/' />
  ) : (
    <div id='wrapper'>
      <div className='overlay'></div>

      <div id='page-content-wrapper'>
        <div id='content'>
          <div className='container-fluid p-0 px-lg-0 px-md-0'>
            <Navbar />

            <div className='container-fluid px-lg-4'>
              <div className='row'>
                <div className='col-md-12 mt-lg-4 mt-4'>
                  <div className='d-sm-flex align-items-center justify-content-between mb-4'>
                    <h1 className='h3 mb-0 text-gray-800'>Dashboard</h1>
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
                            <h4 className='card-title'>List Of Users</h4>
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
                           {displayUsers}
                           
                          </tbody>
                        </table>
                      </div> <br/>

                      <div>
                           <ReactPaginate className="d-flex align-items-center" previousLabel= {"Previous"}
                           nextLabel={"Next"}
                           pageCount={pageCount}
                           onPageChange={changePage}
                           containerClassName={"paginationBttns"}
                           previousLinkClassName={"previousBttn"}
                           nextLinkClassName={"nextBttn"}
                           disabledClassName={"paginationDisabled"}
                           activeClassName={"paginationActive"}
                           /> 
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
  users: state.user,
});
export default connect(mapStateToProps, { getUsers })(AdminDashboard);


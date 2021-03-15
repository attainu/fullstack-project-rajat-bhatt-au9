import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import store from "./store";

import AdminDashboard from "./components/dashboard/AdminDashboard";
import CreateUser from "./components/auth/CreateUser";
import Login from "./components/auth/Login";
<<<<<<< HEAD
import ClientDashboard from "./components/dashboard/ClientDashboard";

=======
import UserPage from './components/user/UserPage';
import TicketListing from "./components/ticket/TicketListing";
>>>>>>> aefcf9cf0956d1c824c67549a815dacc1f9e613a
import PrivateRoute from "./components/routing/PrivateRoute";

import "./App.css";

import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/' component={Login} />

            <PrivateRoute path='/admin-dashboard' component={AdminDashboard} />

            <PrivateRoute
<<<<<<< HEAD
              path='/client-dashboard'
              component={ClientDashboard}
            />

            <Route path='/create-user' component={CreateUser} />
=======
          exact
              path='/admin-dashboard'
              component={AdminDashboard}
            />
            <PrivateRoute exact  path='/ticket' component={TicketListing} />
            <PrivateRoute
            exact
              path='/user-page'
              component={UserPage}
            />

            <PrivateRoute exact  path='/create-user' component={CreateUser} />
>>>>>>> aefcf9cf0956d1c824c67549a815dacc1f9e613a
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

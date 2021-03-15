import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import store from "./store";

import AdminDashboard from "./components/dashboard/AdminDashboard";
import CreateUser from "./components/auth/CreateUser";
import Login from "./components/auth/Login";
import ClientDashboard from "./components/dashboard/ClientDashboard";

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
              path='/client-dashboard'
              component={ClientDashboard}
            />

            <Route path='/create-user' component={CreateUser} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

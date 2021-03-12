import { Fragment } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import store from "./store";

import Dashboard from "./components/Dashboard";
import CreateUser from "./components/CreateUser";
import Login from "./components/Login";

import "./App.css";

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Route exact path='/' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />

        <Route exact path='/createUser' component={CreateUser} />
      </Fragment>
    </Router>
  </Provider>
);

export default App;

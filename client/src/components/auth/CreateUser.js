import React, { Fragment, useState } from "react";
import "./createuser.css";
import Navbar from "../layout/Navbar";
import Alert from "../layout/Alert";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { createUser } from "../../actions/auth";

import PropTypes from "prop-types";

const CreateUser = ({ setAlert, createUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passowrd2: "",
    role: "Admin",
  });

  const { name, email, password, password2, role } = formData;
  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Password do not match", "danger");
    } else {
      //console.log("Success");
      createUser({ name, email, password, role });
    }
  };

  return (
    <Fragment>
      <Navbar />

      <form className='form-basic' onSubmit={(e) => onSubmit(e)}>
        <div className='form-title-row'>
          <h1>Add User</h1>
        </div>
        <Alert />
        <div className='form-row'>
          <label>
            <span>Full name</span>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={(e) => onChange(e)}
            />
          </label>
        </div>

        <div className='form-row'>
          <label>
            <span>Email</span>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
            />
          </label>
        </div>
        <div className='form-row'>
          <label>
            <span>Role</span>
            <select name='role' value={role} onChange={(e) => onChange(e)}>
              <option>Admin</option>
              <option>Client</option>
            </select>
          </label>
        </div>
        <div className='form-row'>
          <label>
            <span>Password</span>
            <input
              type='password'
              name='password'
              value={password}
              onChange={(e) => onChange(e)}
            />
          </label>
        </div>
        <div className='form-row'>
          <label>
            <span>Confirm Password</span>
            <input
              type='password'
              placeholder='Confirm Password'
              name='password2'
              value={password2}
              onChange={(e) => onChange(e)}
            />
          </label>
        </div>

        <div className='form-row'>
          <button type='submit'>Submit Form</button>
        </div>
      </form>
    </Fragment>
  );
};

CreateUser.propTypes = {
  setAlert: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, createUser })(CreateUser);

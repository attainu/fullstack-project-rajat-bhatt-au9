import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className='my-login-page'>
      <section className='h-100'>
        <div className='container h-100 '>
          <div className='row justify-content-md-center h-100'>
            <div className='card-wrapper'>
              <div className='brand'>
                <img
                  src='https://cdn.onlinewebfonts.com/svg/img_311846.png'
                  alt='logo'
                />
              </div>
              <div className='card fat'>
                <div className='card-body'>
                  <h4 className='card-title'>Login</h4>
                  <form
                    method='POST'
                    className='my-login-validation'
                    novalidate=''
                  >
                    <div className='form-group mt-4'>
                      <label for='email' className='mb-2'>
                        E-Mail Address
                      </label>
                      <input
                        id='email'
                        type='email'
                        className='form-control'
                        name='email'
                        value=''
                        required
                        autofocus
                      />
                      <div className='invalid-feedback'>Email is invalid</div>
                    </div>

                    <div className='form-group mt-4'>
                      <label for='password' className='mb-2'>
                        Password
                      </label>

                      <input
                        id='password'
                        type='password'
                        className='form-control'
                        name='password'
                        required
                        data-eye
                      />
                      <div className='invalid-feedback'>
                        Password is required
                      </div>
                    </div>

                    <div className='form-group mt-4'>
                      <button type='submit' className='btn btn-primary btn-lg'>
                        <a href='./dashboard.html'></a>Login
                      </button>
                    </div>
                    <div className='mt-4 text-center'>
                      Forgot Password? <a href='register.html'>Click Here</a>
                    </div>
                  </form>
                </div>
              </div>
              <div className='footer'>
                Copyright &copy; 2021 &mdash; CRM System
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

import React from 'react'

export default function FormSignup() {
  return (
    <div className="form-content-right">
      <form className="form">
        <h1>
          The Falcodev community welcomes all those who wish to be 
          aware of the latest in information technology as well as 
          participate in some of our projects as software developers.
        </h1>

        <div className="form-inputs">
          <label htmlFor="userName" className="form-label">
              Username: 
          </label>
          <input 
              id="userName"
              type="text" 
              name="userName"
              className="form-input"
              placeholder="Enter your userName"
          />
        </div>

        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
              Email: 
          </label>
          <input 
              id="email"
              type="email" 
              name="userName"
              className="form-input" 
              placeholder="Enter your email"
          />
        </div>

        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
              Password: 
          </label>
          <input 
              id="password"
              type="password" 
              name="password"
              className="form-input" 
              placeholder="Enter your password"
          />
        </div>

        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
              Confirm Password: 
          </label>
          <input 
              id="password2"
              type="password2" 
              name="password2"
              className="form-input" 
              placeholder="Enter your password again"
          />
        </div>

        <button type="submit">Sign Up</button>

        <span>
          Already have an account?
          Login <a href="#">here</a>
        </span>

      </form>
    </div>
  );
}


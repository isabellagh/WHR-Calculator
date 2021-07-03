import React from "react"

const Login = ({handleLoginFormChange, handleLoginFormSubmit, email, password}) => {
    return (
      <div className="Login">
        <h1>Log In</h1>
        <form onSubmit={handleLoginFormSubmit}>
          <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleLoginFormChange}
          value={email}
        /><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleLoginFormChange}
          value={password}
        /><br />
        <input
          type="submit"
          value="Login"
        />
        </form>
      </div>
    )
  }
  
  export default Login

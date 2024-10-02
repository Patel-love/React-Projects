import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); 

  function handleSubmit(e) {
    e.preventDefault();

    axios.get('http://localhost:4040/api') 
      .then((response) => {
        const users = response.data;
        const user = users.find(user => user.email === email && user.password === password);
        
        if (user) {
          setUser(user); 
          navigate('/'); 
        } else {
          alert("Please SignUP First")
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }

  function handleSignUpRedirect() {
    navigate('/signup'); 
  }

  return (
    <div className="container mt-5 p-5 w-50 text-center"
      style={{
        backgroundImage: " linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        borderRadius: "10px",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <h1 className="text-center text-primary mb-4">
        <b><i>Login Form</i></b>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label"><b>User Email</b></label>
          <input
            type="email"
            className="form-control shadow-sm"
            style={{ borderRadius: "8px" }}
            placeholder="Enter User Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label"><b>User Password</b></label>
          <input
            type="password"
            className="form-control shadow-sm"
            style={{ borderRadius: "8px" }}
            placeholder="Enter User Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button className="btn btn-outline-primary" type="submit">Login</button>
          <button
            className="btn btn-outline-primary ms-3"
            type="button"
            onClick={handleSignUpRedirect}
          >
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;

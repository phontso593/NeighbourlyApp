import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/neighborly-black-vertical.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy login validation (replace with Firebase/Auth later)
    if (email && password) {
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("Please enter email and password.");
    }
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <img src={logo} alt="Neighborly Logo" style={{ ...logoStyle, height: "80px", width: "80px" }} />

        <p style={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: 400 }}>
          Welcome back
        </p>

        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#adadad' }}>
          Please enter your detail to sign in.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
          <button
            type="button"
            style={{
              backgroundColor: '',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #000000',
              cursor: 'pointer',
              width: '40%',
              fontSize: '0.9rem',
            }}
            onClick={() => {
              alert("For apple when implement with firebase.");
            }} >
          </button>

          <button
            type="button"
            style={{
              backgroundColor: '',
              padding: '6px 12px',
              borderRadius: '4px',
              border: '1px solid #000000',
              cursor: 'pointer',
              width: '40%',
              fontSize: '0.9rem',
            }}
            onClick={() => {
              alert("For apple when implement with firebase.");
            }} >
          </button>

          <button
            type="button"
            style={{
              backgroundColor: '',
              padding: '6px 12px',
              borderRadius: '4px',
              border: '1px solid #000000',
              cursor: 'pointer',
              width: '40%',
              fontSize: '0.9rem',
            }}
            onClick={() => {
              alert("For apple when implement with firebase.");
            }} >
          </button>
        </div>

        <label style={{ ...labelStyle, fontSize: '0.95rem' }}>Email:</label>
        <input
          style={{ ...inputStyle, fontSize: '0.95rem', padding: '2px 6px' }}
          placeholder="Enter your email..."
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label style={{ ...labelStyle, fontSize: '0.95rem' }}>Password:</label>
        <input
          style={{ ...inputStyle, fontSize: '0.95rem', padding: '2px 6px' }}
          placeholder="Password@123"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button style={{ ...buttonStyle, fontSize: '1rem', padding: '6px 0' }} type="submit">Login</button>
        <br />
        <p style={{ textAlign: 'center', color: '#adadad', fontSize: '0.9rem' }}>
          Don't have an account yet? <Link
            to="/register"
            style={{ color: '#000000', textDecoration: 'none' }}>
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
 const logoStyle= {
    height: "120px",
    width: "120px",
    display: "block",
    alignSelf: "center",
  }
const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    backgroundColor: '#f0f4f8',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '450px',
    height: '600px',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    
  };

  const inputStyle = {
    borderRadius: '10px',
    border:'1px solid #bfc9d1',
    padding: '3px',
    fontsize: '1rem',
    outline: 'none',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const labelStyle = {
    fontweight: 'bold',
    color: 'color black',
    alignItems:'left',
  }
 const buttonStyle = {
    backgroundColor: '#0000d8',
    borderRadius:'10px',
    padding: '3px',
    color: 'white',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
 }
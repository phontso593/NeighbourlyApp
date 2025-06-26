import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/neighborly-hor logo.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup,OAuthProvider } from "firebase/auth";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  {/* Regular email submits */}
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message || "Login failed. Please check your credentials.");
    }
    setLoading(false);
  };

  {/* GitHub login handler */}
  const handleGithubLogin = async () => {
    setLoading(true);
    const auth = getAuth();
    const provider = new OAuthProvider('github.com');
    try {
      await signInWithPopup(auth, provider);
      alert("GitHub login successful!");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message || "GitHub login failed.");
    }
    setLoading(false);
  };

  {/* Google handler */}
  const handleGoogleLogin = async () => {
    setLoading(true);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Google login successful!");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message || "Google login failed.");
    }
    setLoading(false);
  };

  {/* Facebook login handler */}
  const handleFacebookLogin = async () => {
    setLoading(true);
    const auth = getAuth();
    const provider = new OAuthProvider('facebook.com');
    try {
      await signInWithPopup(auth, provider);
      alert("Facebook login successful!");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message || "Facebook login failed.");
    }
    setLoading(false);
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <br/>
        <br/>
        <img src={logo} alt="Neighborly Logo" style={{ ...logoStyle, height: "80px", width: "80px" }} />

        <p style={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: 400 }}>
          Welcome back
        </p>

        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#adadad' }}>
          Please enter your detail to sign in.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>

          {/* Github login button */}
          <button
            type="button"
            style={{
              backgroundColor: '',
              padding: '5px',
              borderRadius: '8px',
              border: '1px solid #000000',
              cursor: 'pointer',
              height: '30px',
              width: '80px',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => {
              handleGithubLogin();
              }} > 
              <img src={require("../assets/github logo.png")} 
              alt="Apple" style={{ height: '20px', width: '20px', alignItems:'center' }} />
              </button>

              {/* Google Login button */}
              <button
              type="button"
              style={{
                backgroundColor: '',
                padding: '6px 12px',
                borderRadius: '8px',
                border: '1px solid #000000',
                cursor: 'pointer',
                height: '30px',
                width: '80px',
                fontSize: '0.9rem',
              }}
              onClick={handleGoogleLogin}
              >
              <img src={require("../assets/google logo.jpg")} 
              alt="Google" style={{ height: '18px', width: '15px',marginLeft:'20px',alignItems:'center' }} />
              </button>

              {/*Facebook Login button */}
          <button
            type="button"
            style={{
              backgroundColor: '',
              padding: '6px 12px',
              borderRadius: '8px',
              border: '1px solid #000000',
              cursor: 'pointer',
              height: '30px',
              width: '80px',
              fontSize: '0.9rem',
            }}
            onClick={() => { 
              handleFacebookLogin();
            }} >
              <img src={require("../assets/facebook logo.webp")} 
            alt="LinkedIn" style={{ height: '20px', width: '40px',marginLeft:'8px',alignItems:'center'}} />
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
        <button style={{ ...buttonStyle, fontSize: '1rem', padding: '6px 0' }} type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </button>
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
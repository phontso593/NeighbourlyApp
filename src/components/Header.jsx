// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <header style={styles.header}>
        <img src={require("../assets/logo black.png")} 
              alt="Neighborly Logo" style={styles.logo} />
        <h1 style={styles.title}>Neighborly</h1>
        <nav>
          <Link to="/" className="header-link">
            Home
          </Link>
          <Link to="/donate" className="header-link">
            Donate
          </Link>
          <Link to="/request" className="header-link">
            Request
          </Link>
          <Link to="/login" className="header-link">
            Login
          </Link>
          <Link to="/register" className="header-link">
            Register
          </Link>
        </nav>
      </header>
      <style>
        {`
          .header-link {
            color: white;
            margin: 0 0.2rem;
            text-decoration: none;
            font-size: 1rem;
            transition: color 0.2s, background 0.2s, transform 0.2s;
            padding: 0.2rem 0.4rem;
            border-radius: 4px;
            display: inline-block;
          }
          .header-link:hover {
            background: #4040fb;
            text-decoration: none;
            transform: scale(1.15);
          }
        `}
      </style>
    </>
  );
};

const styles = {
  header: {
    background: "#0404e2",
    padding: "0.6rem 0.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "50px",
    fontFamily: "didot, sans-serif",
  },
  logo: {
    height: "70px",
    width: "auto",
    marginLeft: "60px",
    display: "block",
  },
  title: { color: "white",
     marginLeft: "200px",
     fontSize: "1.5rem",
     fontWeight: "bold",
    fontSize: "2.5rem",
    display: "block",
    textAlign: "left",
  },
};

export default Header;

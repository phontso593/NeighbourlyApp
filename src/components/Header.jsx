// src/components/Header.jsx
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header style={styles.header}>
      <img src="https://placehold.co/140x140.png" alt="Neighbourly Logo" style={styles.logo} data-ai-hint="logo" />
      <h1 style={styles.title}>Neighbourly</h1>
      <nav>
        <Link href="/" style={styles.link}>
          Home
        </Link>
        <Link href="/donate" style={styles.link}>
          Donate
        </Link>
        <Link href="/request" style={styles.link}>
          Request
        </Link>
        <Link href="/login" style={styles.link}>
          Login
        </Link>
        <Link href="/register" style={styles.link}>
          Register
        </Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    background: "#4caf50",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: "140px",
    width: "auto",
  },
  
  title: { color: "white", margin: 0 },
  link: { color: "white", margin: "0 1rem", textDecoration: "none" },
};

export default Header;

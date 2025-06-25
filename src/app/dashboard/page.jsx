'use client';
import React from "react";
// import { collection, onSnapshot } from "firebase/firestore";
// import { db } from "@/lib/firebase/firebaseConfig";

const Dashboard = () => {
  return (
    <div style={{ maxWidth: 700, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 12, boxShadow: "0 2px 16px rgba(0,0,0,0.08)" }}>
      <h2 style={{ textAlign: "center", marginBottom: 8, color: "#2d3748" }}>Dashboard</h2>
      <p style={{ textAlign: "center", color: "#4a5568", marginBottom: 24 }}>Welcome to your item feed!</p>
    </div>
  );
};

export default Dashboard;

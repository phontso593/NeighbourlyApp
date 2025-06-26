// src/pages/LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import logoLandingPage from "../assets/logo-landingpage.jpg";

const LandingPage = () => {


  return (
    <div className="min-h-screen flex flex-col justify-between " style={{ backgroundColor: "#f0f4f8" }}>
      <main className="flex-1">
        <div style={{ height: "2.5rem" }} />

        <section
          style={{
            ...styles.container,
            padding: "3rem 2rem",
            minHeight: "400px",
          }}
        >
          <div>
            <h1 style={styles.header}>Give Back, Grow Together</h1>
            <p style={styles.paragraph}>
              Join our community and make a difference by donating items or sharing your stories.
            </p>
            <div className="mt-6 space-x-4">
              <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-800 transition">
                Login
              </Link>
              <Link
                to="/register"
                className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-800 transition"
              >
                Sign Up
              </Link>
              <Link
                to="/dashboard"
                className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-800 transition"
              >
                Continue as Guest
              </Link>
            </div>
          </div>
          <div
            className="hidden md:block w-full h-full"
            style={{
              borderRadius: "12px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
              backgroundImage: `url(${logoLandingPage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "200px",
              minWidth: "100%",
              height: "100%",
            }}
          />
        </section>

        <div style={{ height: "8rem" }} />

           {/* Featured Donations Section */}
          <section
            className="mx-auto mb-8"
            style={{
              maxWidth: styles.container.maxWidth,
              width: styles.container.width,
            }}
          >
            <h2 className="text-4xl font-bold mb-4 text-blue-800">Featured Donations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-200 rounded-lg shadow p-6 flex flex-col items-center" style={{ minHeight: "200px" }}>
                <span className="text-4xl mb-2">🧸</span>
                <h4 className="font-semibold mb-2 text-lg">Children's Toys</h4>
                <p className="text-gray-600 text-base text-center">Gently used toys for ages 3-7 available for donation.</p>
              </div>
              <div className="bg-blue-200 rounded-lg shadow p-6 flex flex-col items-center" style={{ minHeight: "200px" }}>
                <span className="text-4xl mb-2">👚</span>
                <h4 className="font-semibold mb-2 text-lg">Winter Clothes</h4>
                <p className="text-gray-600 text-base text-center">Warm jackets and sweaters for families in need.</p>
              </div>
              <div className="bg-blue-200 rounded-lg shadow p-6 flex flex-col items-center" style={{ minHeight: "200px" }}>
                <span className="text-4xl mb-2">📚</span>
                <h4 className="font-semibold mb-2 text-lg">Books</h4>
                <p className="text-gray-600 text-base text-center">A variety of books for all ages, ready to inspire.</p>
              </div>
            </div>
          </section>

          <div style={{ height: "8rem" }} />

          {/* How it works Section */}
        <section
          className="mx-auto mb-8"
          style={{
            maxWidth: styles.container.maxWidth,
            width: styles.container.width,
            background: "#eaf1fb",
            borderRadius: "10px",
            padding: "2.5rem 2rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <h2 className="text-2xl font-bold mb-6 text-blue-800 text-center">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">📝</div>
              <h4 className="font-semibold mb-1">1. Sign Up or Login</h4>
              <p className="text-gray-700 text-center text-sm">Create an account or log in to join the community.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">🎁</div>
              <h4 className="font-semibold mb-1">2. Donate or Request</h4>
              <p className="text-gray-700 text-center text-sm">List items to donate or request what you need.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">🤝</div>
              <h4 className="font-semibold mb-1">3. Connect & Share</h4>
              <p className="text-gray-700 text-center text-sm">Connect with neighbors and arrange exchanges easily.</p>
            </div>
          </div>
        </section>

        <div style={{ height: "8rem" }} />

        <section
          className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
          style={{
            maxWidth: styles.container.maxWidth,
            width: styles.container.width,
          }}
        >
          <FeatureCard
            icon="🤝"
            title="Connect"
            description="Meet neighbors and build lasting relationships."
          />
          <FeatureCard
            icon="🎁"
            title="Donate"
            description="Share items you no longer need with those who do."
          />
          <FeatureCard
            icon="📖"
            title="Inspire"
            description="Share your stories and inspire others to give back."
          />
        </section>
        <div style={{ height: "6rem" }} />
      </main>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-blue-200 rounded-lg shadow p-6 flex flex-col items-center">
    <div className="text-4xl mb-3">{icon}</div>
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const styles = {
  container: {
    padding: "5rem 3rem",
    maxWidth: "1300px",
    width: "100%",
    boxSizing: "border-box",
    margin: "2rem auto",
    backgroundColor: "#3066be",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    color: "#ffffff",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2rem",
    alignItems: "center",
    minHeight: "520px", // Increased height
  },
  header: {
    fontWeight: "bold",
    fontSize: "2.5rem",
    marginBottom: "1rem",
    display: "block",
    textAlign: "left",
  },
  paragraph: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    textAlign: "left",
  },
};

export default LandingPage;
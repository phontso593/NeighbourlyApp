import React, { useEffect,useState } from "react";
import DonateForm from "./DonateForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getAuth, onAuthStateChanged } from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../assets/firebaseConfig";


const Donate = () => {
  /*
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (!user) {
        window.location.href = "/login";
      }
    });
    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);

  */
  const [donations, setDonations] = useState([]);
  
    useEffect(() => {
      const unsubscribe = onSnapshot(collection(db, "donations"), (snapshot) => {
        const donationsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setDonations(donationsList);
      });
      return () => unsubscribe();
    }, []);

  return (
    <>
      <main>
        <DonateForm />
      </main>
      
    <div style={styles.container}>
      <h3 style={styles.sectionTitle}>Here are some of items donated</h3>
      <div style={styles.donationsWrapper}>
        {donations.length === 0 && (
          <p style={styles.noDonations}>No donations available at the moment.</p>
        )}
        {donations.map(donation => (
          <div key={donation.id} style={styles.donationBox}>
            <strong style={styles.item}>{donation.item}</strong>
            <span style={styles.quantity}>
              {donation.quantity} available
            </span>
            <p style={styles.description}>{donation.description}</p>
            <p style={styles.category}>
              <span style={styles.bold}>Category:</span> {donation.category}
            </p>
            <p style={styles.date}>
              <span style={styles.bold}>Donated on:</span>{" "}
              {donation.createdAt && donation.createdAt.seconds
                ? new Date(donation.createdAt.seconds * 1000).toLocaleDateString()
                : "Unknown"}
            </p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Donate;
const styles = {
  container: {
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "24px",
    background: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    marginBottom: "18px",
    color: "#333",
    fontWeight: "600",
    textAlign: "center",
  },
  donationsWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  donationBox: {
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
    padding: "18px",
    minWidth: "240px",
    maxWidth: "260px",
    flex: "1 0 21%", 
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    boxSizing: "border-box",
  },
  item: {
    fontSize: "1.1rem",
    color: "#1976d2",
    marginBottom: "6px",
  },
  quantity: {
    fontSize: "0.95rem",
    color: "#388e3c",
    marginBottom: "8px",
  },
  description: {
    fontSize: "0.97rem",
    color: "#444",
    marginBottom: "8px",
  },
  category: {
    fontSize: "0.93rem",
    color: "#666",
    marginBottom: "4px",
  },
  date: {
    fontSize: "0.9rem",
    color: "#888",
  },
  bold: {
    fontWeight: "bold",
  },
  noDonations: {
    color: "#888",
    fontStyle: "italic",
    textAlign: "center",
    width: "100%",
  },
}
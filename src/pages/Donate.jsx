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
  container: { maxWidth: "800px",
     margin: "0 auto",
     padding: "2rem" },

  title: { textAlign: "center",
     color: "#2c3e50" },

  subtitle: { textAlign: "center",
     color: "#555" },

  sectionTitle: { marginTop: "2rem",
     color: "#34495e" },

  donationsWrapper:
   {display: "flex",
    flexWrap: "wrap",
    gap: "1.5rem",
    justifyContent: "center" 
  },

  noDonations: { color: "#888" },

  donationBox: {
    background: "#f9f9f9",
    border: "1px solid #e1e1e1",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    padding: "1.5rem",
    minWidth: "260px",
    maxWidth: "320px",
    flex: "1 1 260px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },

  item: { fontSize: "1.2rem",
     color: "#2980b9" },

  quantity: { color: "#16a085",
     fontWeight: "bold",
      margin: "0.5rem 0" },

  description: { margin: "0.5rem 0",
     color: "#555" },

  category: { margin: "0.5rem 0",
     color: "#888" },

  date: { margin: "0.5rem 0",
     color: "#888" },

  bold: { fontWeight: "bold" }
};

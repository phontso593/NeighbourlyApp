import { useState, useEffect } from "react";
import { collection, onSnapshot, } from "firebase/firestore";
import { db } from "../assets/firebaseConfig";
import RequestForm from "./RequestForm";

const Request = () => {
  // Fetching Requested Items from Firestore
const [requested, setRequested] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "requested"), (snapshot) => {
      const requestedList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setRequested(requestedList);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
    <main>
      <RequestForm />
    </main>

    <div style={styles.container}>
      <h3 style={styles.sectionTitle}>Here are some of the requested items</h3>
      <div style={styles.donationsWrapper}>
        {requested.length === 0 && (
          <p style={styles.noDonations}>No requests available at the moment.</p>
        )}
        {requested.map(request => (
          <div key={request.id} style={styles.donationBox}>
            <strong style={styles.item}>{request.item}</strong>
            <span style={styles.quantity}>
              {request.quantity} requested
            </span>
            <p style={styles.description}>{request.description}</p>
            <p style={styles.category}>
              <span style={styles.bold}>Category:</span> {request.category}
            </p>
            <p style={styles.date}>
              <span style={styles.bold}>Requested on:</span>{" "}
              {request.createdAt && request.createdAt.seconds
                ? new Date(request.createdAt.seconds * 1000).toLocaleDateString()
                : "Unknown"}
            </p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Request;
const styles = {
  container: { maxWidth: "800px",
     margin: "0 auto",
     padding: "2rem" },

     formContainer: {
      maxWidth: "400px",
        margin: "40px auto",
        padding: "32px",
        border: "2px solid #e0e0e0",
        borderRadius: "12px",
        background: "#fafbfc",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
    },

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




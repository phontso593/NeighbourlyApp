import { useState, useEffect } from "react";
import { collection, onSnapshot, } from "firebase/firestore";
import { db } from "../assets/firebaseConfig";
import RequestForm from "./RequestForm";

const Request = () => {
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
    <main style={{ background: '#f0f4f8' }}>
      <RequestForm />
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
    </main>

    
    </>
  );
};

export default Request;
const styles = {
  container: {
    maxWidth: "1200px",
    margin: "40px auto 0 auto", 
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




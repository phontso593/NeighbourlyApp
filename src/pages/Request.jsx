import {React,useState,useEffect} from "react";
import{collection, getDocs } from "firebase/firestore";
import { db } from "../assets/firebaseConfig";

const Request = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      const snapshot = await getDocs(collection(db, "donations"));
      const donationsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDonations(donationsList);
    }
    fetchDonations();
  }, []);

  return (
    <div>
      <h2>Request Items</h2>
      <p>Submit a request for items you need.</p>
      <h1>Here are some of items donated</h1>
      <ul>
        {donations.map(donation => (
          <li key={donation.id}>
            <strong>{donation.item}</strong> - {donation.quantity} available
            <p>{donation.description}</p>
            <p>Category: {donation.category}</p>
            <p>
              Donated on: {
                donation.createdAt && donation.createdAt.seconds
                  ? new Date(donation.createdAt.seconds * 1000).toLocaleDateString()
                  : "Unknown"
              }
            </p>
          </li>
        ))}
        {donations.length === 0 && <p>No donations available at the moment.</p>}
      </ul>
    </div>
  );
};

export default Request;




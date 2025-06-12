import React from "react";
import DonateForm from "./DonateForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Donate = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Donate Items</h1>
        <DonateForm />
      </main>
      <Footer />
    </>
  );
};

export default Donate;

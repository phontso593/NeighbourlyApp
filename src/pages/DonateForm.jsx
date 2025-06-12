import React, { useState } from "react";

const DonateForm = () => {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Donated ${quantity} x ${item}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Item Name:</label>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        required
      />

      <label>Quantity:</label>
      <input
        type="number"
        value={quantity}
        min="1"
        onChange={(e) => setQuantity(e.target.value)}
        required
      />

      <label>Description:</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Donate</button>
    </form>
  );
};

export default DonateForm;

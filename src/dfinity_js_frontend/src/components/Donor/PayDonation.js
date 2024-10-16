import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";

const PayDonationButton = ({ donate }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const triggerPayment = async () => {
    setLoading(true);
    setError(null);
    try {
      await donate();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        variant="dark"
        onClick={triggerPayment}
        disabled={loading}
        style={{ backgroundColor: "#FFA500", borderRadius: "20px" }}
      >
        {loading ? <Spinner animation="border" size="sm" /> : "Donate"}
      </Button>
      {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}
    </>
  );
};

export default PayDonationButton; // Export component

import React, { useState } from "react";
import { Button, Modal, Form, Alert, Spinner } from "react-bootstrap";
import { makeDonation } from "../../utils/donorFund";
import { toast } from "react-toastify";

const MakeDonationModal = ({ donor, campaignId, show, handleClose }) => {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission for making a donation
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the amount input
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      setError("Please enter a valid donation amount greater than zero.");
      return;
    }

    // Additional validation for a reasonable maximum donation amount
    const maxDonationAmount = 1000000; // example max amount
    if (Number(amount) > maxDonationAmount) {
      setError(`Please enter an amount less than or equal to ${maxDonationAmount}.`);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Convert amount to the smallest unit (e.g., ICP's smallest unit)
      const amountInSmallestUnit = parseInt(amount, 10) * 100000000;

      // Make the donation
      await makeDonation(
        { id: donor.id }, // Pass donor ID
        amountInSmallestUnit, // Pass converted amount
        campaignId // Pass campaign ID
      );

      // Show success notification
      toast.success("Donation made successfully!");

      // Close modal and reset state
      handleClose();
      setAmount("");
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        const { status, data } = error.response;
        if (status === 400) {
          setError("Bad request: " + data.message);
        } else if (status === 401) {
          setError("Unauthorized: Please log in to make a donation.");
        } else if (status === 403) {
          setError("Forbidden: You don't have permission to donate.");
        } else if (status === 404) {
          setError("Not found: The campaign or donor was not found.");
        } else if (status === 500) {
          setError("Internal server error: Please try again later.");
        } else {
          setError("Unexpected error: " + data.message);
        }
      } else if (error.request) {
        // Request was made but no response received
        setError("Network error: Unable to reach the server. Please check your internet connection.");
      } else {
        // Something happened in setting up the request
        setError("Error: " + error.message);
      }
      toast.error("Failed to make a donation. Please check your input and balance.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Make a Donation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formDonationAmount">
              <Form.Label>Donation Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                disabled={loading}
              />
            </Form.Group>
            {error && (
              <Alert variant="danger" className="mt-3">
                {error}
              </Alert>
            )}
            <Button
              variant="primary"
              type="submit"
              disabled={loading}
              className="mt-3"
            >
              {loading ? <Spinner animation="border" size="sm" /> : "Donate"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MakeDonationModal;

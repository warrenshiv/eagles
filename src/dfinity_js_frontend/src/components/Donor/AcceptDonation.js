import React, { useState } from "react";
import { Button, Modal, Alert, Spinner } from "react-bootstrap";
import { acceptCampaign } from "../../utils/donorFund"; // Ensure this is correctly imported

const AcceptDonation = ({ campaignId, donorId }) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleAcceptCampaign = async () => {
    if (!donorId || !campaignId) {
      console.error("Missing donorId or campaignId");
      setError("Unable to accept campaign: Missing donor or campaign information.");
      return;
    }

    console.log(`Attempting to accept campaign: donorId=${donorId}, campaignId=${campaignId}`);

    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      // Call the acceptCampaign function
      const response = await acceptCampaign(donorId, campaignId);
      if (response.Ok) {
        setSuccess("Campaign accepted successfully!");
        // Optionally refresh or update the state if needed
      } else if (response.Err) {
        console.error("Error accepting campaign:", response.Err);
        setError(`Failed to accept campaign: ${response.Err.NotFound || response.Err.Error}`);
      }
    } catch (error) {
      console.error("Error accepting campaign:", error);
      setError("An error occurred while accepting the campaign.");
    } finally {
      setLoading(false);
    }
  };

  // Handle modal visibility
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" size="sm" onClick={handleShow}>
        {loading ? <Spinner animation="border" size="sm" /> : "Accept"}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Acceptance</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          Are you sure you want to accept this campaign?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} disabled={loading}>
            Close
          </Button>
          <Button
            variant="success"
            onClick={handleAcceptCampaign}
            disabled={loading || success}
          >
            {loading ? <Spinner animation="border" size="sm" /> : "Accept Campaign"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AcceptDonation;

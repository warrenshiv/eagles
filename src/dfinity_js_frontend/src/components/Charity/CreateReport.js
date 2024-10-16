import React, { useState } from "react";
import { Button, Modal, Form, FloatingLabel, Row, Col } from "react-bootstrap";

// CreateReport component
const CreateReport = ({ save }) => {
  const [donorId, setDonorId] = useState("");
  const [charityId, setCharityId] = useState("");
  const [campaignId, setCampaignId] = useState("");
  const [campaignTitle, setCampaignTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [show, setShow] = useState(false);

  // Check if all form fields are filled
  const isFormFilled = () => {
    return donorId && charityId && campaignId && campaignTitle && amount;
  };

  // Handle modal close
  const handleClose = () => setShow(false);

  // Handle modal show
  const handleShow = () => setShow(true);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormFilled()) {
      // Create the report payload
      const ReportPayload = {
        donorId,
        charityId,
        campaignId,
        campaignTitle,
        amount: parseInt(amount, 10), // Convert amount to integer (nat64)
      };

      // Save the report
      save(ReportPayload);
      handleClose();
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{ margin: "10px" }}>
        Create Report
      </Button>
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>New Donation Report</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Row className="g-3">
              <Col md={6}>
                <FloatingLabel
                  controlId="inputDonorId"
                  label="Donor ID"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Donor ID"
                    value={donorId}
                    onChange={(e) => setDonorId(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
              <Col md={6}>
                <FloatingLabel
                  controlId="inputCharityId"
                  label="Charity ID"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Charity ID"
                    value={charityId}
                    onChange={(e) => setCharityId(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="g-3">
              <Col md={6}>
                <FloatingLabel
                  controlId="inputCampaignId"
                  label="Campaign ID"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Campaign ID"
                    value={campaignId}
                    onChange={(e) => setCampaignId(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
              <Col md={6}>
                <FloatingLabel
                  controlId="inputCampaignTitle"
                  label="Campaign Title"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Campaign Title"
                    value={campaignTitle}
                    onChange={(e) => setCampaignTitle(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="g-3">
              <Col md={12}>
                <FloatingLabel
                  controlId="inputAmount"
                  label="Donation Amount"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" type="submit">
              Save Report
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default CreateReport;

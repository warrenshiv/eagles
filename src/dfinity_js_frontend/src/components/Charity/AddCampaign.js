import React, { useState } from "react";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";

// AddCampaign component
const AddCampaign = ({ save, charityId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [show, setShow] = useState(false);

  // Check if all form fields are filled
  const isFormFilled = () => {
    return title && description && targetAmount;
  };

  // Handle modal close
  const handleClose = () => setShow(false);

  // Handle modal show
  const handleShow = () => setShow(true);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormFilled()) {
      // Create the campaign payload
      const CampaignPayload = {
        charityId,
        title,
        description,
        targetAmount: parseFloat(targetAmount),
      };

      // Save the campaign
      save(CampaignPayload);
      handleClose();
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{ margin: "10px" }}>
        Add New Campaign
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>New Campaign</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <FloatingLabel
              controlId="inputTitle"
              label="Title"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputDescription"
              label="Description"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputTargetAmount"
              label="Target Amount"
              className="mb-3"
            >
              <Form.Control
                type="number"
                placeholder="Target Amount"
                value={targetAmount}
                onChange={(e) => setTargetAmount(e.target.value)}
              />
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AddCampaign;

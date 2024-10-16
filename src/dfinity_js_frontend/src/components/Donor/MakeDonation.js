import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";

const MakeDonation = ({donate, campaignId}) => {


    const [amount, setAmount] = useState(0);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <>
        <Button
            onClick={handleShow}
            variant="success"
            style={{marginRight: "10px"}}
        >
            Donate
        </Button>
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
            <Modal.Title>Make Donation</Modal.Title>
            </Modal.Header>
            <Form>
            <Modal.Body>
                <FloatingLabel
                controlId="inputAmount"
                label="Amount"
                className="mb-3"
                >
                <Form.Control
                    type="number"
                    onChange={(e) => {
                    setAmount(e.target.value);
                    }}
                    placeholder="Enter amount"
                />
                </FloatingLabel>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button
                    variant="dark"
                    onClick={() => {
                        donate(amount, campaignId);
                        handleClose();
                    }}
                >
                    Donate
                </Button>
            </Modal.Footer>
            </Form>
        </Modal>
    </>
  )
}

export default MakeDonation
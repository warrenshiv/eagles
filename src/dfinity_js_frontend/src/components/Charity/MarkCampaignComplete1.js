import React, { useState } from "react";
import { Button, Modal, Alert, Spinner } from "react-bootstrap";
import { completeCampaign } from "../../utils/donorFund"; 

const MarkCampaignComplete = ({ campaignId }) => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleCompleteCampaign = async () => {
        if (!campaignId) {
            console.error("Missing campaignId");
            setError("Unable to complete campaign: Missing campaign information.");
            return;
        }

        console.log(`Attempting to complete campaign: campaignId=${campaignId}`);

        try {
            setLoading(true);
            setError(null);
            setSuccess(null);

            // Call the completeCampaign function
            const response = await completeCampaign(campaignId);
            if (response.Ok) {
                setSuccess("Campaign completed successfully!");
                // Optionally refresh or update the state if needed
            } else if (response.Err) {
                console.error("Error completing campaign:", response.Err);
                setError(`Failed to complete campaign: ${response.Err.NotFound || response.Err.Error}`);
            }
        } catch (error) {
            console.error("Error completing campaign:", error);
            setError("An error occurred while completing the campaign.");
        } finally {
            setLoading(false);
        }
    }

    // Handle modal visibility
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" size="sm" onClick={handleShow}>
                {loading ? <Spinner animation="border" size="sm" /> : "Complete"}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Completion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {success && <Alert variant="success">{success}</Alert>}
                    Are you sure you want to complete this campaign?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleCompleteCampaign}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

};

export default MarkCampaignComplete;
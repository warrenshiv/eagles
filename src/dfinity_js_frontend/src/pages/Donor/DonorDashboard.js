import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Nav, Table, Card } from "react-bootstrap";
import {
  getAllCampaigns,
  getDonorCampaigns,
  getDonorDonations,
  getCompletedCampaigns,
  getAllDonationReports,
} from "../../utils/donorFund";
import CurrrentCampaigns from "../../components/Donor/CurrrentCampaigns";
import AcceptedCampaigns from "../../components/Donor/AcceptedCampaigns";
import MyDonations from "../../components/Donor/MyDonations";
import CompletedCampaigns from "../../components/Donor/CompletedCampaigns";
import DonationsReport from "../../components/Charity/DonationsReport";

const DonorDashboard = ({ donor }) => {
  const {
    id,
    name,
    email,
    phoneNumber,
    address,
    donationAmount,
    donationsCount,
  } = donor;

  const [campaigns, setCampaigns] = useState([]);
  const [myDonations, setMyDonations] = useState([]);
  const [acceptedDonations, setAcceptedDonations] = useState([]);
  const [completedCampaigns, setCompletedCampaigns] = useState([]);
  const [donationReports, setDonationReports] = useState([]);
  const [hoveredTab, setHoveredTab] = useState(null);
  const [selectedTab, setSelectedTab] = useState("current");

  const handleMouseEnter = (tab) => setHoveredTab(tab);
  const handleMouseLeave = () => setHoveredTab(null);
  const handleTabClick = (tab) => setSelectedTab(tab);

  const fetchCampaigns = async () => {
    try {
      const response = await getAllCampaigns();
      setCampaigns(response.Ok || []);
    } catch (error) {
      setCampaigns([]);
    }
  };

  const fetchDonorCampaigns = async () => {
    try {
      const response = await getDonorCampaigns(donor.id);
      setAcceptedDonations(response.Ok || []);
    } catch (error) {
      setAcceptedDonations([]);
    }
  };

  const fetchDonorDonations = async () => {
    try {
      const response = await getDonorDonations(donor.id);
      setMyDonations(response.Ok || []);
    } catch (error) {
      setMyDonations([]);
    }
  };

  const fetchCompletedCampaigns = async () => {
    try {
      const response = await getCompletedCampaigns();
      setCompletedCampaigns(response.Ok || []);
    } catch (error) {
      setCompletedCampaigns([]);
    }
  };

  const fetchDonationsReport = async () => {
    try {
      const response = await getAllDonationReports();
      setDonationReports(response.Ok || []);
    } catch (error) {
      setDonationReports([]);
    }
  };

  useEffect(() => {
    fetchCampaigns();
    fetchDonorCampaigns();
    fetchDonorDonations();
    fetchCompletedCampaigns();
    fetchDonationsReport();
  }, []);

  const navLinkStyle = (tab) => ({
    color: selectedTab === tab || hoveredTab === tab ? "#ffffff" : "#000",
    backgroundColor:
      selectedTab === tab || hoveredTab === tab ? "#007bff" : "lightgrey",
    borderRadius: "20px",
    padding: "10px 20px",
  });

  return (
    <div className="mx-5">
      <Container className="mt-4">
        <h1 className="text-center mb-4">Donor Dashboard</h1>
        <Row
          className="justify-content-center align-items-center p-4"
          style={{
            backgroundColor: "#f8f9fa",
            borderRadius: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Col md="auto" className="text-center">
            <Image
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
              alt="avatar"
              className="rounded-circle"
              style={{ width: "150px" }}
            />
          </Col>
          <Col md="auto" className="text-center">
            <h3 className="mb-3">{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phoneNumber}</p>
            <p>Address: {address}</p>
            <p>Total Donation: ${donationAmount}</p>
            <p>Donations Count: {donationsCount}</p>
          </Col>
        </Row>

        <Container fluid className="mt-4">
          <Nav variant="pills" className="justify-content-center mb-4">
            {[
              { name: "Current Campaigns", tab: "current" },
              { name: "Accepted Campaigns", tab: "acceptedCampaigns" },
              { name: "My Donations", tab: "all" },
              { name: "Completed Campaigns", tab: "complete" },
              { name: "Donations Report", tab: "accepted" },
            ].map(({ name, tab }) => (
              <Nav.Item key={tab} className="mx-3">
                <Nav.Link
                  onClick={() => handleTabClick(tab)}
                  active={selectedTab === tab}
                  onMouseEnter={() => handleMouseEnter(tab)}
                  onMouseLeave={handleMouseLeave}
                  style={navLinkStyle(tab)}
                >
                  {name}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Container>

        <Row className="mx-2 my-4">
          {selectedTab === "current" && (
            <Card className="p-3">
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>CampaignId</th>
                    <th>CharityId</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Target Amount</th>
                    <th>Total Received</th>
                    <th>Donors</th>
                    <th>Status</th>
                    <th>Started At</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                {campaigns.map((_campaign, index) => (
                  <CurrrentCampaigns
                    key={index}
                    campaign={_campaign}
                    donorId={id}
                    getAllCampaigns={fetchCampaigns}
                  />
                ))}
              </Table>
            </Card>
          )}

          {selectedTab === "acceptedCampaigns" && (
            <Card className="p-3">
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>CampaignId</th>
                    <th>CharityId</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Target Amount</th>
                    <th>Total Received</th>
                    <th>Donors</th>
                    <th>Status</th>
                    <th>Started At</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                {acceptedDonations.map((_campaign, index) => (
                  <AcceptedCampaigns
                    key={index}
                    acceptedCampaign={_campaign}
                    donorId={id}
                  />
                ))}
              </Table>
            </Card>
          )}

          {selectedTab === "accepted" && (
            <Card className="p-3">
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>DonorId</th>
                    <th>CharityId</th>
                    <th>CampaignId</th>
                    <th>Campaign Title</th>
                    <th>Amount</th>
                    <th>Created At</th>
                    <th>Status</th>
                  </tr>
                </thead>

                {donationReports.map((_donation, index) => (
                  <DonationsReport key={index} donations={_donation} />
                ))}
              </Table>
            </Card>
          )}

          {selectedTab === "complete" && (
            <Card className="p-3">
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>CampaignId</th>
                    <th>CharityId</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Target Amount</th>
                    <th>Total Received</th>
                    <th>Donors</th>
                    <th>Status</th>
                    <th>Started At</th>
                  </tr>
                </thead>

                {completedCampaigns.map((_campaign, index) => (
                  <CompletedCampaigns
                    key={index}
                    campaign={_campaign}
                    getCompletedCampaigns={fetchCompletedCampaigns}
                  />
                ))}
              </Table>
            </Card>
          )}

          {selectedTab === "all" && (
            <Card className="p-3">
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Donation Id</th>
                    <th>DonorId</th>
                    <th>CharityId</th>
                    <th>CampaignId</th>
                    <th>Receiver</th>
                    <th>Amount</th>
                    <th>Paid At</th>
                    <th>Status</th>
                  </tr>
                </thead>

                {myDonations.map((_donation, index) => (
                  <MyDonations
                    key={index}
                    donations={_donation}
                    donorId={id}
                    getDonorDonations={fetchDonorDonations}
                  />
                ))}
              </Table>
            </Card>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default DonorDashboard;

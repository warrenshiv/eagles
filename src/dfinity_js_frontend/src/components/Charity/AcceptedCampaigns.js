import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MarkCampaignComplete from "./MarkCampaignComplete";

const AcceptedCampaigns = ({ acceptedCampaign }) => {
  // Destructure properties from acceptedCampaign
  const {
    id,
    charityId,
    title,
    description,
    targetAmount,
    totalReceived,
    donors,
    startedAt,
    status,
  } = acceptedCampaign;

  // Helper function to display the status of a campaign
  const displayStatus = (status) => {
    if (status && typeof status === "object") {
      return `${Object.keys(status)[0]}: ${Object.values(status)[0]}`;
    } else {
      return "Status Unavailable";
    }
  };

  // Helper function to format numbers with commas
  const formatNumber = (number) => {
    return number.toLocaleString();
  };

  // Function to format date and time
  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleString();
  };

  return (
    <>
      <ToastContainer />
      <tr>
        <td>{id}</td>
        <td>{charityId}</td>
        <td>{title}</td>
        <td>{description}</td>
        <td>{formatNumber(targetAmount)}</td>
        <td>{formatNumber(totalReceived)}</td>
        <td>{donors.length}</td>
        <td>{displayStatus(status)}</td>
        <td>{formatDateTime(startedAt)}</td>
        <td>
          <MarkCampaignComplete campaignId={id} />
        </td>
      </tr>
    </>
  );
};

export default AcceptedCampaigns;

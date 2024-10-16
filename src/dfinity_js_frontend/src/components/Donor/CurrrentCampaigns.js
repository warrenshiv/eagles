import React from "react";
import AcceptDonation from "./AcceptDonation"; 

const CurrrentCampaigns = ({ campaign, donorId }) => { // Accept donorId as a prop
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
  } = campaign;

  // Helper function to display status
  const displayStatus = (status) => {
    return `${Object.keys(status)[0]}: ${Object.values(status)[0]}`;
  };

  // Helper function to format numbers with commas
  const formatNumber = (number) => {
    return number.toLocaleString();
  };

  // Function to format date and time
  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleString(); // This will format date and time based on user's locale
  };

  return (
    <>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{charityId}</td>
          <td>{title}</td>
          <td>{description}</td>
          <td>{formatNumber(targetAmount)} ICP</td>
          <td>{formatNumber(totalReceived)}</td>
          <td>{donors.length}</td>
          <td>{displayStatus(status)}</td>
          <td>{formatDateTime(startedAt)}</td>
          <td>
            <AcceptDonation campaignId={id} donorId={donorId} /> 
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default CurrrentCampaigns;

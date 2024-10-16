import React from "react";

const Donations = ({ donations }) => {
  const {
    id,
    donorId,
    charityId,
    campaignId,
    receiver,
    amount,
    status,
    createdAt,
  } = donations;

  // Helper function to display the status of a campaign
  const displayStatus = (status) => {
    if (status && typeof status === "object") {
      return `${Object.keys(status)[0]}: ${Object.values(status)[0]}`;
    } else {
      return "Status Unavailable"; // Default value if status is not an object
    }
  };

  // Helper function to format numbers with commas
  const formatNumber = (number) => {
    return number.toLocaleString(); // Formats number with locale-specific separators
  };

  // Function to format date and time
  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleString(); // Formats date and time based on user's locale
  };

  // Convert amount from BigInt to number
  const amount1 = Number(amount) / 10 ** 8;

  // Convert principal objects to string
  const formatPrincipal = (principal) => {
    return principal && typeof principal === "object" && principal._isPrincipal
      ? principal._arr.join("")
      : "N/A";
  };

  return (
    <tbody>
      <tr>
        <td>{id}</td>
        <td>{donorId}</td>
        <td>{charityId}</td>
        <td>{campaignId}</td>
        <td>{formatPrincipal(receiver)}</td>
        <td>{formatNumber(amount1)} ICP</td>
        <td>{formatDateTime(createdAt)}</td>
        <td>{displayStatus(status)}</td>
      </tr>
    </tbody>
  );
};

export default Donations;

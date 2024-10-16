import React from "react";
import { createDonationReport } from "../../utils/donorFund";
import { toast } from "react-toastify";

const CompletedCampaigns = ({ campaign }) => {
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

  // Save the report
  const saveReport = async (report) => {
    try {
      const response = await createDonationReport(report);

      if ("Ok" in response) {
        const {
          status,
          donorId,
          createdAt,
          campaignId,
          campaignTitle,
          amount,
          paidAt,
          charityId,
        } = response.Ok;
        console.log("Report created successfully", response.Ok);
        toast.success(
          `Report created successfully for campaign ${campaignTitle}`
        );
      } else {
        const errorType = Object.keys(response.Err)[0];
        console.error(`Failed to create report: ${errorType}`, response.Err);
        toast.error(`Failed to create report: ${errorType}`);
      }
    } catch (error) {
      console.error("Failed to create report", error);
      toast.error("Failed to create report due to an unexpected error");
    }
  };

  return (
    <>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{charityId}</td>
          <td>{title}</td>
          <td>{description}</td>
          <td>{targetAmount.toString()} ICP</td>
          <td>{formatNumber(totalReceived)}</td>
          <td>{donors.length}</td>
          <td>{displayStatus(status)}</td>
          <td>{formatDateTime(startedAt)}</td>
        </tr>
      </tbody>
    </>
  );
};

export default CompletedCampaigns;

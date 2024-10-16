import React from "react"; // Import React
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PayDonationButton from "../../components/Donor/PayDonation";
import { payDonation } from "../../utils/donorFund";

const AcceptedCampaigns = ({ donorId, acceptedCampaign }) => {
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

  // Ensure the amount is in the correct format
  const amount = targetAmount;

  // Log the amount for debugging
  console.log("Amount to be donated (as integer):", amount);
  console.log("This is Donor Id :", donorId);

  // Handle donation payment
  const campaignId = id;
  const handleDonate = async () => {

    const amntStr = amount;
    const amountSB = parseInt(amntStr, 10) * 10**8;
    const amountS = BigInt(amountSB);
    console.log("Print AmountStr :", amountS);
    try {
      console.log(
        "Donating to campaign and charity with ids respectively: ",
        campaignId,
        charityId
      );
      await payDonation({donorId, campaignId, charityId, amountS}).then(async (res) => {
        console.log("Donation successful: ", res);
        toast.success("Donation successful!");
      });
    } catch (err) {
      console.error("Check if wallet is funded", err);
      toast.error("Payment failed. Please check if the wallet is funded.");
    }
  };

  return (
    <>
      <ToastContainer />
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{charityId}</td>
          <td>{title}</td>
          <td>{description}</td>
          <td>{formatNumber(targetAmount)} ICP</td>
          <td>{formatNumber(totalReceived)} ICP</td>
          <td>{donors.length}</td>
          <td>{displayStatus(status)}</td>
          <td>{formatDateTime(startedAt)}</td>
          <td>
            <PayDonationButton donate={handleDonate} />
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default AcceptedCampaigns;

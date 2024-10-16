import React from "react";
import AcceptDonation from "./AcceptDonation";

const DonationsCard = ({ donation, donorId }) => {
  const {
    id,
    campaignId,
    donorId: donorIdFromDonation,
    amount,
    status,
    createdAt,
  } = donation;

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{campaignId}</td>
        <td>{donorIdFromDonation}</td>
        <td>{amount}</td>
        <td>{status}</td>
        <td>{createdAt}</td>
        <td>
          <AcceptDonation donorId={donorId} campaignId={campaignId} />
        </td>
      </tr>
    </>
  );
};

export default DonationsCard;

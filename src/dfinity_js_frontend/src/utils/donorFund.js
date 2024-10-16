import { Principal } from "@dfinity/principal";
import { transferICP } from "./ledger";

// CreateDonorProfile
export async function createDonorProfile(profile) {
  return window.canister.farmWorkChain.createDonorProfile(profile);
}

// getDonorProfileById
export async function getDonorProfileById(id) {
  return window.canister.farmWorkChain.getDonorProfileById(id);
}

// getDonorProfileByOwner
export async function getDonorProfileByOwner() {
  return window.canister.farmWorkChain.getDonorProfileByOwner();
}

// CreateCharityProfile
export async function createCharityProfile(profile) {
  return window.canister.farmWorkChain.createCharityProfile(profile);
}

// getCharityProfileById
export async function getCharityProfileById(id) {
  return window.canister.farmWorkChain.getCharityProfileById(id);
}

// getCharityProfileByOwner
export async function getCharityProfileByOwner() {
  return window.canister.farmWorkChain.getCharityProfileByOwner();
}

// createCampaign
export async function createCampaign(campaign) {
  return window.canister.farmWorkChain.createCampaign(campaign);
}

// getCampaignById
export async function getCampaignById(id) {
  return window.canister.farmWorkChain.getCampaignById(id);
}

// getAllCampaigns
export async function getAllCampaigns() {
  return window.canister.farmWorkChain.getAllCampaigns();
}

// deleteCampaignById
export async function deleteCampaignById(id) {
  return window.canister.farmWorkChain.deleteCampaignById(id);
}

// getDonorCampaigns
export async function getDonorCampaigns(donorId) {
  return window.canister.farmWorkChain.getDonorCampaigns(donorId);
}

// acceptCampaign
export async function acceptCampaign(donorId, campaignId) {
  try {
    // Pass donorId and campaignId to the canister function
    return await window.canister.farmWorkChain.acceptCampaign(
      donorId,
      campaignId
    );
  } catch (error) {
    console.error("Error accepting campaign:", error);
    return { Err: { Error: error.message } };
  }
}

// getDonorDonations
export async function getDonorDonations(donorId) {
  return window.canister.farmWorkChain.getDonorDonations(donorId);
}

// getAcceptedCampaigns
export async function getAcceptedCampaigns() {
  return window.canister.farmWorkChain.getAcceptedCampaigns();
}

// completeCampaign
export async function completeCampaign(campaignId) {
  try {
    // Pass campaignId to the canister function
    return await window.canister.farmWorkChain.completeCampaign(campaignId);
  } catch (error) {
    console.error("Error completing campaign:", error);
    return { Err: { Error: error.message } };
  }
}

// getCompletedCampaigns
export async function getCompletedCampaigns() {
  return window.canister.farmWorkChain.getCompletedCampaigns();
}

// getCharityDonations
export async function getCharityDonations(charityId) {
  return window.canister.farmWorkChain.getCharityDonations(charityId);
}

// getAllDonationReports
export async function getAllDonationReports() {
  return window.canister.farmWorkChain.getAllDonationReports();
}

// createDonationReport
export async function createDonationReport(report) {
  return window.canister.farmWorkChain.createDonationReport(report);
}

// Pay Donation
export async function payDonation(donation) {
  const donationCanister = window.canister.farmWorkChain;

  // Hardcoded donorId
  // const hardcodedDonorId = "f4f2f0e3-ecf2-48b5-a460-d15fc5243223";

  // Step 1: Create a reservation for the donation
  const donationReserveResp = await donationCanister.reserveDonation({
    donorId: donation.donorId,
    charityId: donation.charityId,
    campaignId: donation.campaignId,
    amount: donation.amountS,
  });

  // Check if the reserve creation was successful
  if ("Err" in donationReserveResp) {
    console.error(donationReserveResp.Err);
    return; // Handle error as needed
  }

  const reserve = donationReserveResp.Ok;
  console.log("reserve", reserve);
  const receiverPrincipal = Principal.from(reserve.receiver);

  // Step 2: Get the receiver's address
  const receiverAddress = await donationCanister.getAddressFromPrincipal(
    receiverPrincipal
  );

  // Step 3: Transfer ICP tokens to the receiver's address
  const block = await transferICP(
    receiverAddress,
    reserve.amount,
    reserve.memo
  );

  // Logging the transaction details
  console.log(
    receiverPrincipal,
    donation.donorId, // Log hardcoded donorId
    reserve.amount,
    block,
    reserve.memo
  );

  // Step 4: Complete the donation reserve
  await donationCanister.completeReserveDonation(
    receiverPrincipal,
    donation.donorId, // Use hardcoded donorId
    reserve.amount,
    block,
    reserve.memo
  );
}

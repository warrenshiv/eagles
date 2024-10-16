import { Principal } from "@dfinity/principal";
import { transferICP } from "./ledger";

// CreateDepartment
export async function createDepartment(department) {
  return window.canister.farmWorkChain.createDepartment(department);
}

// getDepartmentById
export async function getDepartmentById(id) {
  return window.canister.farmWorkChain.getDepartmentById(id);
}

// createDoctorProfile
export async function createDoctorProfile(profile) {
  return window.canister.farmWorkChain.createDoctorProfile(profile);
}

// getDoctorProfileById
export async function getDoctorProfileById(id) {
  return window.canister.farmWorkChain.getDoctorProfileById(id);
}

// getDoctorProfileByOwner
export async function getDoctorProfileByOwner() {
  return window.canister.farmWorkChain.getDoctorProfileByOwner();
}

// createPatientProfile
export async function createPatientProfile(profile) {
  return window.canister.farmWorkChain.createPatientProfile(profile);
}

// getPatientProfileById
export async function getPatientProfileById(id) {
  return window.canister.farmWorkChain.getPatientProfileById(id);
}

// getPatientProfileByOwner
export async function getPatientProfileByOwner() {
  return window.canister.farmWorkChain.getPatientProfileByOwner();
}

// CreateConsultation
export async function createConsultation(consultation) {
  return window.canister.farmWorkChain.createConsultation(consultation);
}

// getConsultationById
export async function getConsultationById(id) {
  return window.canister.farmWorkChain.getConsultationById(id);
}

// getConsultationByDoctor
export async function getConsultationByDoctor() {
  return window.canister.farmWorkChain.getConsultationByDoctor();
}


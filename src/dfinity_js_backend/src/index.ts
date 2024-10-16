import { verify } from "@dfinity/agent";
import { auto } from "@popperjs/core";
import {
  query,
  update,
  text,
  Null,
  Record,
  StableBTreeMap,
  Variant,
  Vec,
  None,
  Some,
  Ok,
  Err,
  ic,
  Principal,
  Opt,
  nat64,
  Duration,
  Result,
  bool,
  Canister,
} from "azle";
import {
  Address,
  Ledger,
  binaryAddressFromAddress,
  binaryAddressFromPrincipal,
  hexAddressFromPrincipal,
} from "azle/canisters/ledger";
import { v4 as uuidv4 } from "uuid";

const Department = Record({
  id: text,
  name: text,
});

const Doctor = Record({
  id: text,
  owner: Principal,
  name: text,
  department_id: text,
  image: text,
});

const Patient = Record({
  id: text,
  owner: Principal,
  name: text,
  age: nat64,
});

const Consultation = Record({
  id: text,
  patient_id: text,
  problem: text,
  department_id: text,
});

const Chat = Record({
  id: text,
  patient_id: text,
  doctor_id: text,
  message: text,
  timestamp: text,
});

// Message Struct
const Message = Variant({
  Success: text,
  Error: text,
  NotFound: text,
  InvalidPayload: text,
  PaymentFailed: text,
  PaymentCompleted: text,
});

// Payloads
const CreateDepartmentPayload = Record({
  name: text,
});

const CreateDoctorPayload = Record({
  name: text,
  department_id: text,
  image: text,
});

const CreatePatientPayload = Record({
  name: text,
  age: nat64,
});

const CreateConsultationPayload = Record({
  patient_id: text,
  problem: text,
  department_id: text,
});

const CreateChatPayload = Record({
  patient_id: text,
  doctor_id: text,
  message: text,
  timestamp: text,
});

// Storage
const Departments = StableBTreeMap(0, text, Department);
const Doctors = StableBTreeMap(1, text, Doctor);
const Patients = StableBTreeMap(2, text, Patient);
const Consultations = StableBTreeMap(3, text, Consultation);
const Chats = StableBTreeMap(4, text, Chat);

export default Canister({
  // FUnction to create a Department
  createDepartment: update(
    [CreateDepartmentPayload],
    Result(Department, Message),
    (payload) => {
      // Validate the payload
      if (!payload.name) {
        return Err({ InvalidPayload: "Missing required fields" });
      }

      // Assuming validation passes, proceed to create the department
      const departmentId = uuidv4();
      const department = {
        id: departmentId,
        ...payload,
      };

      Departments.insert(departmentId, department);
      return Ok(department); // Successfully return the created department
    }
  ),

  // Function to get a Department by ID
  getDepartmentById: query(
    [text],
    Result(Department, Message),
    (departmentId) => {
      const departmentOpt = Departments.get(departmentId);

      if ("None" in departmentOpt) {
        return Err({
          NotFound: `Department with id=${departmentId} not found`,
        });
      }

      return Ok(departmentOpt.Some);
    }
  ),

  // Function to get all Departments
  getAllDepartments: query([], Result(Vec(Department), Message), () => {
    const departments = Departments.values();

    if (departments.length === 0) {
      return Err({ NotFound: "No departments found" });
    }

    return Ok(departments);
  }),

  // Create a Doctor
  createDoctor: update(
    [CreateDoctorPayload],
    Result(Doctor, Message),
    (payload) => {
      // Validate the payload
      if (!payload.name || !payload.department_id || !payload.image) {
        return Err({ InvalidPayload: "Missing required fields" });
      }

      // Validation for unique doctor name within the department
      const doctorProfiles = Doctors.values();
      const nameExists = doctorProfiles.some(
        (profile) =>
          profile.name === payload.name &&
          profile.department_id === payload.department_id.toString()
      );
      if (nameExists) {
        return Err({
          InvalidPayload:
            "Doctor with this name already exists in the department",
        });
      }

      // Assuming validation passes, proceed to create the doctor profile
      const doctorId = uuidv4();
      const doctor = {
        id: doctorId,
        ...payload,
        owner: ic.caller(),
      };

      Doctors.insert(doctorId, doctor);
      return Ok(doctor); // Successfully return the created doctor profile
    }
  ),

  // Function to get a Doctor by ID
  getDoctorById: query([text], Result(Doctor, Message), (doctorId) => {
    const doctorOpt = Doctors.get(doctorId);

    if ("None" in doctorOpt) {
      return Err({
        NotFound: `Doctor with id=${doctorId} not found`,
      });
    }

    return Ok(doctorOpt.Some);
  }),

  // Function to get a Doctor Profile by Owner Principal using filter
  getDoctorByOwner: query([], Result(Doctor, Message), () => {
    const doctorProfiles = Doctors.values().filter((doctor) => {
      return doctor.owner.toText() === ic.caller().toText();
    });

    if (doctorProfiles.length === 0) {
      return Err({
        NotFound: `Doctor profile for owner=${ic.caller()} not found`,
      });
    }

    return Ok(doctorProfiles[0]);
  }),

  // Function to get all Doctors
  getAllDoctors: query([], Result(Vec(Doctor), Message), () => {
    const doctors = Doctors.values();

    if (doctors.length === 0) {
      return Err({ NotFound: "No doctors found" });
    }

    return Ok(doctors);
  }),

  // Create a Patient
  createPatient: update(
    [CreatePatientPayload],
    Result(Patient, Message),
    (payload) => {
      // Validate the payload
      if (!payload.name || payload.age === undefined) {
        return Err({ InvalidPayload: "Missing required fields" });
      }

      // Assuming validation passes, proceed to create the patient profile
      const patientId = uuidv4();
      const patient = {
        ...payload,
        id: patientId,
        owner: ic.caller(),
      };

      Patients.insert(patientId, patient);
      return Ok(patient); // Successfully return the created patient profile
    }
  ),

  // Function to get a Patient by ID
  getPatientById: query([text], Result(Patient, Message), (patientId) => {
    const patientOpt = Patients.get(patientId);

    if ("None" in patientOpt) {
      return Err({
        NotFound: `Patient with id=${patientId} not found`,
      });
    }

    return Ok(patientOpt.Some);
  }),

  // Function to get a Patient Profile by Owner Principal using filter
  getPatientByOwner: query([], Result(Patient, Message), () => {
    const patientProfiles = Patients.values().filter((patient) => {
      return patient.owner.toText() === ic.caller().toText();
    });

    if (patientProfiles.length === 0) {
      return Err({
        NotFound: `Patient profile for owner=${ic.caller()} not found`,
      });
    }

    return Ok(patientProfiles[0]);
  }),

  // Function to get all Patients
  getAllPatients: query([], Result(Vec(Patient), Message), () => {
    const patients = Patients.values();

    if (patients.length === 0) {
      return Err({ NotFound: "No patients found" });
    }

    return Ok(patients);
  }),

  // Create a Consultation
  createConsultation: update(
    [CreateConsultationPayload],
    Result(Consultation, Message),
    (payload) => {
      // Validate the payload
      if (!payload.patient_id || !payload.problem || !payload.department_id) {
        return Err({ InvalidPayload: "Missing required fields" });
      }

      // Assuming validation passes, proceed to create the consultation
      const consultationId = uuidv4();
      const consultation = {
        ...payload,
        id: consultationId,
      };

      Consultations.insert(consultationId, consultation);
      return Ok(consultation); // Successfully return the created consultation
    }
  ),

  // Function to get a Consultation by ID
  getConsultationById: query(
    [text],
    Result(Consultation, Message),
    (consultationId) => {
      const consultationOpt = Consultations.get(consultationId);

      if ("None" in consultationOpt) {
        return Err({
          NotFound: `Consultation with id=${consultationId} not found`,
        });
      }

      return Ok(consultationOpt.Some);
    }
  ),

  // Function to get all Consultations
  getAllConsultations: query([], Result(Vec(Consultation), Message), () => {
    const consultations = Consultations.values();

    if (consultations.length === 0) {
      return Err({ NotFound: "No consultations found" });
    }

    return Ok(consultations);
  }),

  // Create a Chat
  createChat: update([CreateChatPayload], Result(Chat, Message), (payload) => {
    // Validate the payload
    if (
      !payload.patient_id ||
      !payload.doctor_id ||
      !payload.message ||
      !payload.timestamp
    ) {
      return Err({ InvalidPayload: "Missing required fields" });
    }

    // Assuming validation passes, proceed to create the chat
    const chatId = uuidv4();
    const chat = {
      ...payload,
      id: chatId,
    };

    Chats.insert(chatId, chat);
    return Ok(chat); // Successfully return the created chat
  }),

  // Function to get a Chat by ID
  getChatById: query([text], Result(Chat, Message), (chatId) => {
    const chatOpt = Chats.get(chatId);

    if ("None" in chatOpt) {
      return Err({
        NotFound: `Chat with id=${chatId} not found`,
      });
    }

    return Ok(chatOpt.Some);
  }),

  // Function to get all Chats
  getAllChats: query([], Result(Vec(Chat), Message), () => {
    const chats = Chats.values();

    if (chats.length === 0) {
      return Err({ NotFound: "No chats found" });
    }

    return Ok(chats);
  }),

  // Update Patient Profile
  updatePatient: update(
    [text, CreatePatientPayload],
    Result(Patient, Message),
    (patientId, payload) => {
      const patientOpt = Patients.get(patientId);

      if ("None" in patientOpt) {
        return Err({ NotFound: `Patient with id=${patientId} not found` });
      }

      const updatedPatient = {
        ...patientOpt.Some,
        ...payload,
      };
      Patients.insert(patientId, updatedPatient);
      return Ok(updatedPatient);
    }
  ),

  // Delete Patient Profile
  deletePatient: update([text], Result(Message, Message), (patientId) => {
    const patientOpt = Patients.get(patientId);

    if ("None" in patientOpt) {
      return Err({ NotFound: `Patient with id=${patientId} not found` });
    }

    Patients.remove(patientId);
    return Ok({ Success: `Patient with id=${patientId} deleted successfully` });
  }),

  // Consultation History for a Patient
  getConsultationHistoryByPatient: query(
    [text],
    Result(Vec(Consultation), Message),
    (patientId) => {
      const consultations = Consultations.values().filter(
        (consultation) => consultation.patient_id === patientId
      );

      if (consultations.length === 0) {
        return Err({
          NotFound: `No consultations found for patient id=${patientId}`,
        });
      }

      return Ok(consultations);
    }
  ),

  // Update Doctor Availability
  updateDoctorAvailability: update(
    [text, bool],
    Result(Doctor, Message),
    (doctorId, availability) => {
      const doctorOpt = Doctors.get(doctorId);

      if ("None" in doctorOpt) {
        return Err({ NotFound: `Doctor with id=${doctorId} not found` });
      }

      const updatedDoctor = {
        ...doctorOpt.Some,
        available: availability,
      };
      Doctors.insert(doctorId, updatedDoctor);
      return Ok(updatedDoctor);
    }
  ),

  // Search Doctor by Name
  searchDoctorByName: query([text], Result(Vec(Doctor), Message), (name) => {
    const matchingDoctors = Doctors.values().filter((doctor) =>
      doctor.name.toLowerCase().includes(name.toLowerCase())
    );

    if (matchingDoctors.length === 0) {
      return Err({
        NotFound: `No doctors found with name containing '${name}'`,
      });
    }

    return Ok(matchingDoctors);
  }),

  // Search Department by Name
  searchDepartmentByName: query(
    [text],
    Result(Vec(Department), Message),
    (name) => {
      const matchingDepartments = Departments.values().filter((department) =>
        department.name.toLowerCase().includes(name.toLowerCase())
      );

      if (matchingDepartments.length === 0) {
        return Err({
          NotFound: `No departments found with name containing '${name}'`,
        });
      }

      return Ok(matchingDepartments);
    }
  ),

  // Update Doctor Profile
  updateDoctor: update(
    [text, CreateDoctorPayload],
    Result(Doctor, Message),
    (doctorId, payload) => {
      const doctorOpt = Doctors.get(doctorId);

      if ("None" in doctorOpt) {
        return Err({ NotFound: `Doctor with id=${doctorId} not found` });
      }

      const updatedDoctor = {
        ...doctorOpt.Some,
        ...payload,
      };
      Doctors.insert(doctorId, updatedDoctor);
      return Ok(updatedDoctor);
    }
  ),

  // Delete Doctor Profile
  deleteDoctor: update([text], Result(Message, Message), (doctorId) => {
    const doctorOpt = Doctors.get(doctorId);

    if ("None" in doctorOpt) {
      return Err({ NotFound: `Doctor with id=${doctorId} not found` });
    }

    Doctors.remove(doctorId);
    return Ok({ Success: `Doctor with id=${doctorId} deleted successfully` });
  }),

  // Delete Department
  deleteDepartment: update([text], Result(Message, Message), (departmentId) => {
    const departmentOpt = Departments.get(departmentId);

    if ("None" in departmentOpt) {
      return Err({ NotFound: `Department with id=${departmentId} not found` });
    }

    Departments.remove(departmentId);
    return Ok({
      Success: `Department with id=${departmentId} deleted successfully`,
    });
  }),
});

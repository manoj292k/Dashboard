import React from "react";
import GenderImg from "../assets/images/FemaleIcon.svg";
import BirthIcon from "../assets/images/BirthIcon.svg";
import Phone from "../assets/images/PhoneIcon.svg";
import Insurance from "../assets/images/InsuranceIcon.svg";
import download from "../assets/images/download_FILL0_wght300_GRAD0_opsz24 (1).svg";
import Blankgray from "../assets/images/blankGraySquare.png";
const PatientDetails = ({ patient }) => {
  //default value for user data
  const defaultPatient = {
    profile_picture: {Blankgray}, 
    name: "--------------",
    date_of_birth: "--/--/----",
    gender: "N/A",
    phone_number: "N/A",
    emergency_contact: "N/A",
    insurance_type: "N/A",
    lab_results: [],
  };

  const currentPatient = patient || defaultPatient;

  return (
    <div className="w-1/4 gap-3 h-max flex justify-around flex-col">
      {/* ---------patient detials---------- */}
      <div className="flex rounded-3xl bg-white justify-center flex-wrap w-auto p-4 h-max">
        <img src={currentPatient.profile_picture} className="w-60" alt="Profile" />
        <h3 className="font-semibold text-base mt-4">{currentPatient.name}</h3>
        <ul className="w-full flex flex-wrap gap-2 p-3 text-base">
          <li className="flex flex-wrap w-full float-start gap-2">
            <img src={BirthIcon} alt="Date of Birth Icon" />
            <p className="mt-2 ">
              Date of Birth <br /> <span className="font-bold">{currentPatient.date_of_birth}</span>
            </p>
          </li>
          <li className="flex flex-wrap w-full float-start gap-2">
            <img src={GenderImg} alt="Gender Icon" />
            <p>
              Gender <br /> <span className="font-bold">{currentPatient.gender}</span>
            </p>
          </li>
          <li className="flex flex-wrap w-full float-start gap-2">
            <img src={Phone} alt="Phone Icon"  />
            <p>
              Contact Info <br /> <span className="font-bold">{currentPatient.phone_number}</span>
            </p>
          </li>
          <li className="flex flex-wrap w-full float-start gap-2">
            <img src={Phone} alt="Emergency Contact Icon" />
            <p>
              Emergency Contact <br /> <span className="font-bold">{currentPatient.emergency_contact}</span>
            </p>
          </li>
          <li className="flex flex-wrap w-full float-start gap-2">
            <img src={Insurance} alt="Insurance Icon" />
            <p>
              Insurance Provider <br /> <span className="font-bold">{currentPatient.insurance_type}</span>
            </p>
          </li>
        </ul>
        <button className="bg-teal-300 px-4 py-2 text-white rounded-full">Show all information</button>
      </div>
      {/* -----------labresults----------------- */}
      <div className="bg-white p-4 rounded-3xl">

        <h1 className="text-xl font-bold">Lab Results</h1>
        <ul className="h-[230px] overflow-auto flex flex-col justify-evenly">
          {currentPatient.lab_results.length > 0 ? (
            currentPatient.lab_results.map((list, key) => (
              <li key={key} className="text-sm w-full flex justify-between py-2 px-3">
                {list} <img src={download} className="cursor-pointer" alt="Download Icon" />
              </li>
            ))
          ) : (
            <li className="text-center text-gray-500">No lab results available.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PatientDetails;

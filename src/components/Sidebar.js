import React, { useState, useEffect } from "react";
import { fetchData } from "../Api/Api"; // api data imported

const Sidebar = ({ onPatientSelect }) => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPatients() {
      try {
        const data = await fetchData();
        setPatients(data);
      } catch (err) {
        setError("Error fetching patients data");
      } finally {
        setLoading(false);
      }
    }

    fetchPatients();
  }, []);


  const handlePatientClick = (patient) => {
    onPatientSelect(patient);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="w-1/4">

      <div className="w-auto bg-white rounded-3xl  p-4">
        <h2 className="text-xl font-bold text-black mb-4">Patients</h2>
        <ul className="mt-4 overflow-scroll h-[850px] overflow-x-hidden">
          {patients.map((patient, index) => (
            <li
              key={index}
              className="py-4 px-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handlePatientClick(patient)}
            >
              <div className="flex items-center  flex-wrap ">
                <div className="flex flex-none ">
                  <img
                    src={patient.profile_picture}
                    alt="profile"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div className="flex-none w-44">
                    <p className="font-semibold text-base text-black">{patient.name}</p>
                    <p className="text-sm text-gray-500">{patient.gender}, {patient.age}</p>
                  </div>
                  <div className="flex-1 p-2"><b> . . .</b></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import PatientDetails from "./components/PatientDetials";
import Header from "./components/Header";

function App() {
  const [selectedPatient, setSelectedPatient] = useState(null); 

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient); 
  };

  return (
    <div className="flex p-3 bg-gray-50 w-full flex-wrap gap-4">
      <Header />
      {/* -----------Sidebar with patient list ----------*/}
      <Sidebar onPatientSelect={handlePatientSelect} />

      {/* -------Dashboard component ------------*/}
      <Dashboard patient={selectedPatient} />

      {/*--------- PatientDetails component showing ------------ */}
      <PatientDetails patient={selectedPatient} />
    </div>
  );
}

export default App;

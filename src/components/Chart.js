import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    // Fetch data from API
    fetch("your-api-endpoint")
      .then((response) => response.json())
      .then((data) => setPatientData(data));
  }, []);

  if (!patientData) return <div>Loading...</div>;

  return (
    <div className="w-3/4 p-8">
      {/* Your existing code, but replace hardcoded data with `patientData` */}
    </div>
  );
};

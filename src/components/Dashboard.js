import React from 'react';


import Heartbpm from '../assets/images/HeartBPM.svg';
import Temperature from '../assets/images/temperature.svg';
import Respiratory from '../assets/images/respiratory rate.svg';

const PatientDashboard = ({ patient }) => {
  const defaultPatient = {
    diagnosis_history: [
      {
        respiratory_rate: { value: '--', levels: '--' },
        temperature: { value: '--', levels: '--' },
        heart_rate: { value: '--', levels: '--' },
      },
    ],
    diagnostic_list: [],
  };

  const currentPatient = patient || defaultPatient;

  return (
    <div className='flex flex-col w-[630px] h-max justify-around gap-5'>
      <div className="w-auto flex-col flex justify-around bg-white h-max p-3 rounded-2xl gap-5">
        <h1 className='text-xl font-bold'>Diagnosis History</h1>
        <div className='bg-gray-100 w-full h-[300px] rounded-2xl p-3 flex flex-col'>
          <h1 className='font-bold text-xl w-full'>
            Blood Pressure <span className='text-xs font-normal ml-28'>Last 6 Months</span>
          </h1>
          <div className='w-full flex'>
            <div className='w-max p-3 flex flex-col gap-2'>
              <ul className='flex flex-col w-full text-xs p-2 gap-3 text-gray-400 border-l graph'>
                <li>180</li>
                <li>160</li>
                <li>140</li>
                <li>120</li>
                <li>100</li>
                <li>80</li>
                <li>60</li>
              </ul>
              <ul className='flex flex-wrap w-auto text-xs gap-2 text-gray-400'>
                <li>Oct 2023</li>
                <li>Nov 2023</li>
                <li>Dec 2023</li>
                <li>Jan 2024</li>
                <li>Feb 2024</li>
                <li>Mar 2024</li>
              </ul>
            </div>
            <div className='flex flex-col w-1/4 text-sm gap-1'>
              <p>Systolic</p>
              <span className='text-2xl'><b>160</b></span>
              <p>Higher than average</p>
              <hr />
              <p>Diastolic</p>
              <span className='text-2xl'><b>78</b></span>
              <p>Lower than average</p>
            </div>
          </div>
        </div>

        <div className='w-full flex justify-around gap-3'>
          <div className='w-1/3 h-52 bg-blue-300 justify-between rounded-xl flex flex-col p-3'>
            <img src={Respiratory} className='w-20 h-20' alt='Respiratory Rate' />
            <p>Respiratory Ratio</p>
            <span className='font-bold text-xl'>{currentPatient.diagnosis_history[0].respiratory_rate.value} bpm</span>
            <span className='text-sm'>{currentPatient.diagnosis_history[0].respiratory_rate.levels}</span>
          </div>
          <div className='w-1/3 h-52 bg-pink-300 justify-between rounded-xl flex flex-col p-3'>
            <img src={Temperature} className='w-20 h-20' alt='Temperature' />
            <p>Temperature</p>
            <span className='font-bold text-xl'>{currentPatient.diagnosis_history[0].temperature.value} °F</span>
            <span className='text-sm'>{currentPatient.diagnosis_history[0].temperature.levels}</span>
          </div>
          <div className='w-1/3 h-52 bg-red-300 justify-between rounded-xl flex flex-col p-3'>
            <img src={Heartbpm} className='w-20 h-20' alt='Heart Rate' />
            <p>Heart Rate</p>
            <span className='font-bold text-xl'>{currentPatient.diagnosis_history[0].heart_rate.value} bpm</span>
            <span className='text-sm'>{currentPatient.diagnosis_history[0].heart_rate.levels}</span>
          </div>
        </div>
      </div>

      <div className='bg-white p-4 rounded-2xl flex gap-3 flex-col h-auto'>
        <h2 className='text-xl font-bold'>Diagnostic List</h2>
        <div className="h-[250px] overflow-y-scroll rounded">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-100 text-left text-sm">
                <th className="p-3 ">Problem/Diagnosis</th>
                <th className="p-3">Description</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentPatient.diagnostic_list.length > 0 ? (
                currentPatient.diagnostic_list.map((diagnostic, key) => (
                  <tr key={key} className="text-xs border-b">
                    <td className="p-2">{diagnostic.name}</td>
                    <td className="p-2">{diagnostic.description}</td>
                    <td className="p-2">{diagnostic.status}</td>
                  </tr>
                ))
              ) : (
                <tr className="text-center">
                  <td className="p-3" colSpan="3">No diagnostic records available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;

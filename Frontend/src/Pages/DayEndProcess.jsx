import React, { useState } from 'react';

const DayEndProcess = () => {
  const [selectedPlant, setSelectedPlant] = useState('');
  const [attendanceData, setAttendanceData] = useState([]);
  const [formData, setFormData] = useState({
    date: '',
    employeeNo: '',
    employeeName: '',
    inTime: '',
    outTime: ''
  });

  // Mock employee data from Employee Master
  const mockEmployees = [
    { empNo: 'EMP001', name: 'John Doe', epfNo: 'EPF001', enrollNo: 'ENR001' },
    { empNo: 'EMP002', name: 'Jane Smith', epfNo: 'EPF002', enrollNo: 'ENR002' },
    { empNo: 'EMP003', name: 'Mike Johnson', epfNo: 'EPF003', enrollNo: 'ENR003' },
  ];

  const plants = ['Plant 1', 'Plant 2'];

  const handlePlantChange = (e) => {
    setSelectedPlant(e.target.value);
    // Load employee data for selected plant
    setAttendanceData(mockEmployees.map(emp => ({
      date: new Date().toISOString().split('T')[0],
      employeeNo: emp.empNo,
      employeeName: emp.name,
      inTime: '',
      outTime: ''
    })));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    if (!selectedPlant) {
      alert('Please select a plant first');
      return;
    }
    alert('Day end process saved successfully!');
  };

  const handleUpload = () => {
    alert('Attendance data uploaded successfully!');
  };

  const handleReset = () => {
    setSelectedPlant('');
    setAttendanceData([]);
    setFormData({
      date: '',
      employeeNo: '',
      employeeName: '',
      inTime: '',
      outTime: ''
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Day End Process</h2>
      
      {/* Plant Selection */}
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Plant *
            </label>
            <select
              value={selectedPlant}
              onChange={handlePlantChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Plant</option>
              {plants.map(plant => (
                <option key={plant} value={plant}>{plant}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={handleInputChange}
              name="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
        
        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Save
          </button>
          <button
            onClick={handleUpload}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Upload
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            Reset
          </button>
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Exit
          </button>
        </div>
      </div>

      {/* Attendance Table */}
      {selectedPlant && (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">
              Employee Attendance - {selectedPlant}
            </h3>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Employee No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Employee Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  In Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Out Time
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {attendanceData.map((record, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {record.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {record.employeeNo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {record.employeeName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <input
                      type="time"
                      value={record.inTime}
                      onChange={(e) => {
                        const updatedData = [...attendanceData];
                        updatedData[index].inTime = e.target.value;
                        setAttendanceData(updatedData);
                      }}
                      className="border border-gray-300 rounded px-2 py-1 text-sm"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <input
                      type="time"
                      value={record.outTime}
                      onChange={(e) => {
                        const updatedData = [...attendanceData];
                        updatedData[index].outTime = e.target.value;
                        setAttendanceData(updatedData);
                      }}
                      className="border border-gray-300 rounded px-2 py-1 text-sm"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DayEndProcess;

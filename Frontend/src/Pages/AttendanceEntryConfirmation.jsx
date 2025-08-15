import React, { useState } from 'react';

const AttendanceEntryConfirmation = () => {
  const [formData, setFormData] = useState({
    enrollNo: '',
    empNo: '',
    fromDate: '',
    toDate: ''
  });
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  // Mock employee data
  const mockEmployees = [
    { enrollNo: 'ENR001', empNo: 'EMP001', name: 'John Doe' },
    { enrollNo: 'ENR002', empNo: 'EMP002', name: 'Jane Smith' },
    { enrollNo: 'ENR003', empNo: 'EMP003', name: 'Mike Johnson' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // If enroll number is entered, find employee and populate data
    if (name === 'enrollNo') {
      const employee = mockEmployees.find(emp => emp.enrollNo === value);
      if (employee) {
        setFormData(prev => ({
          ...prev,
          empNo: employee.empNo
        }));
        
        // Generate mock attendance records
        const records = [
          {
            date: '2024-03-01',
            reason: 'Present',
            inDate: '2024-03-01',
            inTime: '08:00',
            outDate: '2024-03-01',
            outTime: '17:00'
          },
          {
            date: '2024-03-02',
            reason: 'Present',
            inDate: '2024-03-02',
            inTime: '08:15',
            outDate: '2024-03-02',
            outTime: '17:30'
          },
          {
            date: '2024-03-03',
            reason: 'Weekend',
            inDate: '2024-03-03',
            inTime: '--',
            outDate: '2024-03-03',
            outTime: '--'
          }
        ];
        setAttendanceRecords(records);
      }
    }
  };

  const handleSave = () => {
    if (!formData.enrollNo) {
      alert('Please enter enroll number first');
      return;
    }
    alert('Attendance records saved successfully!');
  };

  const handleRefresh = () => {
    setFormData({
      enrollNo: '',
      empNo: '',
      fromDate: '',
      toDate: ''
    });
    setAttendanceRecords([]);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Attendance Entry Confirmation</h2>
      
      {/* Form Section */}
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enroll No *
            </label>
            <input
              type="text"
              name="enrollNo"
              value={formData.enrollNo}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter enroll number"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Name (Emp No)
            </label>
            <select
              name="empNo"
              value={formData.empNo}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Employee</option>
              {mockEmployees.map(emp => (
                <option key={emp.empNo} value={emp.empNo}>
                  {emp.name} ({emp.empNo})
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              From Date
            </label>
            <input
              type="date"
              name="fromDate"
              value={formData.fromDate}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              To Date
            </label>
            <input
              type="date"
              name="toDate"
              value={formData.toDate}
              onChange={handleInputChange}
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
            onClick={handleRefresh}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Refresh
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
      {attendanceRecords.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">
              Attendance Records
            </h3>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reason
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  In Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  In Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Out Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Out Time
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {attendanceRecords.map((record, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {record.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {record.reason}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {record.inDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {record.inTime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {record.outDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {record.outTime}
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

export default AttendanceEntryConfirmation;

import React, { useState } from 'react';

const SalaryAdvance = () => {
  const [formData, setFormData] = useState({
    payNo: '',
    date: '',
    epfNo: '',
    employeeName: '',
    remark: '',
    paySalary: '',
    basicSalary: ''
  });

  const [salaryAdvances, setSalaryAdvances] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

  // Mock data for dropdowns
  const dates = ['2024-01-01', '2024-01-15', '2024-02-01', '2024-02-15', '2024-03-01'];
  const epfNumbers = ['EPF001', 'EPF002', 'EPF003', 'EPF004', 'EPF005'];
  const employeeNames = ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Wilson', 'David Brown'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    if (editingIndex >= 0) {
      // Update existing record
      const updatedAdvances = [...salaryAdvances];
      updatedAdvances[editingIndex] = { ...formData };
      setSalaryAdvances(updatedAdvances);
      setEditingIndex(-1);
    } else {
      // Add new record
      setSalaryAdvances(prev => [...prev, { ...formData }]);
    }
    handleReset();
  };

  const handleEdit = (index) => {
    setFormData(salaryAdvances[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setSalaryAdvances(prev => prev.filter((_, i) => i !== index));
  };

  const handleReset = () => {
    setFormData({
      payNo: '',
      date: '',
      epfNo: '',
      employeeName: '',
      remark: '',
      paySalary: '',
      basicSalary: ''
    });
    setEditingIndex(-1);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Salary Advance Form</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pay No</label>
            <input
              type="text"
              name="payNo"
              value={formData.payNo}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Pay No"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <select
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Date</option>
              {dates.map(date => (
                <option key={date} value={date}>{date}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">EPF No</label>
            <select
              name="epfNo"
              value={formData.epfNo}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select EPF No</option>
              {epfNumbers.map(epf => (
                <option key={epf} value={epf}>{epf}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Employee Name</label>
            <select
              name="employeeName"
              value={formData.employeeName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Employee</option>
              {employeeNames.map(name => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pay Salary</label>
            <input
              type="number"
              name="paySalary"
              value={formData.paySalary}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Pay Salary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Basic Salary</label>
            <input
              type="number"
              name="basicSalary"
              value={formData.basicSalary}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Basic Salary"
            />
          </div>

          <div className="md:col-span-2 lg:col-span-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">Remark</label>
            <textarea
              name="remark"
              value={formData.remark}
              onChange={handleInputChange}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter remarks"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            {editingIndex >= 0 ? 'Update' : 'Save'}
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
          >
            Reset
          </button>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Exit
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Salary Advance Records</h3>
        
        {salaryAdvances.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No salary advance records found</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pay No</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EPF No</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pay Salary</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Basic Salary</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remark</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {salaryAdvances.map((advance, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{advance.payNo}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{advance.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{advance.epfNo}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{advance.employeeName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{advance.paySalary}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{advance.basicSalary}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{advance.remark}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleEdit(index)}
                        className="text-blue-600 hover:text-blue-900 mr-3"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SalaryAdvance;

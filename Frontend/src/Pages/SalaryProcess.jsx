import React, { useState } from 'react';

const SalaryProcess = () => {
  const [formData, setFormData] = useState({
    month: '',
    year: ''
  });
  const [salaryData, setSalaryData] = useState([]);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    if (!formData.month || !formData.year) {
      alert('Please select month and year first');
      return;
    }
    alert('Salary process saved successfully!');
  };

  const handleRefresh = () => {
    setFormData({
      month: '',
      year: ''
    });
    setSalaryData([]);
  };

  const handleProcess = () => {
    if (!formData.month || !formData.year) {
      alert('Please select month and year first');
      return;
    }

    // Generate mock salary data
    const mockSalaryData = [
      {
        epfNumber: 'EPF001',
        employeeName: 'John Doe',
        wDays: 22,
        wHours: 176,
        otHour: 8,
        basicSalary: 50000,
        br1: 5000,
        br2: 3000,
        ot: 4000,
        attAllowance: 2000,
        meal: 1500,
        otherAll: 1000,
        productionIns: 500,
        grossSalary: 67500,
        salaryAdvance: 0,
        loanDeduction: 0,
        epf8: 4000,
        netSalary: 63500
      },
      {
        epfNumber: 'EPF002',
        employeeName: 'Jane Smith',
        wDays: 21,
        wHours: 168,
        otHour: 6,
        basicSalary: 45000,
        br1: 4500,
        br2: 2700,
        ot: 3000,
        attAllowance: 1800,
        meal: 1350,
        otherAll: 900,
        productionIns: 450,
        grossSalary: 60300,
        salaryAdvance: 5000,
        loanDeduction: 2000,
        epf8: 3600,
        netSalary: 49700
      },
      {
        epfNumber: 'EPF003',
        employeeName: 'Mike Johnson',
        wDays: 20,
        wHours: 160,
        otHour: 4,
        basicSalary: 40000,
        br1: 4000,
        br2: 2400,
        ot: 2000,
        attAllowance: 1600,
        meal: 1200,
        otherAll: 800,
        productionIns: 400,
        grossSalary: 52400,
        salaryAdvance: 0,
        loanDeduction: 0,
        epf8: 3200,
        netSalary: 49200
      }
    ];

    setSalaryData(mockSalaryData);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Salary Process</h2>
      
      {/* Form Section */}
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Month *
            </label>
            <select
              name="month"
              value={formData.month}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Month</option>
              {months.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Year *
            </label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter year (e.g., 2024)"
              min="2020"
              max="2030"
            />
          </div>
        </div>
        
        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleProcess}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Process
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Save
          </button>
          <button
            onClick={handleRefresh}
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
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

      {/* Salary Table */}
      {salaryData.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">
              Salary Report - {formData.month} {formData.year}
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    EPF Number
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Employee Name
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    W/Days
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    W/Hours
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    OT Hour
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Basic Salary
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    BR1
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    BR2
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    OT
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Att. Allowance
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Meal
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Other All
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Production Ins
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Gross Salary
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Salary Advance
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Loan Deduction
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    EPF 8%
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Net Salary
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {salaryData.map((salary, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                      {salary.epfNumber}
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                      {salary.employeeName}
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                      {salary.wDays}
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                      {salary.wHours}
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                      {salary.otHour}
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                      {salary.basicSalary.toLocaleString()}
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                      {salary.br1.toLocaleString()}
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                      {salary.br2.toLocaleString()}
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                      {salary.ot.toLocaleString()}
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                      {salary.attAllowance.toLocaleString()}
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                      {salary.meal.toLocaleString()}
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                      {salary.otherAll.toLocaleString()}
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                      {salary.productionIns.toLocaleString()}
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      {salary.grossSalary.toLocaleString()}
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-red-600">
                      {salary.salaryAdvance.toLocaleString()}
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-red-600">
                      {salary.loanDeduction.toLocaleString()}
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-red-600">
                      {salary.epf8.toLocaleString()}
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm font-bold text-green-600">
                      {salary.netSalary.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalaryProcess;

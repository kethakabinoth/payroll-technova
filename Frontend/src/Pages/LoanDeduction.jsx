import React, { useState } from 'react';

const LoanDeduction = () => {
  const [formData, setFormData] = useState({
    month: '',
    year: ''
  });

  const [loanDeductions, setLoanDeductions] = useState([
    {
      loanNo: 'LN001',
      epfNo: 'EPF001',
      employeeName: 'John Doe',
      loanAmount: 50000,
      paidAmount: 15000,
      installment: 5000
    },
    {
      loanNo: 'LN002',
      epfNo: 'EPF002',
      employeeName: 'Jane Smith',
      loanAmount: 75000,
      paidAmount: 25000,
      installment: 7500
    },
    {
      loanNo: 'LN003',
      epfNo: 'EPF003',
      employeeName: 'Mike Johnson',
      loanAmount: 30000,
      paidAmount: 10000,
      installment: 3000
    }
  ]);

  // Mock data for dropdowns
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
    // In a real application, this would save the month/year selection
    // and potentially fetch loan deduction data for that period
    console.log('Saving loan deduction data for:', formData.month, formData.year);
    
    // For demo purposes, we'll just show an alert
    alert(`Loan deduction data saved for ${formData.month} ${formData.year}`);
  };

  const handleReset = () => {
    setFormData({
      month: '',
      year: ''
    });
  };

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Loan Deduction Form</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Month</label>
            <select
              name="month"
              value={formData.month}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Month</option>
              {months.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              min={getCurrentYear() - 10}
              max={getCurrentYear() + 5}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Year"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Save
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
        <h3 className="text-lg font-semibold mb-4">Loan Deduction Records</h3>
        
        {loanDeductions.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No loan deduction records found</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Loan No</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EPF No</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Loan Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paid Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Installment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remaining Amount</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loanDeductions.map((loan, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{loan.loanNo}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{loan.epfNo}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{loan.employeeName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Rs. {loan.loanAmount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Rs. {loan.paidAmount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Rs. {loan.installment.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Rs. {(loan.loanAmount - loan.paidAmount).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Summary */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="text-md font-semibold mb-3">Summary</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-600">Total Loans</p>
              <p className="text-lg font-semibold">{loanDeductions.length}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Loan Amount</p>
              <p className="text-lg font-semibold">
                Rs. {loanDeductions.reduce((sum, loan) => sum + loan.loanAmount, 0).toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Paid Amount</p>
              <p className="text-lg font-semibold">
                Rs. {loanDeductions.reduce((sum, loan) => sum + loan.paidAmount, 0).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanDeduction;

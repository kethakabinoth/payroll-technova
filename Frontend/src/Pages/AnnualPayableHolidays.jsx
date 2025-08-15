import React, { useState } from 'react';

const AnnualPayableHolidays = () => {
  const [formData, setFormData] = useState({
    date: '',
    typeOfHoliday: '',
    remarks: ''
  });
  const [holidays, setHolidays] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const holidayTypes = [
    'Poya Day',
    'Factory Shutdown',
    'Saturday',
    'Holiday',
    'New Year'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    if (!formData.date || !formData.typeOfHoliday) {
      alert('Please fill in all required fields');
      return;
    }

    if (editingIndex !== null) {
      // Update existing record
      const updatedHolidays = [...holidays];
      updatedHolidays[editingIndex] = { ...formData };
      setHolidays(updatedHolidays);
      setEditingIndex(null);
    } else {
      // Add new record
      setHolidays(prev => [...prev, { ...formData }]);
    }
    handleReset();
  };

  const handleDelete = (index) => {
    setHolidays(prev => prev.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setFormData(holidays[index]);
    setEditingIndex(index);
  };

  const handleReset = () => {
    setFormData({
      date: '',
      typeOfHoliday: '',
      remarks: ''
    });
    setEditingIndex(null);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Annual Payable Holidays</h2>
      
      {/* Form Section */}
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type of Holiday *
            </label>
            <select
              name="typeOfHoliday"
              value={formData.typeOfHoliday}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="">Select Type</option>
              {holidayTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Remarks
            </label>
            <input
              type="text"
              name="remarks"
              value={formData.remarks}
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
            {editingIndex !== null ? 'Update' : 'Save'}
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            Reset
          </button>
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Exit
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type of Holiday
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Remarks
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {holidays.map((holiday, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {holiday.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {holiday.typeOfHoliday}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {holiday.remarks}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-indigo-600 hover:text-indigo-900 mr-3"
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
    </div>
  );
};

export default AnnualPayableHolidays;

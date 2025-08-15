// src/pages/RemoveDayEndProcess.jsx
import React, { useState } from "react";
import { SlCalender } from "react-icons/sl";
import { FaSave, FaTrashAlt, FaUndo, FaSignOutAlt } from "react-icons/fa";

const RemoveDayEndProcess = () => {
  const [formData, setFormData] = useState({ fromDate: "", toDate: "" });
  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    if (!formData.fromDate || !formData.toDate) {
      alert("Please select both dates");
      return;
    }
    setTableData([
      { date: "2025-01-05", employeeNo: "EMP001", employeeName: "John Doe", inTime: "08:00", outTime: "17:00" },
      { date: "2025-01-06", employeeNo: "EMP002", employeeName: "Jane Smith", inTime: "08:30", outTime: "17:30" },
    ]);
  };

  const handleSave = () => alert("Data saved successfully");
  const handleDelete = () => { setTableData([]); alert("Data deleted successfully"); };
  const handleReset = () => { setFormData({ fromDate: "", toDate: "" }); setTableData([]); };

  return (
    <div className="w-full h-full p-4">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 font-[inter]">Remove Day End Process</h2>

      <div className="bg-white p-7 rounded-lg shadow-sm border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-1">From Date <span className="text-red-500">*</span></label>
            <div className="relative">
              <input type="date" name="fromDate" value={formData.fromDate} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500" required />
              <SlCalender className="absolute right-3 top-3 text-gray-400" />
            </div>
          </div>
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-1">To Date <span className="text-red-500">*</span></label>
            <div className="relative">
              <input type="date" name="toDate" value={formData.toDate} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500" required />
              <SlCalender className="absolute right-3 top-3 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <button onClick={handleAdd} className="px-4 py-2 bg-green-600 text-white rounded-md">Add</button>
          <div className="flex gap-3">
            <button onClick={handleSave} className="flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"><FaSave className="mr-2" /> Save</button>
            <button onClick={handleDelete} className="flex items-center bg-white hover:bg-green-100 text-green-600 font-bold py-2 px-4 rounded-md border border-green-600"><FaTrashAlt className="mr-2" /> Delete</button>
            <button onClick={handleReset} className="flex items-center bg-white hover:bg-green-100 text-green-600 font-bold py-2 px-4 rounded-md border border-green-600"><FaUndo className="mr-2" /> Reset</button>
            <button onClick={()=>window.history.back()} className="flex items-center bg-white hover:bg-green-100 text-green-600 font-bold py-2 px-4 rounded-md border border-green-600"><FaSignOutAlt className="mr-2" /> Exit</button>
          </div>
        </div>

        {tableData.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Employee No</th>
                  <th className="py-2 px-4 text-left">Employee Name</th>
                  <th className="py-2 px-4 text-left">In Time</th>
                  <th className="py-2 px-4 text-left">Out Time</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, idx)=> (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-t">{row.date}</td>
                    <td className="py-2 px-4 border-t">{row.employeeNo}</td>
                    <td className="py-2 px-4 border-t">{row.employeeName}</td>
                    <td className="py-2 px-4 border-t">{row.inTime}</td>
                    <td className="py-2 px-4 border-t">{row.outTime}</td>
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

export default RemoveDayEndProcess;
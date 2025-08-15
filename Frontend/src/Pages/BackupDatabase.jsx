// src/pages/BackupDatabase.jsx
import React, { useState } from "react";
import { MdBackup } from "react-icons/md";
import { FaUndo, FaSignOutAlt } from "react-icons/fa";

const BackupDatabase = () => {
  const [formData, setFormData] = useState({ fromDevice: "", toDevice: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Backup data:", formData);
  };

  return (
    <div className="w-full h-full p-4">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 font-[inter]">Database Backup</h2>

      <div className="bg-white p-7 rounded-lg shadow-sm border border-gray-200">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">From Device <span className="text-red-500">*</span></label>
              <select name="fromDevice" value={formData.fromDevice} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500" required>
                <option value="">Select source device</option>
                <option value="local">Local Server</option>
                <option value="cloud">Cloud Storage</option>
                <option value="external">External Drive</option>
              </select>
            </div>
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">To Device <span className="text-red-500">*</span></label>
              <select name="toDevice" value={formData.toDevice} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500" required>
                <option value="">Select destination device</option>
                <option value="local">Local Server</option>
                <option value="cloud">Cloud Storage</option>
                <option value="external">External Drive</option>
                <option value="usb">USB Drive</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap justify-end gap-3 pt-6 border-t border-gray-200">
            <button type="submit" className="flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md"><MdBackup className="mr-2" /> Backup Now</button>
            <button type="button" className="flex items-center bg-white hover:bg-green-50 text-green-700 font-semibold py-2 px-4 rounded-md border border-green-600"><FaUndo className="mr-2" /> Reset</button>
            <button type="button" onClick={()=>window.history.back()} className="flex items-center bg-white hover:bg-green-50 text-green-700 font-semibold py-2 px-4 rounded-md border border-green-600"><FaSignOutAlt className="mr-2" /> Exit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BackupDatabase;
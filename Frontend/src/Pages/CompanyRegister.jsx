// src/pages/CompanyRegister.jsx
import React from "react";
import { FaSave, FaEdit, FaTrashAlt, FaUndo, FaSignOutAlt } from "react-icons/fa";

const CompanyRegister = () => {
  return (
    <div className="w-full h-full p-4">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 font-[inter]">Company Registration Form</h2>

      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-6">
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Enter company name" />
            </div>
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Web Address <span className="text-red-500">*</span></label>
              <input type="url" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="https://example.com" />
            </div>
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
              <input type="tel" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Enter phone number" />
            </div>
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
              <input type="email" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="company@example.com" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Address <span className="text-red-500">*</span></label>
              <textarea className="w-full border border-gray-300 rounded-md p-2 h-24 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Enter full address" />
            </div>
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">C Form No <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Enter C Form number" />
            </div>
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">F Form No <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Enter F Form number" />
            </div>
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">W/F Deduction (%) <span className="text-red-500">*</span></label>
              <input type="number" min="0" max="100" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Enter deduction percentage" />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-end gap-3 pt-6 border-t border-gray-200">
          <button className="flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md"><FaSave className="mr-2" /> Save</button>
          <button className="flex items-center bg-white hover:bg-green-50 text-green-700 font-semibold py-2 px-4 rounded-md border border-green-600"><FaEdit className="mr-2" /> Edit</button>
          <button className="flex items-center bg-white hover:bg-green-50 text-green-700 font-semibold py-2 px-4 rounded-md border border-green-600"><FaTrashAlt className="mr-2" /> Delete</button>
          <button className="flex items-center bg-white hover:bg-green-50 text-green-700 font-semibold py-2 px-4 rounded-md border border-green-600"><FaUndo className="mr-2" /> Reset</button>
          <button className="flex items-center bg-white hover:bg-green-50 text-green-700 font-semibold py-2 px-4 rounded-md border border-green-600"><FaSignOutAlt className="mr-2" /> Exit</button>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegister;

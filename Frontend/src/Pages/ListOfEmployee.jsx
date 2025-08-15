import React, { useState } from 'react';

const ListOfEmployee = () => {
  const [filterBy, setFilterBy] = useState('All employee');
  const [department, setDepartment] = useState('');
  const [designation, setDesignation] = useState('');
  const [data, setData] = useState([]);

  const departments = ['PLANTATION','PACKING','STERILIZATION LINE','CUTTING','RAW','DAY QUALITY','FINANCE & HR.'];
  const designations = ['Manager','Supervisor','Worker'];

  const handleFetch = () => {
    setData([
      { department: 'PACKING', designation: 'Worker', epfNo: 'EPF001', enrollNo: 'EN001', employeeName: 'John Doe' },
      { department: 'RAW', designation: 'Supervisor', epfNo: 'EPF002', enrollNo: 'EN002', employeeName: 'Jane Smith' },
    ]);
  };

  const handleReset = () => {
    setFilterBy('All employee');
    setDepartment('');
    setDesignation('');
    setData([]);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">List of Employee</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Filter by</label>
            <select value={filterBy} onChange={(e)=>setFilterBy(e.target.value)} className="w-full border rounded-md p-2">
              <option>All employee</option>
              <option>By department</option>
              <option>By designation</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
            <select value={department} onChange={(e)=>setDepartment(e.target.value)} className="w-full border rounded-md p-2">
              <option value="">Select</option>
              {departments.map(d=>(<option key={d}>{d}</option>))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
            <select value={designation} onChange={(e)=>setDesignation(e.target.value)} className="w-full border rounded-md p-2">
              <option value="">Select</option>
              {designations.map(d=>(<option key={d}>{d}</option>))}
            </select>
          </div>
          <div className="flex items-end gap-2">
            <button onClick={handleFetch} className="px-4 py-2 bg-green-600 text-white rounded-md">Save</button>
            <button onClick={()=>window.print()} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md border">Print</button>
            <button onClick={handleReset} className="px-4 py-2 bg-white text-green-700 rounded-md border border-green-600">Refresh</button>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="overflow-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">Department</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">Designation</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">EPF No</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">Enroll No</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">Employee Name</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.map((r,i)=> (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-3 py-2 text-sm">{r.department}</td>
                  <td className="px-3 py-2 text-sm">{r.designation}</td>
                  <td className="px-3 py-2 text-sm">{r.epfNo}</td>
                  <td className="px-3 py-2 text-sm">{r.enrollNo}</td>
                  <td className="px-3 py-2 text-sm">{r.employeeName}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {data.length===0 && <p className="text-center text-gray-500 py-6">No data</p>}
        </div>
      </div>
    </div>
  );
};

export default ListOfEmployee;

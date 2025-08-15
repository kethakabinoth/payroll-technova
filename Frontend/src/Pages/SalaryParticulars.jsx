import React, { useState } from 'react';

const SalaryParticulars = () => {
  const [employee, setEmployee] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [rows, setRows] = useState([]);

  const employees = ['John Doe','Jane Smith','Mike Johnson'];

  const handleFetch = () => {
    setRows([
      { date: '2025-01-05', inTime: '08:01', outDate: '2025-01-05', outTime: '17:02', workHr: '08:00', otHr: '01:00', production: 120, meal: 1 },
    ]);
  };

  const handleReset = () => {
    setEmployee('');
    setFromDate('');
    setToDate('');
    setRows([]);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Salary Particulars</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Employee</label>
            <select value={employee} onChange={(e)=>setEmployee(e.target.value)} className="w-full border rounded-md p-2">
              <option value="">Select</option>
              {employees.map(e=>(<option key={e}>{e}</option>))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">From date</label>
            <input type="date" value={fromDate} onChange={(e)=>setFromDate(e.target.value)} className="w-full border rounded-md p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">To date</label>
            <input type="date" value={toDate} onChange={(e)=>setToDate(e.target.value)} className="w-full border rounded-md p-2" />
          </div>
          <div className="flex items-end gap-2">
            <button onClick={handleFetch} className="px-4 py-2 bg-green-600 text-white rounded-md">Save</button>
            <button onClick={()=>window.print()} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md border">Print</button>
            <button onClick={handleReset} className="px-4 py-2 bg-white text-green-700 rounded-md border border-green-600">Refresh</button>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md overflow-auto">
        <table className="min-w-[1000px] divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {['Date','In time','Out date','Out time','Working HR','OT HR','Production','Meal'].map(h=> (
                <th key={h} className="px-3 py-2 text-left text-xs font-semibold text-gray-600">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((r,i)=> (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-3 py-2 text-sm">{r.date}</td>
                <td className="px-3 py-2 text-sm">{r.inTime}</td>
                <td className="px-3 py-2 text-sm">{r.outDate}</td>
                <td className="px-3 py-2 text-sm">{r.outTime}</td>
                <td className="px-3 py-2 text-sm">{r.workHr}</td>
                <td className="px-3 py-2 text-sm">{r.otHr}</td>
                <td className="px-3 py-2 text-sm">{r.production}</td>
                <td className="px-3 py-2 text-sm">{r.meal}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length===0 && <p className="text-center text-gray-500 py-6">No data</p>}
      </div>
    </div>
  );
};

export default SalaryParticulars;

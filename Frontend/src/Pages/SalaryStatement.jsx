import React, { useState } from 'react';

const SalaryStatement = () => {
  const [filterBy, setFilterBy] = useState('All employee');
  const [department, setDepartment] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [rows, setRows] = useState([]);

  const departments = ['PLANTATION','PACKING','STERILIZATION LINE','CUTTING','RAW','DAY QUALITY','FINANCE & HR.'];

  const handleFetch = () => {
    setRows([
      { empNo: 'E001', name: 'John Doe', days: 26, ot: 12, basic: 50000, br1: 2000, br2: 1500, otAmt: 2400, att: 1000, meal: 800, other: 500, production: 0, gross: 57700, advance: 5000, loan: 2000, epf8: 4616, net: 46084 },
    ]);
  };

  const handleReset = () => {
    setFilterBy('All employee');
    setDepartment('');
    setFromDate('');
    setToDate('');
    setRows([]);
  };

  const num = (n)=> (typeof n === 'number' ? n.toLocaleString() : n);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Salary Statement</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Filter by</label>
            <select value={filterBy} onChange={(e)=>setFilterBy(e.target.value)} className="w-full border rounded-md p-2">
              <option>All employee</option>
              <option>EPF Employee</option>
              <option>Non epf employee</option>
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
        <table className="min-w-[1200px] divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {['Emp No.','Empl name','No days','OT hour','Basic salary','BR1','BR2','OT Amount','At allowance','meal allowance','other allowance','production','gross salary','advance salary','loan','EPF 8%','Net salary'].map(h=> (
                <th key={h} className="px-3 py-2 text-left text-xs font-semibold text-gray-600">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((r,i)=> (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-3 py-2 text-sm">{r.empNo}</td>
                <td className="px-3 py-2 text-sm">{r.name}</td>
                <td className="px-3 py-2 text-sm">{r.days}</td>
                <td className="px-3 py-2 text-sm">{r.ot}</td>
                <td className="px-3 py-2 text-sm">{num(r.basic)}</td>
                <td className="px-3 py-2 text-sm">{num(r.br1)}</td>
                <td className="px-3 py-2 text-sm">{num(r.br2)}</td>
                <td className="px-3 py-2 text-sm">{num(r.otAmt)}</td>
                <td className="px-3 py-2 text-sm">{num(r.att)}</td>
                <td className="px-3 py-2 text-sm">{num(r.meal)}</td>
                <td className="px-3 py-2 text-sm">{num(r.other)}</td>
                <td className="px-3 py-2 text-sm">{num(r.production)}</td>
                <td className="px-3 py-2 text-sm">{num(r.gross)}</td>
                <td className="px-3 py-2 text-sm">{num(r.advance)}</td>
                <td className="px-3 py-2 text-sm">{num(r.loan)}</td>
                <td className="px-3 py-2 text-sm">{num(r.epf8)}</td>
                <td className="px-3 py-2 text-sm">{num(r.net)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length===0 && <p className="text-center text-gray-500 py-6">No data</p>}
      </div>
    </div>
  );
};

export default SalaryStatement;

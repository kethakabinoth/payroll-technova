import React, { useState } from 'react';

const CForm = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [rows, setRows] = useState([]);

  const handleFetch = () => {
    setRows([
      { empNo:'E001', name:'John Doe', basic: 50000, nic:'881234567V', br1br2: 3500, net: 46084, p8: 4616, p12: 6924, total: 11540 },
    ]);
  };

  const handleReset = () => {
    setFromDate('');
    setToDate('');
    setRows([]);
  };

  const num = (n)=> (typeof n === 'number' ? n.toLocaleString() : n);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">C Form</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
              {['Emp no','Emp name','Basic salary','NIC No','BR1BR2','Net salary','8%','12%','Total'].map(h=> (
                <th key={h} className="px-3 py-2 text-left text-xs font-semibold text-gray-600">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((r,i)=> (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-3 py-2 text-sm">{r.empNo}</td>
                <td className="px-3 py-2 text-sm">{r.name}</td>
                <td className="px-3 py-2 text-sm">{num(r.basic)}</td>
                <td className="px-3 py-2 text-sm">{r.nic}</td>
                <td className="px-3 py-2 text-sm">{num(r.br1br2)}</td>
                <td className="px-3 py-2 text-sm">{num(r.net)}</td>
                <td className="px-3 py-2 text-sm">{num(r.p8)}</td>
                <td className="px-3 py-2 text-sm">{num(r.p12)}</td>
                <td className="px-3 py-2 text-sm">{num(r.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length===0 && <p className="text-center text-gray-500 py-6">No data</p>}
      </div>
    </div>
  );
};

export default CForm;

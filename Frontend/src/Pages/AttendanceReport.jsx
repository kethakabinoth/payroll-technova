import React, { useState } from 'react';

const AttendanceReport = () => {
  const [filterBy, setFilterBy] = useState('By date');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Mock results
    setResults([
      { date: '2025-01-05', reason: '-', inDate: '2025-01-05', inTime: '08:01', outDate: '2025-01-05', outTime: '17:04', ot: '01:00' },
      { date: '2025-01-06', reason: 'Late bus', inDate: '2025-01-06', inTime: '08:12', outDate: '2025-01-06', outTime: '17:05', ot: '00:30' },
    ]);
  };

  const handleReset = () => {
    setFilterBy('By date');
    setFromDate('');
    setToDate('');
    setResults([]);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Attendance Report</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Filter by</label>
            <select value={filterBy} onChange={(e)=>setFilterBy(e.target.value)} className="w-full border rounded-md p-2">
              <option>By emp</option>
              <option>By date</option>
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
            <button onClick={handleSearch} className="px-4 py-2 bg-green-600 text-white rounded-md">Save</button>
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
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">Date</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">Reason</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">In date</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">In time</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">Out date</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">Out time</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">OT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {results.map((r, i)=> (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-3 py-2 text-sm">{r.date}</td>
                  <td className="px-3 py-2 text-sm">{r.reason}</td>
                  <td className="px-3 py-2 text-sm">{r.inDate}</td>
                  <td className="px-3 py-2 text-sm">{r.inTime}</td>
                  <td className="px-3 py-2 text-sm">{r.outDate}</td>
                  <td className="px-3 py-2 text-sm">{r.outTime}</td>
                  <td className="px-3 py-2 text-sm">{r.ot}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {results.length===0 && <p className="text-center text-gray-500 py-6">No data</p>}
        </div>
      </div>
    </div>
  );
};

export default AttendanceReport;

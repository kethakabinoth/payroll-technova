// src/pages/RemoveDayEndProcess.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { AiFillRobot, AiOutlineUserAdd, AiOutlineFund } from "react-icons/ai";
import { FaArrowsSpin } from "react-icons/fa6";
import { FaSave, FaTrashAlt, FaUndo, FaSignOutAlt } from "react-icons/fa";
import { GiPieChart, GiCancel } from "react-icons/gi";
import { MdLogout, MdAddHomeWork, MdBackup } from "react-icons/md";
import icon from "../assets/icon.png";
import logo from "../assets/logoN.png";

const RemoveDayEndProcess = () => {
  const [activeMenu, setActiveMenu] = useState("Remove Dayend Process");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentDate] = useState(new Date());
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    fromDate: "",
    toDate: ""
  });
  
  // Table data state
  const [tableData, setTableData] = useState([]);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const formatDate = (date) =>
    date.toLocaleString("en-US", {
      day: "numeric",
      weekday: "short",
      year: "numeric",
      month: "long",
    });

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    switch(menuName) {
      case "System Administrator":
        navigate("/");
        break;
      case "Company Register":
        navigate("/company-register");
        break;
      case "Backup Database":
        navigate("/backup-database");
        break;
      case "Remove Dayend Process":
        navigate("/remove-dayend-process");
        break;
      case "Registration":
        navigate("/registration");
        break;
      case "Process":
        navigate("/process");
        break;
      case "Deduction":
        navigate("/deduction");
        break;
      case "Report":
        navigate("/report");
        break;
      default:
        break;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAdd = () => {
    if (!formData.fromDate || !formData.toDate) {
      alert("Please select both dates");
      return;
    }
    
    // Generate mock data for the table
    const mockData = [
      {
        date: "2023-10-01",
        employeeNo: "EMP001",
        employeeName: "John Doe",
        inTime: "08:00 AM",
        outTime: "05:00 PM"
      },
      {
        date: "2023-10-02",
        employeeNo: "EMP002",
        employeeName: "Jane Smith",
        inTime: "08:30 AM",
        outTime: "05:30 PM"
      }
    ];
    
    setTableData(mockData);
  };

  const handleSave = () => {
    // Implement save logic here
    alert("Data saved successfully");
  };

  const handleDelete = () => {
    setTableData([]);
    alert("Data deleted successfully");
  };

  const handleReset = () => {
    setFormData({ fromDate: "", toDate: "" });
    setTableData([]);
  };

  const handleExit = () => {
    navigate(-1);
  };

  const mainMenuItems = [
    { name: "Company Register", icon: <MdAddHomeWork size={20} /> },
    { name: "Backup Database", icon: <MdBackup size={20} /> },
    { name: "Remove Dayend Process", icon: <GiCancel size={20} /> },
  ];

  const secondaryMenuItems = [
    { name: "System Administrator", icon: <AiFillRobot size={20} /> },
    {
      name: "Registration",
      icon: <AiOutlineUserAdd size={20} style={{ strokeWidth: "20" }} />,
    },
    { name: "Process", icon: <FaArrowsSpin size={20} /> },
    { name: "Deduction", icon: <GiPieChart size={20} /> },
    {
      name: "Report",
      icon: <AiOutlineFund size={20} style={{ strokeWidth: "20" }} />,
    },
  ];

  return (
    <div className="relative w-[1509px] h-[1024px] bg-gray-100">
      {/* Header Section */}
      <header className="absolute top-[34px] left-0 right-0 flex justify-between items-center px-6">
        <h1
          className={`font-[inter] text-3xl font-semibold text-gray-800 transition-all duration-300 ${
            sidebarCollapsed ? "ml-[120px]" : "ml-[326px]"
          }`}
        >
          {activeMenu}
        </h1>
        <div className="flex items-center mr-[42px] gap-3">
          <SlCalender className="text-gray-500 text-3xl" />
          <span className="text-2xl font-bold text-gray-600 font-[inter]">
            {formatDate(currentDate)}
          </span>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <nav
        className={`absolute left-[21px] top-[25px] bottom-[21px] bg-[#1b7132] rounded-[22px] flex flex-col transition-all duration-300 ${
          sidebarCollapsed ? "w-[80px]" : "w-[298px]"
        } scrollbar-hide`}
      >
        {/* Logo Section */}
        <div
          className="p-4 border-b border-white border-opacity-20 cursor-pointer flex items-center"
          onClick={toggleSidebar}
          style={{ paddingLeft: "13px" }}
        >
          <div className="flex items-center gap-3">
            <img src={icon} alt="Logo" className="w-10 h-10" />
            {!sidebarCollapsed && (
              <img src={logo} alt="LogoN" className="w-[80px] h-[80px] ml-10" />
            )}
          </div>
        </div>

        {/* Main Menu */}
        <div className="flex-1 py-2 overflow-y-auto">
          {mainMenuItems.map((item) => (
            <div key={item.name} className="mb-1 mx-1">
              <button
                onClick={() => handleMenuClick(item.name)}
                className={`w-full flex items-center p-2 ${
                  sidebarCollapsed ? "justify-center" : "pl-3"
                } rounded-md transition-all duration-150 ${
                  activeMenu === item.name
                    ? "compact-hover-active"
                    : "compact-hover"
                }`}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                  {React.cloneElement(item.icon, {
                    size: 28,
                  })}
                </div>
                {!sidebarCollapsed && (
                  <span className="text-white text-md font-medium ml-3">
                    {item.name}
                  </span>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-20 mx-3"></div>

        {/* Secondary Menu */}
        <div className="py-1">
          {secondaryMenuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleMenuClick(item.name)}
              className={`flex items-center w-full ${
                sidebarCollapsed ? "justify-center px-0" : "pl-3"
              } py-1.5 rounded-md mx-0 mb-0.5 transition-all duration-150 ${
                activeMenu === item.name
                  ? "bg-[#e8f5e9] text-[#1b7132]"
                  : "hover:bg-[#80c780] text-white"
              }`}
            >
              <div
                className={`flex items-center justify-center ${
                  sidebarCollapsed ? "w-8 h-8" : "w-10 h-10"
                } rounded-full ${
                  activeMenu === item.name ? "bg-[#1b7132]" : "bg-gray-100"
                }`}
              >
                {React.cloneElement(item.icon, {
                  color: activeMenu === item.name ? "#ffffff" : "#000000",
                  size: 28,
                })}
              </div>
              {!sidebarCollapsed && (
                <span className="text-md font-medium ml-2">{item.name}</span>
              )}
            </button>
          ))}
        </div>

        {/* Logout Button */}
        <div className="p-3 border-t border-white border-opacity-20">
          <button
            className={`w-full flex items-center justify-center py-2 ${
              sidebarCollapsed ? "px-2" : "px-3"
            } bg-[#FDFDFD] text-[#1b7132] rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors duration-150`}
          >
            <MdLogout
              size={sidebarCollapsed ? 25 : 35}
              className={sidebarCollapsed ? "" : "mr-1.5"}
            />
            {!sidebarCollapsed && "LOGOUT"}
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main
        className={`absolute bg-white rounded-xl shadow-md transition-all duration-300 ${
          sidebarCollapsed ? "left-[120px]" : "left-[352px]"
        } top-[123px] right-[27px] bottom-[25px] scrollbar-hide overflow-auto`}
      >
        <div className="w-full h-full p-4">
          <h2 className="text-2xl font-semibold text-gray-500 mb-6 font-[inter]">
            Remove Day End Process
          </h2>

          {/* Form Container */}
          <div
            className={`bg-white p-7 rounded-lg shadow-sm border border-gray-200 hover:border-green-500 transition-colors duration-300 ${
              sidebarCollapsed ? "w-[1285px]" : "w-[1095px]"
            }`}
          >
            {/* Date Selection Forms */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="form-group">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  From Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="fromDate"
                    value={formData.fromDate}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 hover:border-green-400 transition-colors"
                    required
                  />
                  <SlCalender className="absolute right-3 top-3 text-gray-400" />
                </div>
              </div>

              <div className="form-group">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  To Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="toDate"
                    value={formData.toDate}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 hover:border-green-400 transition-colors"
                    required
                  />
                  <SlCalender className="absolute right-3 top-3 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Add Button */}
            <div className="flex justify-start mb-6">
              <button
                onClick={handleAdd}
                className="flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
              >
                Add
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 mb-6">
              <button 
                onClick={handleSave}
                className="flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
              >
                <FaSave className="mr-2" />
                Save
              </button>
              <button 
                onClick={handleDelete}
                className="flex items-center bg-white hover:bg-green-100 text-green-600 font-bold py-2 px-4 rounded-md transition-colors border border-green-600"
              >
                <FaTrashAlt className="mr-2" />
                Delete
              </button>
              <button 
                onClick={handleReset}
                className="flex items-center bg-white hover:bg-green-100 text-green-600 font-bold py-2 px-4 rounded-md transition-colors border border-green-600"
              >
                <FaUndo className="mr-2" />
                Reset
              </button>
              <button 
                onClick={handleExit}
                className="flex items-center bg-white hover:bg-green-100 text-green-600 font-bold py-2 px-4 rounded-md transition-colors border border-green-600"
              >
                <FaSignOutAlt className="mr-2" />
                Exit
              </button>
            </div>

            {/* Table */}
            {tableData.length > 0 && (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 border-b border-gray-200 text-left">Date</th>
                      <th className="py-2 px-4 border-b border-gray-200 text-left">Employee No</th>
                      <th className="py-2 px-4 border-b border-gray-200 text-left">Employee Name</th>
                      <th className="py-2 px-4 border-b border-gray-200 text-left">In Time</th>
                      <th className="py-2 px-4 border-b border-gray-200 text-left">Out Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b border-gray-200">{row.date}</td>
                        <td className="py-2 px-4 border-b border-gray-200">{row.employeeNo}</td>
                        <td className="py-2 px-4 border-b border-gray-200">{row.employeeName}</td>
                        <td className="py-2 px-4 border-b border-gray-200">{row.inTime}</td>
                        <td className="py-2 px-4 border-b border-gray-200">{row.outTime}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default RemoveDayEndProcess;
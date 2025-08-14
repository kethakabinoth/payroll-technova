// src/pages/CompanyRegister.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { AiFillRobot, AiOutlineUserAdd, AiOutlineFund } from "react-icons/ai";
import { FaArrowsSpin } from "react-icons/fa6";
import {
  FaSave,
  FaEdit,
  FaTrashAlt,
  FaUndo,
  FaSignOutAlt,
} from "react-icons/fa";
import { GiPieChart, GiCancel } from "react-icons/gi";
import { MdLogout, MdAddHomeWork, MdBackup } from "react-icons/md";
import icon from "../assets/icon.png";
import logo from "../assets/logoN.png";

const CompanyRegister = () => {
  const [activeMenu, setActiveMenu] = useState("Company Register");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentDate] = useState(new Date());
  const navigate = useNavigate();

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

// Update the handleMenuClick function
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
      navigate("/remove-dayend");
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
            Company Registration Form
          </h2>

          {/* Form Container with fixed sizing */}
          <div
            className={`bg-green p-9 ... overflow-y-auto max-h-[calc(100vh-100px)] ${
              sidebarCollapsed ? "w-[1285px]" : "w-[1095px]"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Column 1 */}
              <div className="space-y-6">
                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 hover:border-green-400 transition-colors"
                    placeholder="Enter company name"
                  />
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Web Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 hover:border-green-400 transition-colors"
                    placeholder="https://example.com"
                  />
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 hover:border-green-400 transition-colors"
                    placeholder="Enter phone number"
                  />
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 hover:border-green-400 transition-colors"
                    placeholder="company@example.com"
                  />
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-6">
                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded-md p-2 h-24 focus:ring-2 focus:ring-green-500 focus:border-green-500 hover:border-green-400 transition-colors"
                    placeholder="Enter full address"
                  />
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    C From No <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 hover:border-green-400 transition-colors"
                    placeholder="Enter C From number"
                  />
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    F From No <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 hover:border-green-400 transition-colors"
                    placeholder="Enter F From number"
                  />
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    W/F Deduction (%) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 hover:border-green-400 transition-colors"
                    placeholder="Enter deduction percentage"
                    min="0"
                    max="100"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-7 mt-13 pt-10 border-t border-gray-300">
              <button className="flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-5 rounded-md transition-colors">
                <FaSave className="mr-2" />
                Save
              </button>
              <button className="flex items-center bg-white hover:bg-green-100 text-green-600 font-bold py-2 px-4 rounded-md transition-colors border border-green-600">
                <FaEdit className="mr-2" />
                Edit
              </button>
              <button className="flex items-center bg-white hover:bg-green-100 text-green-600 font-bold py-2 px-4 rounded-md transition-colors border border-green-600">
                <FaTrashAlt className="mr-2" />
                Delete
              </button>
              <button className="flex items-center bg-white hover:bg-green-100 text-green-600 font-bold py-2 px-4 rounded-md transition-colors border border-green-600">
                <FaUndo className="mr-2" />
                Reset
              </button>
              <button className="flex items-center bg-white hover:bg-green-100 text-green-600 font-bold py-2 px-4 rounded-md transition-colors border border-green-600">
                <FaSignOutAlt className="mr-2" />
                Exit
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CompanyRegister;

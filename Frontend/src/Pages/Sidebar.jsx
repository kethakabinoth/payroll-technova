import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { SlCalender } from "react-icons/sl";
import { AiFillRobot } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaArrowsSpin } from "react-icons/fa6";
import { GiPieChart } from "react-icons/gi";
import { AiOutlineFund } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { MdAddHomeWork } from "react-icons/md";
import { MdBackup } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import icon from "../assets/icon.png"; // Proper import
import logo from "../assets/logoN.png"; // Proper import

const SidebarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeMenu, setActiveMenu] = useState("System Administrator");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .scrollbar-hide::-webkit-scrollbar { display: none; }
      .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      .compact-hover:hover { background: #2d8a4a !important; }
      .compact-hover-active { background: #2d8a4a !important; }
    `;
    document.head.appendChild(style);

    const timer = setInterval(() => setCurrentDate(new Date()), 60000);
    return () => {
      clearInterval(timer);
      document.head.removeChild(style);
    };
  }, []);

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
        navigate('/');
        break;
      case "Company Register":
        navigate('/company-register');
        break;
      case "Backup Database":
        navigate('/backup-database');
        break;
      case "Remove Dayend Process":
        navigate('/remove-dayend');
        break;
      case "Registration":
        navigate('/registration');
        break;
      case "Process":
        navigate('/process');
        break;
      case "Deduction":
        navigate('/deduction');
        break;
      case "Report":
        navigate('/report');
        break;
      default:
        console.warn(`No route defined for: ${menuName}`);
    }
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
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

      {/* Main Content Area */}
      <main
        className={`absolute bg-white rounded-xl shadow-md p-8 transition-all duration-300 ${
          sidebarCollapsed ? "left-[120px]" : "left-[352px]"
        } top-[123px] right-[27px] bottom-[25px] scrollbar-hide overflow-auto`}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          {activeMenu}
        </h2>
      </main>

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
            <img 
              src={icon} 
              alt="Logo" 
              className="w-10 h-10" 
            />
            {!sidebarCollapsed && (
              <img
                src={logo}
                alt="LogoN"
                className="w-[80px] h-[80px] ml-10"
              />
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
                <span className="text-md font-medium ml-2">
                  {item.name}
                </span>
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
    </div>
  );
};

export default SidebarPage;
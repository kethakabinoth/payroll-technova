import React, { useState, useEffect } from "react";
import { SlCalender } from "react-icons/sl";
import icon from "../assets/icon.png";
import Ellipse from "../assets/Ellipse 19.png";
import { AiFillRobot } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaArrowsSpin } from "react-icons/fa6";
import { GiPieChart } from "react-icons/gi";
import { AiOutlineFund } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { MdAddHomeWork } from "react-icons/md";
import { MdBackup } from "react-icons/md";
import { GiCancel } from "react-icons/gi";

const SidebarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeMenu, setActiveMenu] = useState("System Administrator");
  const [expandedMenu, setExpandedMenu] = useState(null);

  useEffect(() => {
    // Add scrollbar-hide styles dynamically
    const style = document.createElement('style');
    style.textContent = `
      .scrollbar-hide::-webkit-scrollbar { display: none; }
      .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      .compact-hover:hover { background: #2d8a4a !important; }
      .compact-hover-active { background: #2d8a4a !important; }
    `;
    document.head.appendChild(style);
    
    const timer = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => {
      clearInterval(timer);
      document.head.removeChild(style);
    };
  }, []);

  const formatDate = (date) => date.toLocaleString("en-US", {
    day: "numeric", weekday: "long", year: "numeric", month: "long"
  });

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    setExpandedMenu(expandedMenu === menuName ? null : menuName);
  };

  const mainMenuItems = [
    { name: "Company Register", icon: <MdAddHomeWork size={25} />},
    { name: "Backup Database", icon: <MdBackup size={25} />},
    { name: "Remove Dayend Process", icon: <GiCancel  size={25} />}
  ];

  const secondaryMenuItems = [
    { name: "System Administrator", icon: <AiFillRobot size={25} /> },
    { name: "Registration", icon: <AiOutlineUserAdd size={25} style={{ strokeWidth: "20" }} /> },
    { name: "Process", icon: <FaArrowsSpin size={25} /> },
    { name: "Deduction", icon: <GiPieChart size={25} /> },
    { name: "Report", icon: <AiOutlineFund size={25} style={{ strokeWidth: "20" }} /> }
  ];

  return (
    <div className="relative w-[1509px] h-[1024px] bg-gray-100">
      {/* Header Section */}
      <header className="absolute top-[34px] left-0 right-0 flex justify-between items-center px-6">
        <h1 className="text-3xl font-semibold text-gray-800 ml-[320px] font-['Inter']">
          System Administrator
        </h1>
        <div className="flex items-center mr-[42px] gap-3">
          <SlCalender className="text-gray-500 text-2xl" />
          <span className="text-xl font-bold text-gray-600 font-[inter]" >
            {formatDate(currentDate)}
          </span>
          <img src={Ellipse} alt="Profile" className="w-17 h-17 rounded-full border-2 border-white" />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="absolute left-[352px] top-[123px] right-[27px] bottom-[25px] bg-white rounded-xl shadow-md p-8 scrollbar-hide">
        
      </main>

      {/* Sidebar Navigation */}
      <nav className="absolute left-[21px] top-[25px] bottom-[21px] w-[298px] bg-[#1b7132] rounded-[22px] flex flex-col scrollbar-hide">

        {/* Logo Section */}
        <div className=" p-4 border-b border-white border-opacity-20">
          <img src={icon} alt="Logo" className="w-10 h-10" />
        </div>

        {/* Main Menu - Compact Hover */}
        <div className="flex-1 py-2 ">
          {mainMenuItems.map((item) => (
            <div key={item.name} className="mb-0.5 mx-2">
              <button
                onClick={() => handleMenuClick(item.name)}
                className={`w-full flex items-center p-2 pl-3 rounded-md transition-all duration-150
                  ${activeMenu === item.name ? 'compact-hover-active' : 'compact-hover'}`}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 mr-2">
                  {item.icon}
                </div>
                <span className="text-white text-sm font-medium">{item.name}</span>
              </button>
              
              {expandedMenu === item.name && item.subItems && (
                <div className="ml-10 mt-0.5 space-y-0.5">
                  {item.subItems.map((subItem) => (
                    <button
                      key={subItem}
                      className="w-full text-left p-1.5 pl-3 text-white rounded hover:bg-[#2d8a4a] text-xs"
                    >
                      {subItem}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-20 mx-3"></div>

        {/* Secondary Menu - Compact */}
        <div className="py-2">
          {secondaryMenuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleMenuClick(item.name)}
              className={`w-full flex items-center p-2 pl-3 rounded-md mx-1 mb-0.5 transition-all duration-150
                ${activeMenu === item.name 
                  ? 'bg-[#e8f5e9] text-[#1b7132]' 
                  : 'hover:bg-[#80c780] text-white'}`}
            >
              <div className={`flex items-center justify-center w-8 h-8 rounded-full mr-2
                ${activeMenu === item.name ? 'bg-[#1b7132]' : 'bg-gray-100'}`}>
                {React.cloneElement(item.icon, { 
                  color: activeMenu === item.name ? '#ffffff' : '#000000',
                  size: 20,
                })}
              </div>
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          ))}
        </div>

        {/* Compact Logout Button */}
        <div className="p-3 border-t border-white border-opacity-20">
          <button className=" w-full flex items-center justify-center py-2 px-3 bg-[#FDFDFD]  text-[#1b7132] rounded-lg text-sm font-semibold
            hover:bg-gray-200 transition-colors duration-150">
            <MdLogout size={35} className="mr-1.5" />
            LOGOUT
          </button>
        </div>
      </nav>
    </div>
  );
};

export default SidebarPage;
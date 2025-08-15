import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
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
import { BsCalendarEvent } from "react-icons/bs";
import { HiOfficeBuilding } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdSchedule } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { MdAccountBalance } from "react-icons/md";
import { MdAssessment } from "react-icons/md";
import { MdMoneyOff } from "react-icons/md";
import { MdAssignment } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";
import icon from "../assets/icon.png";
import logo from "../assets/logoN.png";

const Sidebar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeMenu, setActiveMenu] = useState("System Administrator");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentMode, setCurrentMode] = useState("default"); // default, registration, process, deduction, report
  const [hoveredSecondaryMenu, setHoveredSecondaryMenu] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

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

  // Set initial mode based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('annual-payable-holidays') || path.includes('new-department') || 
        path.includes('new-designation') || path.includes('employee-master')) {
      setCurrentMode("registration");
    } else if (path.includes('day-end-process') || path.includes('attendance-entry-confirmation') || 
               path.includes('salary-process') || path.includes('loan-entry')) {
      setCurrentMode("process");
    } else if (path.includes('salary-advance') || path.includes('leave-form') || 
               path.includes('loan-deduction')) {
      setCurrentMode("deduction");
    } else if (
      path.includes('attendance-report') ||
      path.includes('list-of-employee') ||
      path.includes('salary-statement') ||
      path.includes('salary-particulars') ||
      path.includes('c-form') ||
      path.includes('etf-statement') ||
      path.includes('ot-statement') ||
      path.includes('print-payslip')
    ) {
      setCurrentMode("report");
    } else {
      setCurrentMode("default");
    }
  }, [location.pathname]);

  const formatDate = (date) =>
    date.toLocaleString("en-US", {
      day: "numeric",
      weekday: "short",
      year: "numeric",
      month: "long",
    });

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    
    // Handle secondary menu items (mode toggles)
    if (menuName === "System Administrator") {
      setCurrentMode("default");
      navigate('/');
      return;
    }

    if (menuName === "Registration") {
      setCurrentMode("registration");
      navigate('/annual-payable-holidays');
      return;
    }

    if (menuName === "Process") {
      setCurrentMode("process");
      navigate('/day-end-process');
      return;
    }

    if (menuName === "Deduction") {
      setCurrentMode("deduction");
      navigate('/salary-advance');
      return;
    }

    if (menuName === "Report") {
      setCurrentMode("report");
      navigate('/attendance-report');
      return;
    }

    // Handle navigation based on menu name
    switch(menuName) {
      case "Company Register":
        navigate('/company-register');
        setCurrentMode("default");
        break;
      case "Backup Database":
        navigate('/backup-database');
        setCurrentMode("default");
        break;
      case "Remove Dayend Process":
        navigate('/remove-dayend-process');
        setCurrentMode("default");
        break;
      case "Annual Payable Holidays":
        navigate('/annual-payable-holidays');
        break;
      case "New Department":
        navigate('/new-department');
        break;
      case "New Designation":
        navigate('/new-designation');
        break;
      case "Employee Master":
        navigate('/employee-master');
        break;
      case "Day End Process":
        navigate('/day-end-process');
        break;
      case "Attendance Entry Confirmation":
        navigate('/attendance-entry-confirmation');
        break;
      case "Salary Process":
        navigate('/salary-process');
        break;
      case "Loan Entry":
        navigate('/loan-entry');
        break;
      case "Salary Advance":
        navigate('/salary-advance');
        break;
      case "Leave Form":
        navigate('/leave-form');
        break;
      case "Loan Deduction":
        navigate('/loan-deduction');
        break;
      case "Attendance Report":
        navigate('/attendance-report');
        break;
      case "List of Employee":
        navigate('/list-of-employee');
        break;
      case "Salary Statement":
        navigate('/salary-statement');
        break;
      case "Salary Particulars":
        navigate('/salary-particulars');
        break;
      case "C Form":
        navigate('/c-form');
        break;
      case "ETF Statement":
        navigate('/etf-statement');
        break;
      case "OT Statement":
        navigate('/ot-statement');
        break;
      case "Print Payslip":
        navigate('/print-payslip');
        break;
      default:
        console.warn(`No route defined for: ${menuName}`);
    }
  };

  const handleLogout = () => {
    navigate('/signin');
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  // Dynamic main menu items based on mode
  const getMainMenuItems = () => {
    switch (currentMode) {
      case "registration":
        return [
          { name: "Annual Payable Holidays", icon: <BsCalendarEvent size={20} /> },
          { name: "New Department", icon: <HiOfficeBuilding size={20} /> },
          { name: "New Designation", icon: <MdWork size={20} /> },
          { name: "Employee Master", icon: <FaUsers size={20} /> },
        ];
      case "process":
        return [
          { name: "Day End Process", icon: <MdSchedule size={20} /> },
          { name: "Attendance Entry Confirmation", icon: <MdEvent size={20} /> },
          { name: "Salary Process", icon: <MdAttachMoney size={20} /> },
          { name: "Loan Entry", icon: <MdAccountBalance size={20} /> },
        ];
      case "deduction":
        return [
          { name: "Salary Advance", icon: <MdMoneyOff size={20} /> },
          { name: "Leave Form", icon: <MdAssignment size={20} /> },
          { name: "Loan Deduction", icon: <MdAccountBalanceWallet size={20} /> },
        ];
      case "report":
        return [
          { name: "Attendance Report", icon: <MdAssessment size={20} /> },
          { name: "List of Employee", icon: <FaUsers size={20} /> },
          { name: "Salary Statement", icon: <MdAttachMoney size={20} /> },
          { name: "Salary Particulars", icon: <MdAssignment size={20} /> },
          { name: "C Form", icon: <GiCancel size={20} /> },
          { name: "ETF Statement", icon: <MdAccountBalance size={20} /> },
          { name: "OT Statement", icon: <MdSchedule size={20} /> },
          { name: "Print Payslip", icon: <MdAssessment size={20} /> },
        ];
      default:
        return [
          { name: "Company Register", icon: <MdAddHomeWork size={20} /> },
          { name: "Backup Database", icon: <MdBackup size={20} /> },
          { name: "Remove Dayend Process", icon: <GiCancel size={20} /> },
        ];
    }
  };

  const secondaryMenuItems = [
    { name: "System Administrator", icon: <AiFillRobot size={20} /> },
    { name: "Registration", icon: <AiOutlineUserAdd size={20} style={{ strokeWidth: "20" }} /> },
    { name: "Process", icon: <FaArrowsSpin size={20} /> },
    { name: "Deduction", icon: <GiPieChart size={20} /> },
    { name: "Report", icon: <AiOutlineFund size={20} style={{ strokeWidth: "20" }} /> },
  ];

  const mainMenuItems = getMainMenuItems();

  return (
    <div className="relative w-full h-screen bg-gray-100">
      {/* Header Section */}
      <header className="absolute top-[34px] left-0 right-0 flex justify-between items-center px-6 z-10">
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
        <Outlet />
      </main>

      {/* Sidebar Navigation */}
      <nav
        className={`absolute left-[21px] top-[25px] bottom-[21px] bg-[#1b7132] rounded-[22px] flex flex-col transition-all duration-300 ${
          sidebarCollapsed ? "w-[80px]" : "w-[298px]"
        } scrollbar-hide z-20`}
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
            <div
              key={item.name}
              onMouseEnter={() => setHoveredSecondaryMenu(item.name)}
              onMouseLeave={() => setHoveredSecondaryMenu(null)}
              className="relative"
            >
              <button
                onClick={() => handleMenuClick(item.name)}
                className={`flex items-center w-full ${
                  sidebarCollapsed ? "justify-center px-0" : "pl-3"
                } py-1.5 rounded-md mx-0 mb-0.5 transition-all duration-150 ${
                  activeMenu === item.name || 
                  (item.name === "Registration" && currentMode === "registration") ||
                  (item.name === "Process" && currentMode === "process") ||
                  (item.name === "Deduction" && currentMode === "deduction") ||
                  (item.name === "Report" && currentMode === "report") ||
                  (item.name === "System Administrator" && currentMode === "default")
                    ? "bg-[#e8f5e9] text-[#1b7132]"
                    : "hover:bg-[#80c780] text-white"
                }`}
              >
                <div
                  className={`flex items-center justify-center ${
                    sidebarCollapsed ? "w-8 h-8" : "w-10 h-10"
                  } rounded-full ${
                    activeMenu === item.name || 
                    (item.name === "Registration" && currentMode === "registration") ||
                    (item.name === "Process" && currentMode === "process") ||
                    (item.name === "Deduction" && currentMode === "deduction") ||
                    (item.name === "Report" && currentMode === "report") ||
                    (item.name === "System Administrator" && currentMode === "default") ? "bg-[#1b7132]" : "bg-gray-100"
                  }`}
                >
                  {React.cloneElement(item.icon, {
                    color: activeMenu === item.name || 
                           (item.name === "Registration" && currentMode === "registration") ||
                           (item.name === "Process" && currentMode === "process") ||
                           (item.name === "Deduction" && currentMode === "deduction") ||
                           (item.name === "Report" && currentMode === "report") ||
                           (item.name === "System Administrator" && currentMode === "default") ? "#ffffff" : "#000000",
                    size: 28,
                  })}
                </div>
                {!sidebarCollapsed && (
                  <span className="text-md font-medium ml-2">
                    {item.name}
                  </span>
                )}
              </button>

              {/* Hover Menu */}
              {hoveredSecondaryMenu === item.name && !sidebarCollapsed && (
                <div className="absolute left-full top-0 ml-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 min-w-[200px]">
                  {item.name === "System Administrator" && (
                    <div className="p-2">
                      <div className="text-sm font-medium text-gray-700 mb-2">System Administrator Menu:</div>
                      <div className="space-y-1">
                        <div className="text-xs text-gray-600 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">• Company Register</div>
                        <div className="text-xs text-gray-600 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">• Backup Database</div>
                        <div className="text-xs text-gray-600 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">• Remove Dayend Process</div>
                      </div>
                    </div>
                  )}
                  {item.name === "Registration" && (
                    <div className="p-2">
                      <div className="text-sm font-medium text-gray-700 mb-2">Registration Menu:</div>
                      <div className="space-y-1">
                        <div className="text-xs text-gray-600 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">• Annual Payable Holidays</div>
                        <div className="text-xs text-gray-600 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">• New Department</div>
                        <div className="text-xs text-gray-600 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">• New Designation</div>
                        <div className="text-xs text-gray-600 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">• Employee Master</div>
                      </div>
                    </div>
                  )}
                  {item.name === "Process" && (
                    <div className="p-2">
                      <div className="text-sm font-medium text-gray-700 mb-2">Process Menu:</div>
                      <div className="space-y-1">
                        <div className="text-xs text-gray-600 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">• Day End Process</div>
                        <div className="text-xs text-gray-600 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">• Attendance Entry Confirmation</div>
                        <div className="text-xs text-gray-600 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">• Salary Process</div>
                        <div className="text-xs text-gray-600 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">• Loan Entry</div>
                      </div>
                    </div>
                  )}
                  {item.name === "Deduction" && (
                    <div className="p-2">
                      <div className="text-sm font-medium text-gray-700 mb-2">Deduction Menu:</div>
                      <div className="space-y-1">
                        <div className="text-xs text-gray-600 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">• Salary Advance</div>
                        <div className="text-xs text-gray-600 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">• Leave Form</div>
                        <div className="text-xs text-gray-600 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">• Loan Deduction</div>
                      </div>
                    </div>
                  )}
                  {item.name === "Report" && (
                    <div className="p-2">
                      <div className="text-sm font-medium text-gray-700 mb-2">Report Menu:</div>
                      <div className="space-y-1">
                        <div className="text-xs text-gray-600 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">• Attendance Report</div>
                        <div className="text-xs text-gray-600 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">• List of Employee</div>
                        <div className="text-xs text-gray-600 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">• Salary Statement</div>
                        <div className="text-xs text-gray-600 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">• Salary Particulars</div>
                        <div className="text-xs text-gray-600 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">• C Form</div>
                        <div className="text-xs text-gray-600 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">• ETF Statement</div>
                        <div className="text-xs text-gray-600 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">• OT Statement</div>
                        <div className="text-xs text-gray-600 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">• Print Payslip</div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Logout Button */}
        <div className="p-3 border-t border-white border-opacity-20">
          <button
            onClick={handleLogout}
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

export default Sidebar;
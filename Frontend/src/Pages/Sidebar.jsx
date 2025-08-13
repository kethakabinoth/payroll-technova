import React, { useState, useEffect } from 'react';
import { SlCalender } from 'react-icons/sl';
import icon from '../assets/icon.png'; // Update the import path as needed
import Ellipse from '../assets/Ellipse 19.png'; // Update the import path as needed
import { AiFillRobot } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaArrowsSpin } from "react-icons/fa6";
import { GiPieChart } from "react-icons/gi";
import { AiOutlineFund } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { MdAddHomeWork } from "react-icons/md";
import { MdBackup } from "react-icons/md";




const SidebarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleString('en-US', {
      day: 'numeric',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      
      
    });
  };

  return (
    <div className="relative w-[1509px] h-[1024px] bg-gray-100">
      <div className="absolute left-[352px] top-[123px] right-[27px] bottom-[25px] bg-white rounded-xl shadow-sm p-6">
      </div>
      
      {/* Date and Time */}
      <div className="absolute right-[42px] top-[34px] flex items-center">
        <SlCalender className="text-green-800 mr-3 text-[26px]" />
        <span className="text-[26px] font-medium font-['Inter'] text-gray-500">
          {formatDate(currentDate)}

          {/* logged admin profile*/}
        </span>
        <img
          src={Ellipse}
          alt="Ellipse"
          className="ml-4 w-15 h-15 object-contain"
        />
      </div>
      <div className="flex w-full h-full">
        {/* Sidebar with rounded corners and proper positioning */}
        <div 
          className="absolute left-[21px] top-[25px] bottom-[21px] w-[298px] bg-[#1b7132] rounded-[22px]"
          style={{
            borderRadius: '22px',
          }}
        >
            {/* Icon positioned */}
          <div className="absolute left-[13px] top-[22px]">
            <img
              src={icon}
              alt="Sidebar Icon"
              className="w-[40px] h-[40px] object-contain"
            />
          </div>

          {/* Horizontal line for break section */}
          <hr
          className="absolute border-t border-gray-300"
          style={{ top: '70px', left: '13px', right: '13px', width: 'auto' }}
          />

          {/* Horizontal line for break section */}
          <hr
          className="absolute border-t border-gray-300"
          style={{ top: '601px', left: '13px', right: '13px', width: 'auto' }}
          />

          {/* Menu sub1 positioned */}
          <div
            className="absolute flex items-center"
            style={{
              top: '116px',
              left: '15px',
              width: 'auto',
              height: '45px',
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                backgroundColor: '#D9D9D9',
              }}
            >
              <MdAddHomeWork size={32} color="#000000"  />
            </div>
            <span className="ml-3 text-white text-lg font-regular">Company Register</span>
          </div>

          {/* Menu sub2 positioned */}
          <div
            className="absolute flex items-center"
            style={{
              top: '175px',
              left: '15px',
              width: 'auto',
              height: '45px',
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                backgroundColor: '#D9D9D9',
              }}
            >
              <MdBackup  size={32} color="#000000"  />
            </div>
            <span className="ml-3 text-white text-lg font-regular">Backup Database</span>
          </div>

          {/* Menu logo positioned */}
          <div
            className="absolute flex items-center"
            style={{
              top: '614px',
              left: '15px',
              width: 'auto',
              height: '45px',
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                backgroundColor: '#D9D9D9',
              }}
            >
              <AiFillRobot size={32} color="#000000" />
            </div>
            <span className="ml-3 text-white text-lg font-regular">System Administrator</span>
          </div>

           {/* Menu logo2 positioned */}
          <div
            className="absolute flex items-center"
            style={{
              top: '673px',
              left: '15px',
              width: 'auto',
              height: '45px',
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                backgroundColor: '#D9D9D9',
              }}
            >
              <AiOutlineUserAdd size={32} color="#000000" style={{ strokeWidth: "20" }} />
            </div>
            <span className="ml-3 text-white text-lg font-regular">Registration</span>
          </div>

           {/* Menu logo3 positioned */}
          <div
            className="absolute flex items-center"
            style={{
              top: '735px',
              left: '15px',
              width: 'auto',
              height: '45px',
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                backgroundColor: '#D9D9D9',
              }}
            >
              <FaArrowsSpin   size={32} color="#000000" />
            </div>
            <span className="ml-3 text-white text-lg font-regular">Process</span>
          </div>

           {/* Menu logo4 positioned */}
          <div
            className="absolute flex items-center"
            style={{
              top: '795px',
              left: '15px',
              width: 'auto',
              height: '45px',
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                backgroundColor: '#D9D9D9',
              }}
            >
              <GiPieChart   size={32} color="#000000" />
            </div>
            <span className="ml-3 text-white text-lg font-regular">Deduction</span>
          </div>

           {/* Menu logo5 positioned */}
          <div
            className="absolute flex items-center"
            style={{
              top: '855px',
              left: '15px',
              width: 'auto',
              height: '45px',
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                backgroundColor: '#D9D9D9',
              }}
            >
              <AiOutlineFund size={32} color="#000000" style={{ strokeWidth: "20" }} />
            </div>
            <span className="ml-3 text-white text-lg font-regular">Report</span>
          </div>

          {/* Horizontal line for break section */}
          <hr
          className="absolute border-t border-gray-300"
          style={{ top: '910px', left: '13px', right: '13px', width: 'auto' }}
          />


          {/* Logout button bottom*/}
          <div
            className="absolute flex items-center justify-center"
            style={{
              top: '920px',
              left: '13px',
              right: '13px',
              height: '40px', // Decreased button height
            }}
          >
            <button
              className="flex flex-col items-center justify-center w-full h-full rounded-lg shadow px-2 py-1"
              style={{
                backgroundColor: '#e5e5e5', // fade ash
                border: '2px solid #fff',   // white border
                color: '#1b7132',
                fontSize: '16px',
              }}
            >
              <div className="flex items-center justify-center">
                <MdLogout size={22} className="mr-2" />
                <span className="text-base font-semibold">Logout</span>
              </div>
            </button>
          </div>

          {/* Sidebar content can be added here */}
        </div>
        <div className="flex-1 p-6 ml-[320px]"> {/* Added margin to account for sidebar */}
          {/* Main content area */}
          <h1 className="text-2xl font-bold text-green-800">Main Content</h1>
          <p className="mt-4 text-gray-700">This is the main content area. Add your components here.</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarPage;
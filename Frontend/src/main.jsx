import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Pages/SignUp.jsx';
import SignIn from './Pages/SignIn.jsx';
import Layout from './components/Layout.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import CompanyRegister from './Pages/CompanyRegister.jsx';
import BackupDatabase from './Pages/BackupDatabase.jsx';
import RemoveDayEndProcess from './Pages/RemoveDayEndProcess.jsx';
import AnnualPayableHolidays from './Pages/AnnualPayableHolidays.jsx';
import NewDepartment from './Pages/NewDepartment.jsx';
import NewDesignation from './Pages/NewDesignation.jsx';
import EmployeeMaster from './Pages/EmployeeMaster.jsx';
import DayEndProcess from './Pages/DayEndProcess.jsx';
import AttendanceEntryConfirmation from './Pages/AttendanceEntryConfirmation.jsx';
import SalaryProcess from './Pages/SalaryProcess.jsx';
import LoanEntry from './Pages/LoanEntry.jsx';
import SalaryAdvance from './Pages/SalaryAdvance.jsx';
import LeaveForm from './Pages/LeaveForm.jsx';
import LoanDeduction from './Pages/LoanDeduction.jsx';
import AttendanceReport from './Pages/AttendanceReport.jsx';
import ListOfEmployee from './Pages/ListOfEmployee.jsx';
import SalaryStatement from './Pages/SalaryStatement.jsx';
import SalaryParticulars from './Pages/SalaryParticulars.jsx';
import CForm from './Pages/CForm.jsx';
import ETFStatement from './Pages/ETFStatement.jsx';
import OTStatement from './Pages/OTStatement.jsx';
import PrintPayslip from './Pages/PrintPayslip.jsx';
import Sidebar from './components/Sidebar.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="sidebar" element={<Sidebar />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="company-register" element={<CompanyRegister />} />
            <Route path="backup-database" element={<BackupDatabase />} />
            <Route path="remove-dayend-process" element={<RemoveDayEndProcess />} />
            <Route path="annual-payable-holidays" element={<AnnualPayableHolidays />} />
            <Route path="new-department" element={<NewDepartment />} />
            <Route path="new-designation" element={<NewDesignation />} />
            <Route path="employee-master" element={<EmployeeMaster />} />
            <Route path="day-end-process" element={<DayEndProcess />} />
            <Route path="attendance-entry-confirmation" element={<AttendanceEntryConfirmation />} />
            <Route path="salary-process" element={<SalaryProcess />} />
            <Route path="loan-entry" element={<LoanEntry />} />
            <Route path="salary-advance" element={<SalaryAdvance />} />
            <Route path="leave-form" element={<LeaveForm />} />
            <Route path="loan-deduction" element={<LoanDeduction />} />
            <Route path="attendance-report" element={<AttendanceReport />} />
            <Route path="list-of-employee" element={<ListOfEmployee />} />
            <Route path="salary-statement" element={<SalaryStatement />} />
            <Route path="salary-particulars" element={<SalaryParticulars />} />
            <Route path="c-form" element={<CForm />} />
            <Route path="etf-statement" element={<ETFStatement />} />
            <Route path="ot-statement" element={<OTStatement />} />
            <Route path="print-payslip" element={<PrintPayslip />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
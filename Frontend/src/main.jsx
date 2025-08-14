import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import SignUp from './Pages/Signup.jsx';
import SignIn from './Pages/Signin.jsx';
import SidebarPage from './Pages/Sidebar.jsx';
import CompanyRegister from './Pages/CompanyRegister.jsx';
import BackupDatabase from './Pages/BackupDatabase.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/sidebar" element={<SidebarPage />} />
    <Route path="/company-register" element={<CompanyRegister />} />
    <Route path="/backup-database" element={<BackupDatabase />} />
    
  </Routes>
  </BrowserRouter>
);
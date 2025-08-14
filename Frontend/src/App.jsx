import React from 'react'
import SignIn from './Pages/Signin'
import SignUp from './Pages/Signup'
import SidebarPage from './Pages/Sidebar'
import CompanyRegister from './Pages/CompanyRegister'
import BackupDatabase from './Pages/BackupDatabase'

function App() {
  return (
    <div>
      <SignIn />
      <SignUp/>
      <SidebarPage/>
      <CompanyRegister />
      <BackupDatabase />
      
    </div>
  )
}

export default App

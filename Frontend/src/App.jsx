import React from 'react'
import SignIn from './Pages/Signin'
import SignUp from './Pages/Signup'
import SidebarPage from './Pages/Sidebar'
import CompanyRegister from './Pages/CompanyRegister'
import BackupDatabase from './Pages/BackupDatabase'
import RemoveDayEndProcess from './Pages/RemoveDayEndProcess'
import Sidebar2 from './Pages/Sidebar2'

function App() {
  return (
    <div>
      <SignIn />
      <SignUp/>
      <SidebarPage/>
      <CompanyRegister />
      <BackupDatabase />
      <RemoveDayEndProcess/>
      <Sidebar2/>
      
    </div>
  )
}

export default App

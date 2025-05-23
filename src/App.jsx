
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Videos from './Pages/VIdeos/Videos'
import React, { useState } from 'react';


const App = () => {
  
  const [sidebar,setSideBar] = useState(true);

  return (
    <div>
      <Navbar setSideBar={setSideBar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Videos/>}/>
      
      </Routes>
    </div>
  )
}

export default App
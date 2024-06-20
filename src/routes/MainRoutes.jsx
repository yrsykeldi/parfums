import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Mainlayout from '../layout/Mainlayout'
import HomePage from '../pages/HomePage'

function MainRoutes() {
  const currentTheme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(currentTheme ? currentTheme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);
  
  return (
    <Routes>
        <Route element={<Mainlayout setTheme={setTheme} theme={theme}/>}>
            <Route path='/' element={<HomePage theme={theme}/>}/>
        </Route>
    </Routes>
  )
}

export default MainRoutes
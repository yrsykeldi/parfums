import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle';
import "../styles/main.css"

function Mainlayout({theme, setTheme}) {

  return (
    <div className={`container ${theme}`}>
        <div className={theme === "light" ? 'section-1' : 'section-2'}>
            <Navbar theme={theme} setTheme={setTheme}/>
            <SectionTitle theme={theme} />
        </div>
        <Outlet/>
    </div>
  )
}

export default Mainlayout
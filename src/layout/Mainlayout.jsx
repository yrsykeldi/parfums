import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle';
import "../styles/main.css"

function Mainlayout({theme, setTheme}) {

  return (
    <div className={`container ${theme}`}>
        <div className={theme === "light" ? 'section-1' : 'section-2'}>
            <Navbar theme={theme} setTheme={setTheme}/>
            <div className='detaile-slider__cards'>
              <SectionTitle theme={theme} />
            </div>
        </div>
        <Outlet/>
        <div className='footer-title'>
          <Footer />
        </div>
    </div>
  )
}

export default Mainlayout
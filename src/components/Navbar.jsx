import React from 'react'
import '../styles/Navbar.css'
import logo_light from '../../src/assets/PARFUM-Black.png'
import logo_dark from '../../src/assets/PARFUM-White.png'
import search_icon_light from '../../src/assets/search-w.png'
import search_icon_dark from '../../src/assets/search-b.png'
import toogle_light from '../../src/assets/night.png'
import toogle_dark from '../../src/assets/day.png'

const Navbar = ({theme, setTheme}) => {

  const toogle_mod = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    
    <div className='navbar'>
      <div className='navbar-item'>

          <img  onClick={() => {toogle_mod()}} src={theme == 'light' ? toogle_light : toogle_dark} alt='' className='toggle-icon'/>

          <ul>
              <li>SHOP</li>
              <li>ABOUT</li>
          </ul>

          <img src={theme == 'light' ? logo_light : logo_dark} alt='' className='logo'/>

          <ul>
              <li>BLOG</li>
              <li>CONTACT</li>
          </ul>

          <div className='search-box'>
              <input type='text' placeholder='Search'/>
              <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt=''/>
          </div>

      </div>
    </div>
  ) 
}

export default Navbar
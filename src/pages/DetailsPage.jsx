import React from 'react'
import "../styles/main.css"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import detalImg from '../assets/Product.jpg'
import detalImg2 from '../assets/Product2.jpg'
import SliderDatailsePaga from '../components/SliderDatailsPage'


const DetailsPage = ({theme, setTheme}) => {

    return (
        <div className={`container ${theme}`}>
        <div>
            <Navbar theme={theme} setTheme={setTheme}/>
            <SliderDatailsePaga />
        </div>
        <div className='footer-title'>
          <Footer />
        </div>
    </div>
    )
}

export default DetailsPage
import React from 'react'
import '../styles/Footer.css'
import flowersCard from '../assets/svg/iconoir_flower medium (2).svg'
import parfumeCard from '../assets/svg/PARFUM.svg'


function Footer() {
  return (
    <div className='footer'>
      <div className='footer-group'>
        <div className="footer-verificad">
          <img src={flowersCard} alt="" />
          <h2 className='footer-verificad__text'>We send <em>great</em> emails.</h2>
          <div className='footer-verificad__emaile'>
            <input className='footer-verificad__inp' type="text" placeholder='Enter your name'/>
              <a href="">
                <button className='footer-verificad__button'>subscribe</button>
              </a>
          </div>
        </div>
        <div className='footer-linkes'>
          <div className='company'>
            <h3><em>Company</em></h3>
            <a href="#Shop">Shop</a>
            <a href="#About">About</a>
            <a href="#Blog">Blog</a>
            <a href="#Contact">Contact</a>
            <a href="#T&C">T&C</a>
          </div>
          <div className='cocial'>
            <h3><em>Social</em></h3>
            <a href="#Tiktok">Tiktok</a>
            <a href="#Instagram">Instagram</a>
            <a href="#Facebook">Facebook</a>
            <a href="#Youtube">Youtube</a>
          </div>
          <div className='theme'>
            <h3><em>Theme</em></h3>  
            <a href="#Style Guide">Style Guide</a>
            <a href="#Changelog">Changelog</a>
            <a href="#Licenses">Licenses</a>
            <a href="#Contact">Contact</a>
            <a href="#All Templates">All Templates</a>
          </div>
        </div>
      </div>

      <div className="parfume-svg">
        <img src={parfumeCard} alt="" />
      </div>
      <div className='footer-end'>
        <p className='footer-end__powered'>Powered by Webflow.</p>
        <p className='footer-end__website'>Website template by Callisto Digital Studio.</p>
      </div>
    </div>
  )
}

export default Footer
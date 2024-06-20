import React, { useState } from 'react';
import '../styles/Brands.css';
import svg from '../assets/svg/flow.svg';
import svgBlak from '../assets/svg/svgblak/flow.svg';
import svgNino from '../assets/svg/NINO.svg';
import svgNinoBlak from '../assets/svg/svgblak/NINO.svg';
import svgInTrend from '../assets/svg/InTrend.svg';
import svgInTrendBlak from '../assets/svg/svgblak/InTrend.svg';
import svgJune from '../assets/svg/JUNE.svg';
import svgJuneBlak from '../assets/svg/svgblak/JUNE.svg';
import svgZine from '../assets/svg/ZINE.svg';
import svgZineBlak from '../assets/svg/svgblak/ZINE.svg';
import svgMax from '../assets/svg/MAX.svg';
import svgMaxBlak from '../assets/svg/svgblak/MAX.svg';

function Brands({ theme }) {
  const isDarkTheme = theme === "dark";

  const containerTextStyle = {
      color: isDarkTheme ? "white" : "black"
  };

  return (
    <div className='brands'>

        <h2 className={`brands-title ${theme ? 'text-dark' : ''}`} style={containerTextStyle}>AS SEEN IN</h2>

        <div className='barnds-parfumes'>
            <a href="https://google.com" target='_blank'>
              <img src={theme === 'dark' ? svgBlak : svg} />
            </a>
            <a href="https://google.com" target='_blank'>
              <img src={theme === 'dark' ? svgNinoBlak : svgNino} />
            </a>
            <a href="https://google.com" target='_blank'>
              <img src={theme === 'dark' ? svgInTrendBlak : svgInTrend} />
            </a>
            <a href="https://google.com" target='_blank'>
              <img src={theme === 'dark' ? svgJuneBlak : svgJune} />
            </a>
            <a href="https://google.com" target='_blank'>
              <img src={theme === 'dark' ? svgZineBlak : svgZine} />
            </a>
            <a href="https://google.com" target='_blank'>
              <img src={theme === 'dark' ? svgMaxBlak : svgMax} />
            </a>
        </div>
    </div>
  )
}

export default Brands;

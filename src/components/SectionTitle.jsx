import React from 'react';
import '../styles/SectionTitle.css';

function SectionTitle({ theme }) {
    const isDarkTheme = theme === "dark";

    const containerTextStyle = {
        color: isDarkTheme ? "black" : "white"
    };

    const buttonStyle = {
        backgroundColor: isDarkTheme ? "black" : "white",
        color: isDarkTheme ? "white" : "black"
    };

    return (
        <div className='header-container'>
            <div className={`header-container-text ${isDarkTheme ? 'text-dark' : ''}`} style={containerTextStyle}>Elevate everyday moments to extraordinary.</div>
            <button className={`header-container__button-shop`} style={buttonStyle}>SHOP OUR FRAGRANCE</button>
        </div>
    );
}

export default SectionTitle;




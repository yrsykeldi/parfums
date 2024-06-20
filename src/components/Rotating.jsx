import React from 'react';
import '../styles/Rotating.css';
import svgFlower from '../assets/svg/flowerMedium.svg';

function RotatingDiv() {
    return (
        <div className='rotating-div'>
            <div className='rotating-div__info'>
                <p className='rotating-div__info-text_1'>Created for everyone</p>
                <p className='rotating-div__info-text_2'>everyone.</p>
            </div>
            <div className='rotating-div__img'>
                <img src={svgFlower} alt="Icon" className='rotating-div__img' />
            </div>
            <div className='rotating-div__info'>
                <p className='rotating-div__info-text_1'>Created for everyone</p>
                <p className='rotating-div__info-text_2'>everyone.</p>
            </div>
            <div className='rotating-div__img'>
                <img src={svgFlower} alt="Icon" className='rotating-div__img' />
            </div>
            <div className='rotating-div__info'>
                <p className='rotating-div__info-text_1'>Created for everyone</p>
                <p className='rotating-div__info-text_2'>everyone.</p>
            </div>
            <div className='rotating-div__img'>
                <img src={svgFlower} alt="Icon" className='rotating-div__img' />
            </div>
        </div>
    );
}

export default RotatingDiv;


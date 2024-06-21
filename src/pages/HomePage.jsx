import React, { useEffect, useState } from 'react';
import Brands from '../components/Brands';
import "../styles/main.css";
import ProductList from '../components/ProductList';
import SectionCardTitle from '../components/SectionCardTitle';
import BigImage from '../components/BigImage';
import InfoBigImage from '../components/InfoBigImage';
import Rotating from '../components/Rotating';
import SafeFor from '../components/SafeFor';
import SafeForImage from '../components/SafeForImage';
import Slider from '../components/Slider';

function HomePage({theme}) {

  return (
    <>
    <div className='container-width'>
      <Brands theme={theme} />
      <div className='card-main'>
        <SectionCardTitle theme={theme}/>
        <ProductList theme={theme}/>
      </div>

      <div className='card__big-image'>
        <BigImage theme={theme}/>
        <InfoBigImage theme={theme}/>
      </div>
    </div>

     <div className='rotating_crusse'>
      <Rotating />
     </div>

    <div className='cart-title'>
      <div className='safe'>
        <SafeFor theme={theme}/>
        <SafeForImage />
      </div>
    </div>
    <Slider theme={theme}/>
    </>
  )
}

export default HomePage
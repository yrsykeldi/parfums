import React from 'react'
import "../styles/InfoBigImage.css"

function InfoBigImage({theme}) {

  const containerTextStyle = {
    color:  theme === 'dark' ? 'white' : 'black'
  };

  const buttonStyle = {
    backgroundColor: '#ABB249',
    color: theme === 'dark' ? 'black' : 'white'
  };

  return (
    <div className='info'>
      <div className='info-title'>
        <h2 className={`info-title__1`} style={containerTextStyle}>Smell like a</h2>
        <h2 className={`info-title__2`} style={containerTextStyle}>dream.</h2>
      </div>
        <p className={`info-text`} style={containerTextStyle}>With every delicate spritz, our scents weave a tapestry of dreams, enveloping you in an irresistible aura that lingers like the sweetest reverie. Each note is meticulously crafted to transport you to a realm where your aspirations come alive, leaving an impression that's as lasting as the memory of a cherished dream.</p>
        <button className={`info-button`} style={buttonStyle}>SHOP NOW</button>
    </div>
  )
}

export default InfoBigImage
import React from 'react'
import '../styles/SectionCardTitle.css'

function SectionCardTitle({theme}) {
  const containerTextStyle = {
    color:  theme === 'dark' ? 'white' : 'black'
  };

  return (
    <div className={`card-container__h2`}>
        <h2 className={`card-container__name1`} style={containerTextStyle}>Featured</h2>
        <h2 className={`card-container__name2`} style={containerTextStyle}>fragrances.</h2>
    </div>
  )
}

export default SectionCardTitle
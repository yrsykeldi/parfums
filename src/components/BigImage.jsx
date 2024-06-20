import React from 'react'
import "../styles/BigImage.css"
import BidImage from "../assets/BIG-Image.jpg"

function BigImage() {
  return (
    <img src={BidImage} alt="" className='big-image' />
  )
}

export default BigImage
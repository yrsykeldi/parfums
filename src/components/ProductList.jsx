import React from 'react'
import "../styles/ProductList.css"
import ProductCards from './ProductCards'

function ProductList({theme}) {
  return (
    <div className='card'>
        <ProductCards theme={theme}/>
        <ProductCards theme={theme}/>
        <ProductCards theme={theme}/>
        <ProductCards theme={theme}/>
    </div>
  )
}

export default ProductList
import React from 'react'
import { FiPlusCircle } from "react-icons/fi";

export const Item = ({product, handleAddToCart}) => {
  return (
    <div className='Products-item'>
        <img src={product.image} alt={product.title}></img>
        <div className="products-item-info">
        <i className="fa-solid fa-basket-shopping"></i>
            <h2>{product.title}</h2>
            <span>${product.price}</span>
            <p>{product.description}</p>
          
            
        </div>
        <button type='button' onClick={handleAddToCart(product)}>
              <div className='ocupar'>
               Agregar al carrito  <FiPlusCircle className='icon'/> 
              </div>
            
              </button>
    </div>
  )
}

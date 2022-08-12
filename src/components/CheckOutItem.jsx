import React from 'react'

export const CheckOutItem = ({id,title, price, handleRemoveToCart}) => {
  return (
    <article className="Checkout-item">
          <div className="Checkout-element">
            <h4>{title}</h4>
            <span>${price}</span>
          </div>
          <button type="button" onClick={handleRemoveToCart(id)}><i className="fas fa-trash-alt" title="Eliminar" /></button>
    </article>
  )
}

import React from 'react'
import '../styles/components/Information.css'
export const InformationComponent = ({title,price}) => {
  return (
    <article className="Information-item">
    <div className="Information-element">
      <h4>{title}</h4>
      <span>${price}</span>
    </div>
  </article>  
  )
}

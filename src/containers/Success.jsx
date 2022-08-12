import React from 'react'
import '../styles/components/Success.css'

export const Success = () => {
  return (
    <main className="Succes">
      <section className="Success-content">
        <h3>Nombre, Gracias por tu compra</h3>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map">Google Maps</div>
      </section>
    </main>
  )
}

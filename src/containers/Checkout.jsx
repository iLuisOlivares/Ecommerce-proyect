import React, {useContext} from 'react'
import { NavLink } from "react-router-dom";
import '../styles/components/Checkout.css'
import Appcontext from '../context/appContext';
import { CheckOutItem } from '../components/CheckOutItem';
export const Checkout = () => {
  const {state:{cart}, removeToCart} = useContext(Appcontext);

  const handleRemoveToCart = id => () =>{
    removeToCart(id);
  }

  const handlePrecio = () => {
   return cart.reduce( (previousValue, currentValue) => previousValue + currentValue.price ,0);

    }

  return (
    <main className="Checkout">

      <section className="Checkout-content">
        <h3>Lista de Pedidos:</h3>
        {cart.length > 0 ?  cart.map(({title,price,id},key)=>(
            <CheckOutItem key={key} id={id} title={title} price={price} handleRemoveToCart={handleRemoveToCart} />
          )) : <p>No has agregado productos al carrito</p> }
         
      </section>
      
      {
        cart.length > 0 &&  <section className="Checkout-sidebar">
        <h3>Precio: ${handlePrecio()}</h3>
        <NavLink to="/checkout/information">
        <button type="button">Continuar pedido <i className="fas fa-cart-plus"></i></button>
        </NavLink>
       
      </section>
      }
     
    </main>
  )
}

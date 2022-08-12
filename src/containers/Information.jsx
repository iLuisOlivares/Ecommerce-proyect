import React, {useContext, useRef} from 'react'
import '../styles/components/Information.css'
import { NavLink, useNavigate } from "react-router-dom";
import Appcontext from '../context/appContext';
import { InformationComponent } from '../components/InformationComponent';
export const Information = () => {
  const {state:{cart,buyer}, addToBuyer} = useContext(Appcontext);
  const navigate = useNavigate();
  const form = useRef();

  function handleSubmit() {
    const formData = new FormData(form.current);
    const buyerNew = Object.fromEntries(formData);
    addToBuyer(buyerNew);
    console.log(cart);
    console.log(buyer);
    navigate('/checkout/payment');
  }

  return (
    <main className="Information">
      <section className="Information-content">
        <article className="Information-head">
          <h2>Información de contacto:</h2>
        </article>
        <article className="Information-form">
          <form ref={form} action="">

          <label htmlFor="name">
          <input type="text" placeholder="Nombre completo" name="name" />
          </label>

          <label htmlFor="email">
            <input type="text" placeholder="Correo Electronico" name="email" />
          </label>

          <label htmlFor="addres">

            <input type="text" placeholder="Direccion" name="addres" />
          </label>

          <label htmlFor="apto">
            <input type="text" placeholder="apto" name="apto" />
          </label>

          <label htmlFor='city'>
            <input type="text" placeholder="Ciudad" name="city" />
          </label>

          <label htmlFor="country">
            <input type="text" placeholder="Pais" name="country" />
          </label>

          <label htmlFor="state">
            <input type="text" placeholder="Estado" name="state" />
          </label>

          <label htmlFor="cp">
            <input type="text" placeholder="Codigo postal" name="cp" />
          </label>
          <label htmlFor="phone">
            <input type="text" placeholder="Telefono" name="phone" />
          </label>

          </form>
        </article>
        <article className="Information-buttons">
          <NavLink to={"/checkout"}>
          <div className="Information-back">Regresar</div>
          </NavLink>
          <button onClick={handleSubmit}>
            Pagar
          </button>
        </article>
      </section>
      <section className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map(({title,price,id})=>(
        <InformationComponent key={id} title={title} price={price}></InformationComponent>
        ))}
      </section>
    </main>

  )
}

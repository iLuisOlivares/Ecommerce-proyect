import React, {useContext} from 'react'
import Appcontext from '../context/appContext'
import { Item } from './Item'
import '../styles/components/ListItem.css'


export const ListItem = () => {
    const {state:{products,cart}, addToCart} = useContext(Appcontext);

    const handleAddToCart = product => () =>{
        addToCart(product);
    }
    
  return (
    <section className="Products">
        <article className="Products-items">
            {
                products.map((product)=>(
                    <Item key={product.id} product={product} handleAddToCart={handleAddToCart}></Item>
                ))
            }
        </article>
    </section>
    )
}

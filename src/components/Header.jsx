import React,{useContext} from 'react'
import { NavLink } from "react-router-dom";
import '../styles/components/Header.css'
import { FiShoppingCart } from "react-icons/fi";
import Appcontext from '../context/appContext';
import useCart from '../hooks/useCart';


export const Header = () => {
    const {state:{cart}} = useContext(Appcontext);
  return (
        <div className="header">
            <NavLink to="/">
            <h2 className="header-title"> E-commerce</h2>     
            </NavLink>
             
            <NavLink to="/checkout">
            <FiShoppingCart/> 
            {cart.length > 0 && cart.length}
            </NavLink>
        </div>
    )
}

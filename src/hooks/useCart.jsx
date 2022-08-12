import { useState } from "react";
import ShopState from '../ShopState';

const useCart = () =>{
    const [state,setState] = useState(ShopState);

    const addToCart = payload =>{
        console.log(state);
        setState({
            ...state, 
            cart: [ ...state.cart, payload]
        });
    }

    const removeToCart = payload => {
        setState({
            ...state,
            cart: state.cart.filter((product)=> product.id !== payload)
        })
    }

    const addToBuyer = personalInfo => {
        setState({
            ...state,
            buyer: {...state.buyer, personalInfo}
        })
    }
    return {state, addToCart, removeToCart, addToBuyer};

    

}

export default useCart;
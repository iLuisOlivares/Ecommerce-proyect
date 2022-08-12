import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { Checkout } from "../containers/Checkout";
import { Home } from "../containers/Home";
import { Information } from "../containers/Information";
import { Notfound } from "../containers/Notfound";
import { Success } from "../containers/Success";
import { Payment } from "../containers/Payment";
import { Layout } from "../components/Layout";
import useCart from "../hooks/useCart";
import Appcontext from "../context/appContext";

 const App = () => {
    const shopState = useCart();
  return (
    <Appcontext.Provider value={shopState}>
        <BrowserRouter>
        <Layout>
        <Routes>
            <Route  path="/" element={<Home/>}></Route>
            <Route  path="/checkout" element={<Checkout/>}></Route>
            <Route  path="/checkout/information" element={<Information/>}></Route>
            <Route  path="/checkout/payment" element={<Payment/>}></Route>
            <Route  path="/checkout/success" element={<Success/>}></Route>
            <Route path="*" element={<Notfound/>}></Route>
        </Routes>
        </Layout>
        </BrowserRouter>

    </Appcontext.Provider>

  )
}

export default App

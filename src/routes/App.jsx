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

 const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route  path="/" element={<Home/>}></Route>
            <Route  path="/checkout" element={<Route/>}></Route>
            <Route  path="/checkout/information" element={<Information/>}></Route>
            <Route  path="/checkout/payment" element={<Payment/>}></Route>
            <Route  path="/checkout/succes" element={<Success/>}></Route>
            <Route path="*" element={<Notfound/>}></Route>
        </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App

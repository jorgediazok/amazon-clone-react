import React from 'react'
import { useStateValue } from '../context/StateProvider';
import "../styles/Checkout.css"

function Checkout() {

  const[{basket}, dispatch] = useStateValue();


  return (
    <div className="checkout">
      <h1>Checkout</h1>
    </div>
  )
}

export default Checkout;

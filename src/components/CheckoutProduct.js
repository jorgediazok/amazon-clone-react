import React from 'react'
import { useStateValue } from '../context/StateProvider';
import "../styles/CheckoutProduct.css"

function CheckoutProduct({id,title,image,price,rating}) {
  const [{}, dispatch] = useStateValue()

  const removeFromBasket = () => {
    //remove item from basket
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id: id,
    })
  }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt=""/>
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating ">
        {
          Array(rating).fill("").map((_)=>(
            <p><span role="img" aria-label="emoji" key={id}>⭐</span></p>
          ))
        }
      </div>
      <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct

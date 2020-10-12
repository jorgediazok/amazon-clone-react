import React from 'react'
import {Link} from "react-router-dom"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../context/StateProvider'
import {getBasketTotal} from "../context/reducer"
import {useHistory} from "react-router-dom"
import "../styles/Subtotal.css"

function Subtotal() {

  const history = useHistory()
  const [{basket}, dispatch] = useStateValue()

  return (
    <div className="subtotal">
      <CurrencyFormat
      renderText={(value) => (
      <>
      <p>
      Subtotal({basket.length} items) : <strong>{`${value}`}</strong>
      </p> 
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
      />
      <Link to="/">
      <button onClick={e => history.push("/payment")}>Proceed to Checkout</button>
      </Link>
    </div>
  )
}

export default Subtotal

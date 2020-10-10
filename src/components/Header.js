import React from 'react'
import {Link} from "react-router-dom"
import "../styles/Header.css"

function Header() {
  return (
    <nav className="header">
     <Link to="/">
     <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo"/>
     </Link> 
     <input type="text" className="header__searchInput"/>
    </nav>
  )
}

export default Header

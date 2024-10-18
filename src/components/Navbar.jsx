import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  const cartItems = useSelector((state)=>{
    // console.log(state.cart);
    return state.cart
  });

  return (

    <nav>
        <ul>
            <li><Link to="/">redux store</Link> </li>
            <li> <Link to="/">home</Link></li>
            <li> <Link to="/cart">Cart <sup>{cartItems.length}</sup> </Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
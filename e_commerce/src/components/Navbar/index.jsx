import '../../assets/styles/navbar/style.css'

// import FaShoppingCart from "react-icons"
import React from 'react'

export const Navbar = () => {
  return (
    <div className="navbar">
      <a href="">
        <img src="../../../public/vite.svg" alt="" srcset="" />
      </a>
      
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <button>Search</button>
      </div>
      <div className="cart">
        {/* <FaShoppingCart /> */}
        <span>0</span> 
      </div>
    </div>
  );
}

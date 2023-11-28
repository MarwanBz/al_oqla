import {Cart} from "../Cart/index"
// import FaShoppingCart from "react-icons"
import React from 'react'
import { Search } from '../Search';
export const Navbar = () => {
  return (
    <div className="navbar">
      <a href="">
        <img src="../../../public/vite.svg" alt="" srcset="" />
      </a>
      <Search />
      <Cart />
    </div>
  );
}

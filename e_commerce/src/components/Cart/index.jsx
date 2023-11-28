import { FaCartArrowDown } from "react-icons/fa";
import React from 'react'

export const Cart = () => {
  return (
    <div className="cart">
        <FaCartArrowDown />
        <span>0</span> 
      </div>
  )
}

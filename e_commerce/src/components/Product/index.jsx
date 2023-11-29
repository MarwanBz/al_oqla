import React from 'react'

const Product = ({ title, price, description,img }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <img className="product-img" src={img} alt="" srcset="" />
    </div>
  );
};

export default Product;

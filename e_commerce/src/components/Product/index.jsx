import React from 'react'

const Product = ({ title, price, description }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      {/* <p>{description}</p> */}
    </div>
  );
};

export default Product;

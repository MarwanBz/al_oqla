import ProductCard from "../ProductCard";
import React from "react";
import { useState } from "react";

export const ProductCatalog = ({ products }) => {
  const [showMoreStates, setShowMoreStates] = useState(
    products.map(() => false)
  );
  

  const toggleMore = (index) => {
    const newShowMoreStates = [...showMoreStates];
    newShowMoreStates[index] = !newShowMoreStates[index];
    setShowMoreStates(newShowMoreStates);
  };

  return (
    <div className="product-catalog-container">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          showMore={showMoreStates[index]}
          toggleMore={() => toggleMore(index)}
        />
      ))}
    </div>
  );
};
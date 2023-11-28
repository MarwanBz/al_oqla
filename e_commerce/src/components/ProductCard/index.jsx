import Product from "../Product";
import React from "react";

export default function ProductCard({ product, showMore, toggleMore }) {
  const maxDescriptionLength = 50;

  return (
    <div className="product-card">
      <Product
        title={product.title}
        price={product.price}
        description={product.description}
      />
      {product.description.length > maxDescriptionLength && (
        <>
          <p className="product-description">
            {showMore
              ? product.description
              : `${product.description.slice(0, maxDescriptionLength)}...`}
          </p>
          <button  onClick={toggleMore}>
            {showMore ? "Show Less" : "Show More"}
          </button>
        </>
      )}
    </div>
  );
}

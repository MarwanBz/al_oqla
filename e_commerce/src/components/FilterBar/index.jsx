import React from 'react'

export const FilterBar = ({categories,activeCategory,onSelectCategory}) => {
  const allCategory = "All";

  return (
    <div className="filter-bar">
      {[allCategory, ...categories].map((category) => (
        <button
          key={category.id}
          className={`filter-button ${
            category === activeCategory ? "active" : ""
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

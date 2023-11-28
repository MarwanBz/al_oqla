import React from 'react'

export const FilterBar = ({categories,activeCategory,onSelectCategory}) => {
  return (
    <div className="filter-bar">
      {categories.map((category) => (
        <button
          key={category}
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

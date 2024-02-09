// CategoryFilter.js

import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <div>
      <button 
        className={selectedCategory === 'All' ? 'selected' : ''}
        onClick={() => onCategorySelect('All')}
      >
        All
      </button>
      {categories && categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? 'selected' : ''}
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;




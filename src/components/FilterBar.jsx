import React from "react";

const FilterBar = ({ categories, selectedCategory, setSelectedCategory }) => (
  <div className="flex justify-center mt-4">
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
      className="w-full max-w-xs p-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  </div>
);

export default FilterBar;

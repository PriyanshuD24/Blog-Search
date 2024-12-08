import React from "react";

const SearchBox = ({ query, setQuery }) => (
  <div className="flex items-center justify-center mt-4">
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for blogs..."
      className="w-full max-w-lg p-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default SearchBox;

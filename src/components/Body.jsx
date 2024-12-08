import React, { useState } from 'react'
import { blogs } from '../utils/blogs';
import SearchBox from './SearchBox';
import FilterBar from './FilterBar';
import Results from './Results';

const Body = () => {
    const [query, setQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
  
    const filteredBlogs = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(query.toLowerCase()) &&
        (selectedCategory === "" || blog.category === selectedCategory)
    );
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <h1 className="text-4xl font-black text-gray-900 tracking-tight text-center">
            Explore Our Blog Collection
          </h1>
          <p className="text-xl text-gray-600 mt-3 max-w-2xl mx-auto">
            Discover insights, stories, and inspiration across various topics.
          </p>
      <SearchBox query={query} setQuery={setQuery} />
      <FilterBar
        categories={[...new Set(blogs.map((blog) => blog.category))]}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Results filteredBlogs={filteredBlogs} />
    </div>
  )
}

export default Body
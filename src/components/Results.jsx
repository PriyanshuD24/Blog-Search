import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Tag } from 'lucide-react';

const Results = ({ filteredBlogs }) => {
  const navigate = useNavigate();

  return (
    <div className="  py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white shadow-md rounded-full px-6 py-3 mb-4">
            <div className="flex items-center space-x-2 text-blue-600">
              <BookOpen className="w-6 h-6" />
              <span className="font-semibold">Blog Results</span>
            </div>
          </div>
         
        </div>

        {filteredBlogs.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredBlogs.map((blog) => (
              <div 
                key={blog.id} 
                onClick={() => navigate(`/blog/${blog.id}`)}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden border-2 border-transparent hover:border-blue-500">
              
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

           
                  <div className="p-6">
              
                    <div className="flex items-center mb-3 space-x-2">
                      <Tag className="w-5 h-5 text-blue-500" />
                      <span className="text-sm text-gray-600 uppercase tracking-wider">
                        {blog.category}
                      </span>
                    </div>

               
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h3>

                
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {blog.description}
                    </p>

                 
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                      <span>Read More</span>
                      <ArrowRight className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center bg-white rounded-2xl shadow-lg p-12">
            <BookOpen className="w-16 h-16 mx-auto text-gray-300 mb-6" />
            <p className="text-2xl text-gray-600 font-semibold">
              No blog posts found
            </p>
            <p className="text-gray-500 mt-3">
              We couldn't find any blog posts matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../utils/blogs';
import { BookOpen, Tag, Sparkles } from 'lucide-react';

const Blog = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    const selectedBlog = blogs.find(v => v.id == id);
    setBlogPost(selectedBlog);
  }, [id]);

  if (!blogPost) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="text-2xl text-gray-700 animate-pulse">Loading magical content...</div>
      </div>
    );
  }

  const { title, description, category, mainContent, image } = blogPost;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-12 pb-16">
      <div className="container mx-auto px-4 relative">
        <div className="absolute top-0 right-0 transform -translate-y-1/4 translate-x-1/4 opacity-20">
          <Sparkles className="w-64 h-64 text-purple-300" />
        </div>

        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden border-4 border-blue-100 transform transition-all hover:scale-[1.01]">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-90 -z-10"></div>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <div className="flex items-center text-white space-x-2">
                <Tag className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">{category}</span>
              </div>
            </div>

            <h1 className="text-4xl font-black mb-6 relative z-10 
              bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              {title}
            </h1>
   
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {description}
            </p>
          </div>

          <div className="relative">
            <div className={`
              ${isImageLoading ? 'bg-gray-200 animate-pulse' : ''}
              overflow-hidden
            `}>
              <img 
                src={image} 
                alt={title}
                onLoad={() => setIsImageLoading(false)}
                className="w-full h-[500px] object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            {/* Image Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          {/* Content Section */}
          <div className="p-12 bg-white relative">
            {/* Content Heading */}
            <div className="flex items-center justify-center text-gray-500 mb-8 space-x-3">
              <BookOpen className="w-7 h-7 text-blue-500" />
              <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
                Blog Content
              </h2>
            </div>
            <MainContent mainContent={mainContent}/>
          </div>
        </div>
      </div>
    </div>
  );
}


const MainContent = ({ mainContent }) => {
    const [searchText, setSearchText] = useState('');
  
    const highlightText = (text, search) => {
      if (!search) return text;
  
      const regex = new RegExp(`(${search})`, 'gi');
      return text.split(regex).map((part, index) =>
        part.toLowerCase() === search.toLowerCase() ? (
          <mark key={index} className="bg-yellow-300">{part}</mark>
        ) : (
          part
        )
      );
    };
  
    return (
      <>
        <div className='flex justify-center mb-8'>
          <input
            type="text"
            placeholder='Search text'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className='p-2 rounded-xl border-blue-400 border outline-none'
          />
        </div>
        <div className="prose prose-lg max-w-3xl mx-auto 
          prose-headings:text-gray-900 
          prose-p:text-gray-700 
          prose-a:text-blue-600 
          prose-a:font-semibold">
          {highlightText(mainContent, searchText)}
        </div>
      </>
    );
  };

export default Blog;

import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="mb-4">
      <input 
        type="text" 
        placeholder="Search tasks..." 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default SearchBar;

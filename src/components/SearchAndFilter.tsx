import React, { useState } from 'react';

const SearchAndFilter = ({ products, setFilteredProducts }: { products: Product[], setFilteredProducts: (products: Product[]) => void }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]); // Adjust the max price as needed

  // Get unique categories
  const categories = Array.from(new Set(products.map((product) => product.category)));

  // Handle filtering logic
  const handleFilter = () => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1]);

    setFilteredProducts(filtered);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-100 rounded-lg shadow">
      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded w-full md:w-1/3"
      />

      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 border rounded w-full md:w-1/3"
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Price Range Filter */}
      <div className="flex items-center w-full md:w-1/3">
        <input
          type="number"
          placeholder="Min Price"
          value={priceRange[0]}
          onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
          className="p-2 border rounded w-1/2"
        />
        <span className="mx-2">-</span>
        <input
          type="number"
          placeholder="Max Price"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
          className="p-2 border rounded w-1/2"
        />
      </div>

      {/* Apply Filters Button */}
      <button onClick={handleFilter} className="p-2 bg-blue-500 text-white rounded">
        Apply Filters
      </button>
    </div>
  );
};

export default SearchAndFilter;

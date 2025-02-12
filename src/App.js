import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetch("products/products.json") // Ensure the correct path
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      if (Object.keys(filters).length === 0) {
        setFilteredProducts(products);
        return;
      }

      let filtered = products;

      for (const category in filters) {
        if (filters[category].length > 0) {
          filtered = filtered.filter((product) =>
            filters[category].includes(product[category])
          );
        }
      }

      setFilteredProducts(filtered);
    };

    applyFilters();
  }, [filters, products]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="container">
      <h1 className="pageHeading">Men's Printed Shirts</h1>
      <Navbar onFilterChange={handleFilterChange} />
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.alt}
                className="product-image"
              />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">
                ₹{product.Price} <span className="mrp">₹{product.mrp}</span>
              </p>
              <p className="discount">{product.discount}% Off</p>
            </div>
          ))
        ) : (
          <p>No products matching these filters.</p>
        )}
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ScratchCardComponent from "./components/ScratchCardComponent";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [showScratchCard, setShowScratchCard] = useState(true);

  useEffect(() => {
    fetch("products/products.json")
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
    <div className="filter_page_container">
      {showScratchCard && (
        <div className="scratch_card_overlay">
          <ScratchCardComponent onClose={() => setShowScratchCard(false)} />
        </div>
      )}
      <h1 className="filter_page_heading">Men's Printed Shirts</h1>
      <Navbar onFilterChange={handleFilterChange} />
      <div className="filter_page_product_grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="filter_page_product_card">
              <img
                src={product.image}
                alt={product.alt}
                className="filter_page_product_image"
              />
              <h3 className="filter_page_product_name">{product.name}</h3>
              <p className="filter_page_product_price">
                ₹{product.Price}{" "}
                <span className="filter_page_mrp">₹{product.mrp}</span>
              </p>
              <p className="filter_page_discount">{product.discount}% Off</p>
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

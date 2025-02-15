import React, { useState, useEffect } from "react";
import "../CSS/Navbar.css";
import downArrowIcon from "../assets/images/svg-dropdown.png";
import upArrowIcon from "../assets/images/svg-dropdown-open.png";

const filters = {
  Fabric: [
    "100% Cotton",
    "60% Cotton 40% Modal",
    "62% Cotton 38% Excel",
    "65% Cotton 35% Rep Poly",
    "70% Cotton 30% Linen",
    "75% Cotton 25% Nylon",
    "98% Cotton 2% Lycra",
    "Cotton Blend",
    "Cotton Stretch",
    "Cotton Viscose",
    "Linen",
    "Linen Blend",
  ],
  Color: ["Red", "Blue", "Black", "Grey", "Navy", "White", "Green", "Yellow"],
  Size: ["S", "M", "L", "XL", "XXL"],
  Sleeves: ["Full Sleeve", "Half Sleeve", "Sleeveless"],
  Pattern: ["Plain", "Printed", "Checked", "Striped"],
  Collar: ["Regular", "Mandarin", "Spread", "Button-Down"],
  PriceCategory: ["Under ₹500", "₹500-₹1000", "₹1000-₹2000", "₹2000+"],
};

const Navbar = ({ onFilterChange }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({});

  useEffect(() => {
    onFilterChange(selectedFilters); // Ensure filters update correctly
  }, [selectedFilters, onFilterChange]);

  const toggleDropdown = (category) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  const handleCheckboxChange = (category, item) => {
    setSelectedFilters((prevFilters) => {
      const updatedCategoryFilters = prevFilters[category] || [];
      const newFilters = updatedCategoryFilters.includes(item)
        ? updatedCategoryFilters.filter((i) => i !== item) // Remove item
        : [...updatedCategoryFilters, item]; // Add item

      return {
        ...prevFilters,
        [category]: newFilters.length ? newFilters : undefined, // Remove empty categories
      };
    });
  };

  const clearFilters = () => {
    setSelectedFilters({});
    onFilterChange({});
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  return (
    <>
      <nav className={`filter_navbar ${openDropdown ? "expanded" : ""}`}>
        <div className="filter_nav_container">
          <ul className="filter_nav_menu">
            {Object.keys(filters).map((category) => (
              <li key={category} className="filter_nav_item">
                <button
                  className="filter_nav_link"
                  onClick={() => toggleDropdown(category)}
                >
                  {category}
                  <img
                    className="filter_downArrowIcon"
                    alt="Expand"
                    src={
                      openDropdown === category ? upArrowIcon : downArrowIcon
                    }
                  />
                </button>

                {openDropdown === category && (
                  <ul className="filter_dropdown_menu">
                    {filters[category].map((item, index) => (
                      <li key={index} className="filter_dropdown_item">
                        <input
                          type="checkbox"
                          checked={
                            selectedFilters[category]?.includes(item) || false
                          }
                          onChange={() => handleCheckboxChange(category, item)}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {Object.keys(selectedFilters).length > 0 && (
        <div className="selected_filters_row">
          <p>
            REFINE BY:
            {Object.keys(selectedFilters).flatMap((category) =>
              selectedFilters[category]?.map((item, index) => (
                <span key={`${category}-${index}`} className="filter_tag">
                  {item}
                </span>
              ))
            )}
          </p>
          <button className="filter_btn_Clear_all" onClick={clearFilters}>
            Clear All
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;

import React, { useState, useRef, useEffect } from "react";
import "../Navbar.css";
import downArrowIcon from "../svg-dropdown.png";
import upArrowIcon from "../svg-dropdown-open.png";

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
  Price: ["Under ₹500", "₹500-₹1000", "₹1000-₹2000", "₹2000+"],
};

const Navbar = ({ onFilterChange }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({});
  const dropdownRef = useRef(null);
  const [dropdownHeight, setDropdownHeight] = useState(0);

  const toggleDropdown = (category) => {
    if (openDropdown === category) {
      setOpenDropdown(null);
      setDropdownHeight(0);
    } else {
      setOpenDropdown(category);
    }
  };

  useEffect(() => {
    if (openDropdown) {
      const height = dropdownRef.current?.offsetHeight || 0;
      setDropdownHeight(height);
    }
    onFilterChange(selectedFilters);
  }, [openDropdown, selectedFilters, onFilterChange]);

  const handleCheckboxChange = (category, item) => {
    setSelectedFilters((prevFilters) => {
      const categoryFilters = prevFilters[category] || [];
      if (categoryFilters.includes(item)) {
        return {
          ...prevFilters,
          [category]: categoryFilters.filter((i) => i !== item),
        };
      } else {
        return {
          ...prevFilters,
          [category]: [...categoryFilters, item],
        };
      }
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
      <nav
        className={`filter_navbar ${openDropdown ? "expanded" : ""}`}
        style={{ height: dropdownHeight ? dropdownHeight + 40 + "px" : "auto" }}
      >
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
                  <ul className="filter_dropdown_menu" ref={dropdownRef}>
                    {filters[category].map((item, index) => (
                      <li key={index} className="filter_dropdown_item">
                        <input
                          type="checkbox"
                          checked={
                            selectedFilters[category] &&
                            selectedFilters[category].includes(item)
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
            {Object.keys(selectedFilters).map((category) =>
              selectedFilters[category].map((item, index) => (
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

import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import axios from "axios";

function Category() {
  const [apiData, setApiData] = useState([]);
  const [isArrowUp, setIsArrowUp] = useState(false);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/categories`).then((result) => {
      const data = result.data;
      setApiData(data);
    });
  }, []);

  const handleArrow = () => {
    if (!isArrowUp) setIsArrowUp(true);
    else setIsArrowUp(false);
  };

  const arrowStyle = {
    transform: isArrowUp ? "rotate(180deg)" : "",
    transition: "transform 200ms ease",
  };

  const categoryStyle = {
    display: isArrowUp ? "block" : "none",
  };

  return (
    <div className="container-fuid border-bottom mb-5 ">
      <div className="categorylist w-75 mx-auto my-3">
        <ul className=" list-inline">
          <li
            onClick={handleArrow}
            className="category-heading list-inline-item fw-bold fs-14 grayShade "
          >
            ALL CATEGORIES
            <KeyboardArrowDownIcon style={arrowStyle} />
          </li>
          <li
            style={categoryStyle}
            className="allCategories position-absolute left-0 bg-white shadow "
          >
            <a className="dropdown-item text-decoration-none  fs-14 grayShade main-category">
              {apiData.map((item, index) => {
                const data = item;
                return (
                  <li key={index} className="list-inline-item ms-2 ">
                    <Link
                      to={`/${item}`}
                      className="text-decoration-none text-uppercase fs-14 main-category CategoryItem"
                    >
                      {data}
                    </Link>
                  </li>
                );
              })}
            </a>
          </li>

          {apiData.map((item, index) => {
            const data = item;
            return (
              <li key={index} className="list-inline-item ms-2 ">
                <Link
                  to={`/${item}`}
                  className="text-decoration-none text-uppercase fs-14 main-category CategoryItem"
                >
                  {data}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Category;

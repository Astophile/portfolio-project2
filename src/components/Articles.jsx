import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Articles() {
  const [apiData, setApiData] = useState([]);
  const [classNames, setclassNames] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { category } = useParams();

  axios
    .get(`https://fakestoreapi.com/products/category/${category}`)
    .then((result) => {
      const data = result.data;
      setApiData(data);
      setIsLoading(false);
    });

  const handleDisc = () => {
    setclassNames("col-md-6 col-sm-12 col-lg-4");
  };

  const handleFullView = () => {
    setclassNames("col-12");
  };

  return (
    <div>
      <div className="container-fluid productListingContainer w-75 mb-5">
        {isLoading ? (
          <div className=" text-center w-100">
            <p>Loading</p>
          </div>
        ) : (
          <div>
            <div className="row w-100 py-2 my-2 ">
              <div className="col-lg-4">
                <h3 className="fs-6 fw-bold border-bottom border-2">Filters</h3>
              </div>
              <div className="col-lg-8 border-bottom border-2 d-flex justify-content-between">
                <div className="CheckboxContainer">
                  <input
                    type="checkbox"
                    className="CheckBox me-2"
                    id="CheckBox"
                  />
                  <label htmlFor="CheckBox" className="CheckBoxLable fs-14">
                    Only with photos
                  </label>
                </div>
                <div className="selectView d-flex align-items-center justify-content-between w-25">
                  <span className="viewText fs-14 fw-bold">VIEW</span>
                  <MenuOutlinedIcon className="curserPointer" />
                  <GridViewOutlinedIcon
                    onClick={handleDisc}
                    className="curserPointer"
                  />

                  <ViewAgendaOutlinedIcon
                    onClick={handleFullView}
                    className="curserPointer"
                  />
                </div>
                <div className="sortBy d-flex justify-content-center align-items-center">
                  <label className="fs-14 fw-bold" id htmlFor="sortBy">
                    SORT BY:
                  </label>

                  <select
                    id="sortBy"
                    className="sortBy form-select form-select-sm border-0 fs-14 max-width"
                  >
                    <option selected>None</option>
                    <option value="1">Lowest Price</option>
                    <option value="2">Heighest Price</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row w-100">
              <div className="col-lg-4 d-none d-lg-block">
                <h3 className="fs-6 fw-bold">CATEGORIES</h3>
                <div className="px-3 border-bottom border-2 ">
                  <span className="fs-14 ">All Categories</span>
                  <ul className="list-unstyled ms-3 my-2">
                    <li className="fs-14 mb-1 thirdlist">Electronics</li>
                    <li className="fs-14 mb-1 thirdlist">Jewelery</li>
                    <li className="fs-14 mb-1 thirdlist">Men's Clothing</li>
                    <li className="fs-14 mb-1 thirdlist">Women's Clothing</li>
                  </ul>
                </div>
                <div className="my-3 py-3 border-bottom border-2">
                  <h3 className="fs-6 fw-bold">LOCATIONS</h3>
                  <div className="countrySearch border border-1 border-dark rounded-1 bg-white p-2 my-3">
                    <input
                      type="text"
                      className="border-0 px-2 countrySearchInput"
                      placeholder="Pakistan"
                    />
                    <KeyboardArrowDownIcon />
                  </div>
                  <div className="px-3">
                    <span className="fs-14 ">Pakistan</span>
                    <ul className="list-unstyled ms-3 my-2 grayShade">
                      <li className="fs-14 mb-1">Punjab</li>
                      <li className="fs-14 mb-1">Sindh</li>
                      <li className="fs-14 mb-1">Khyber Pakhtunkhwa</li>
                      <li className="fs-14 mb-1">Balochistan</li>
                      <li className="fs-14 mb-1">
                        Islamabad Capital Territory
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="my-3 py-3 border-bottom border-2 grayShade">
                  <h3 className="fs-6 fw-bold text-dark">BRANDS</h3>
                  <ul className="list-unstyled ">
                    <li className="fs-14 mb-1">Apple iPhone</li>
                    <li className="fs-14 mb-1">Samsung Mobile</li>
                    <li className="fs-14 mb-1">Vivo </li>
                    <li className="fs-14 mb-1">OPPO</li>
                    <li className="fs-14 mb-1">Infinix</li>
                  </ul>
                </div>
                <div className="my-3 py-3 border-bottom border-2 grayShade">
                  <h3 className="fs-6 fw-bold text-dark">CONDITIONS</h3>
                  <div className="my-3">
                    <div className="CheckboxContainer mb-2">
                      <input
                        type="checkbox"
                        className="CheckBox me-2"
                        id="usedCheckBox"
                      />
                      <label
                        htmlFor="usedCheckBox"
                        className="CheckBoxLable fs-14"
                      >
                        Used
                      </label>
                    </div>
                    <div className="CheckboxContainer mb-2">
                      <input
                        type="checkbox"
                        className="CheckBox me-2"
                        id="newCheckBox"
                      />
                      <label
                        htmlFor="newCheckBox"
                        className="CheckBoxLable fs-14"
                      >
                        New
                      </label>
                    </div>
                    <div className="CheckboxContainer mb-2">
                      <input
                        type="checkbox"
                        className="CheckBox me-2"
                        id="openCheckBox"
                      />
                      <label
                        htmlFor="openCheckBox"
                        className="CheckBoxLable fs-14"
                      >
                        Open Box
                      </label>
                    </div>
                    <div className="CheckboxContainer mb-2">
                      <input
                        type="checkbox"
                        className="CheckBox me-2"
                        id="notWorkingCheckBox"
                      />
                      <label
                        htmlFor="notWorkingCheckBox"
                        className="CheckBoxLable fs-14"
                      >
                        For Parts or Not Working
                      </label>
                    </div>
                    <div className="CheckboxContainer mb-2">
                      <input
                        type="checkbox"
                        className="CheckBox me-2"
                        id="refurbishedCheckBox"
                      />
                      <label
                        htmlFor="refurbishedCheckBox"
                        className="CheckBoxLable fs-14"
                      >
                        Refurbished
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid listingColumn col-lg-8">
                <div className="row gy-3 ">
                  {apiData.map((item, index) => {
                    return (
                      <div key={index} className={classNames}>
                        <Link
                          className="text-decoration-none"
                          to="/Articleinfo"
                        >
                          <div
                            className="card position-relative"
                            style={{
                              height: "auto",
                              minHeight: "310px",
                            }}
                          >
                            <img
                              src={item.image}
                              className="card-img-top card-img"
                              alt="product"
                            />
                            <button className="featur-btn position-absolute border-0 rounded p-1 fw-bold">
                              FEATURED
                            </button>
                            <div className="card-body position-relative pb-0">
                              <span className="feature-line position-absolute top-0 start-0"></span>
                              <i className="fa-regular fa-heart heart-icon position-absolute text-dark"></i>
                              <p className="card-text text-dark w-lg-75">
                                {item.title.slice(0, 20)}
                              </p>

                              <h5 className="fw-bold price text-dark">
                                Rs {item.price}
                              </h5>
                              <p className="cardFooter position-absolute bottom-0">
                                Lahore • 1 week ago
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>{" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default Articles;

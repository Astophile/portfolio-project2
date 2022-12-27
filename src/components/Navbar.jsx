import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

import olxLogo from "../assets/olx-blue.jpg";
import olxBigLogo from "../assets/Olx-black.png";
import selllogo from "../assets/SellButton.PNG";

import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import LocalTaxiOutlinedIcon from "@mui/icons-material/LocalTaxiOutlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function Navbar() {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg bg-light nav">
        <div className="container-fluid">
          <div className="nav-flex">
            <div className="Upper-nav">
              <div className="blueOlx">
                <img src={olxLogo} />
              </div>

              <div className="Top-links">
                <LocalTaxiOutlinedIcon className="motors-icon" />
                <a>MOTORS</a>
                <BusinessOutlinedIcon className="property-icon" />
                <a>PROPERTY</a>
              </div>
            </div>
            <div className="midnav">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="blackOlx">
                  <img src={olxBigLogo} />
                </div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown ">
                    <div className="drop-box">
                      <select class=" form-select-lg mb-3 Location-input">
                        <option
                          className="Location-input"
                          type="text"
                          placeholder="Location"
                        >
                          Pakistan{" "}
                        </option>
                        <option value="1">@Your Location</option>
                        <option value="2">Balochistan,Pakistan</option>
                        <option value="3">Islamabad,Pakistan</option>
                        <option value="4">Khyber Pakhtunkhwa.Pakistan</option>
                        <option value="5">Northern areas,Pakistan</option>
                        <option value="6">Punjab,Pakistan</option>
                        <option value="7">Sindh,Pakistan</option>
                      </select>
                    </div>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input
                    className=" me-2 search-bar"
                    type="search"
                    placeholder="Find Cars, Mobile Phones and more..."
                    aria-label="Search"
                  />
                  <button className=" search-button" type="submit">
                    {" "}
                    <SearchRoundedIcon />
                  </button>
                </form>

                <Link to="/Login-Form">
                  <a className="login">Login</a>
                </Link>

                <Link to="/Sellform">
                  <button className="sellButton">
                    <img className="sellbtn" src={selllogo} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

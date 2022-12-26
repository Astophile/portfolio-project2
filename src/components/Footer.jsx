import React from "react";
import fb from "../assets/fb.svg";
import twitter from "../assets/twitter.svg";
import play from "../assets/play.svg";
import insta from "../assets/insta.svg";
import appstore from "../assets/app store.svg";
import googleplay from "../assets/google play.svg";
import appgallery from "../assets/app gallery.svg";

function Footer() {
  return (
    <footer>
      <div className="container-fluid">
        <div className="section-gap">
          {/* List Section */}
          <div className="sing-footer">
            <div className="list-div">
              <h6>POPULAR CATEGORIES</h6>
              <ul>
                <li>Cars</li>
                <li>Flats for rent</li>
                <li>Mobile Phones</li>
                <li>Jobs</li>
              </ul>
            </div>
            <div className="list-div">
              <h6>TRENDING SEARCHES</h6>
              <ul>
                <li>Bikes</li>
                <li>Watches</li>
                <li>Books</li>
                <li>Dogs</li>
              </ul>
            </div>
            <div className="list-div">
              <h6>ABOUT US</h6>
              <ul>
                <li>About EMPG</li>
                <li>OLX Blog</li>
                <li>Contact Us</li>
                <li>OLX for Businesses</li>
              </ul>
            </div>
            <div className="list-div">
              <h6>OLX</h6>
              <ul>
                <li>Help</li>
                <li>Sitemap</li>
                <li>Terms of use</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="list-div">
              <h6 className="w-50">FOLLOW US</h6>
              <div className="social-links">
                <div>
                  <img src={fb} />
                </div>
                <div id="Move">
                  <img src={twitter} />
                </div>
                <div id="Move2">
                  <img src={play} />
                </div>
                <div id="Move3">
                  <img src={insta} />
                </div>
              </div>
              <div className="social-links2">
                <div>
                  <img src={appstore} />
                </div>
                <div>
                  <img src={googleplay} />
                </div>
                <div>
                  <img src={appgallery} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="last">
        <p>Free classifieds in Pakistan . © 2006-2022 OLX</p>
      </div>
    </footer>
  );
}

export default Footer;

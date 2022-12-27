import React from "react";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

function Locations(props) {
  return (
    <div>
      <div className="container border rounded-2 p-3">
        <h2 className="productLocationTitle">Posted in</h2>
        <p className="fs-12 grayShade"></p>
        <div className="productLocationBox">
          <div className="location w-100 border rounded-2 shadow-sm">
            <iframe
              className="w-100"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13612.194856053768!2d74.2061927!3d31.4678461!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918fdf92864c63f%3A0xeb1f57d4a5fa9db3!2sEden%20Value%20Homes%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1671983211420!5m2!1sen!2s"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="d-flex justify-content-between px-3 py-2">
              <p className="text-uppercase fw-bold fs-14 my-auto">
                see location
              </p>
              <KeyboardArrowRightOutlinedIcon
                role="button"
                className="ms-auto max-height my-auto fs-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locations;

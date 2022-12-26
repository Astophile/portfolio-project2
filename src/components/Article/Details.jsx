import React from "react";

function Details(props) {
  return (
    <div>
      <div className="container border rounded-2 p-3 my-2">
        <h2 className="productInfoHeading fw-bold">Details</h2>
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-between">
            <p className="fs-14 grayShade">Brand</p>
            <p className="fs-14">{props.brand}</p>
          </div>
          <div className="col-lg-6 d-flex justify-content-between">
            <p className="fs-14 grayShade">Price</p>
            <p className="fs-14">Rs. {props.price}</p>
          </div>
          <div className="col-lg-6 d-flex justify-content-between">
            <p className="fs-14 grayShade">Condition</p>
            <p className="fs-14">{props.condition}</p>
          </div>
        </div>
        <hr />
        <h2 className="productInfoHeading fw-bold">Description</h2>

        <div className="">
          <p className="fs-14 m-0">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;

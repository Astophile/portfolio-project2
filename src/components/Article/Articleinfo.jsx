import React from "react";
import { useState } from "react";
import Carousel from "./Carousel";
import Prices from "./Prices";
import Details from "./Details";
import Description from "./Description";
import Locations from "./Locations";
import axios from "axios";
import { useParams } from "react-router-dom";

function Articleinfo() {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
    const data = res.data;
    setApiData(data);
    setIsLoading(false);
  });

  return (
    <div>
      {isLoading ? (
        <div className=" text-center w-100">
          <p>Loading</p>
        </div>
      ) : (
        <div className="product-wrapper my-5 container px-5">
          <div className="product row w-100">
            <div className="col-lg-7">
              <Carousel imgPath={apiData.image} />
              <Details
                brand={apiData.brand}
                price={apiData.price}
                condition={apiData.condition}
                description={apiData.description}
              />
            </div>
            <div className="col-lg-5">
              <Prices
                price={apiData.price}
                title={apiData.title}
                location={apiData.location}
              />
              <Description
                name={apiData.name}
                phoneNumber={apiData.phoneNumber}
              />
              <Locations location={apiData.location} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Articleinfo;

import React, { useEffect, useState } from "react";
import { useStateContext } from "../Context";

import Clear from "../assets/images/Clear.jpg";
import Cloudy from "../assets/images/Cloudy.avif";
import Fog from "../assets/images/fog.png";
import Rainy from "../assets/images/Rainy.avif";
import Snow from "../assets/images/Snow.avif";
import Stormy from "../assets/images/Storm.avif";
import Sunny from "../assets/images/Sunny.avif";
import PartiallyCloud from "../assets/images/partiallycloud.avif";
import OverCast from "../assets/images/overcast.avif";

const BackgroundLayout = () => {
  const { weather } = useStateContext();

  const [image, setImage] = useState(Stormy);

  useEffect(() => {
    if (weather.conditions) {
      let imageString = weather.conditions;

      console.log("useEffect background");

      if (imageString.toLowerCase().includes("clear")) {
        setImage(Clear);
      } else if (imageString.toLowerCase().includes("cloud")) {
        setImage(Cloudy);
      } else if (imageString.toLowerCase().includes("fog")) {
        setImage(Fog);
      } else if (
        imageString.toLowerCase().includes("rain") ||
        imageString.toLowerCase().includes("shower")
      ) {
        setImage(Rainy);
      } else if (imageString.toLowerCase().includes("snow")) {
        setImage(Snow);
      } else if (
        imageString.toLowerCase().includes("thunder") ||
        imageString.toLowerCase().includes("storm")
      ) {
        setImage(Stormy);
      } else if (imageString.toLowerCase().includes("sunny")) {
        setImage(Sunny);
      } else if (imageString.toLowerCase().includes("Partially cloudy")) {
        setImage(PartiallyCloud);
      } else if (imageString.toLowerCase().includes("Overcast")) {
        setImage(OverCast);
      }
    }
  }, [weather]);
  return (
    <img
      src={image}
      alt="weather image"
      className="h-screen w-full fixed top-0 left-0 -z-[10]"
    />
  );
};

export default BackgroundLayout;

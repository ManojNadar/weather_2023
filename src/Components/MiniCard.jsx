import React, { useEffect, useState } from "react";

import sun from "../assets/icons/sun.png";
import cloud from "../assets/icons/cloud.png";
import fog from "../assets/icons/fog.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import storm from "../assets/icons/storm.png";
import windy from "../assets/icons/windy.png";
import partialCloud from "../assets/icons/PartiallyCloud.png";

const MiniCard = ({ time, temp, iconString }) => {
  const [icon, setIcon] = useState();

  useEffect(() => {
    console.log("useEffect minicard");

    if (iconString) {
      if (iconString.toLowerCase().includes("cloud")) {
        setIcon(cloud);
      } else if (iconString.toLowerCase().includes("rain")) {
        setIcon(rain);
      } else if (iconString.toLowerCase().includes("clear")) {
        setIcon(sun);
      } else if (iconString.toLowerCase().includes("thunder")) {
        setIcon(storm);
      } else if (iconString.toLowerCase().includes("fog")) {
        setIcon(fog);
      } else if (iconString.toLowerCase().includes("snow")) {
        setIcon(snow);
      } else if (iconString.toLowerCase().includes("wind")) {
        setIcon(windy);
      } else if (
        iconString.toLowerCase().includes("overcast") ||
        iconString.toLowerCase().includes("partially cloudy")
      ) {
        setIcon(partialCloud);
      }
    }
  }, [iconString]);

  return (
    <div className="w-[11rem] m-auto">
      <p className="mt-2 text-lg font-bold">
        {
          new Date(time)
            .toLocaleTimeString("en", { weekday: "long" })
            .split(" ")[0]
        }
      </p>

      <hr className="mt-3" />
      <div className="w-[11rem]">
        <img src={icon} alt="weather_icon" className="m-auto" />
      </div>
      <p className="mt-2 text-xl">{temp} &deg;C</p>
    </div>
  );
};

export default MiniCard;

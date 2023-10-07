import React, { useEffect, useState } from "react";
import "../index.css";

import sun from "../assets/icons/sun.png";
import cloud from "../assets/icons/cloud.png";
import fog from "../assets/icons/fog.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import storm from "../assets/icons/storm.png";
import windy from "../assets/icons/windy.png";
import { useDate } from "../Utils/UseDate";

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  visibility,
  iconString,
  conditions,
}) => {
  const [icon, setIcon] = useState(rain);

  const { date } = useDate();

  // console.log(iconString, "iconsrtring");

  useEffect(() => {
    // console.log("useEffect weather card");
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
      }
    }
  }, [iconString]);
  return (
    <div className="w-[92rem] h-[15rem] ml-auto mr-auto mt-10 flex glassCard ">
      <div className="flex">
        <div className="w-[10rem] h-[10rem]">
          <img
            src={icon}
            alt="weather icon"
            className="w-[8rem] h-[8rem] mt-10 ml-6 "
          />
        </div>

        <div className="w-[17rem] text-center pt-20">
          <p className="font-bold text-lg">{date}</p>
          <div className="font-bold text-3xl">{place}</div>
          <p className="font-bold text-2xl">
            {temperature ? temperature : "0"}&deg;C
          </p>
        </div>
      </div>

      <div className="flex pl-10 w-[50rem] justify-around">
        <div className="w-[10rem]  text-center font-bold text-xl pt-20">
          <p>Wind Speed</p>
          <p>{windspeed ? windspeed : "0"} km/h</p>
        </div>
        <div className="w-[10rem]  text-center font-bold text-xl pt-20">
          <p>Humidity</p>
          <p>{humidity ? humidity : "0"} %</p>
        </div>
        <div className="w-[10rem]  text-center font-bold text-xl pt-20">
          <p>Visibility</p>
          <p>{visibility ? visibility : "0"} km</p>
        </div>
        <div className="w-[10rem]  text-center font-bold text-xl pt-20">
          <p>Heat Index</p>
          <p>{heatIndex ? heatIndex : "N/A"}&deg;C</p>
        </div>
      </div>
      <div className="w-[10rem] items-center font-bold text-4xl flex ml-5 pl-8 text-center">
        <p>{conditions ? conditions : "Partially Cloud"}</p>
      </div>
    </div>
  );
};

export default WeatherCard;

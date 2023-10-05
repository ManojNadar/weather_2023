import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const stateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [values, setValues] = useState([]);
  const [place, setPlace] = useState("mumbai");
  const [location, setLocation] = useState("mumbai");

  // fetch Api

  const fetchWeather = async () => {
    const options = {
      method: "GET",
      url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
      params: {
        aggregateHours: "24",
        location: place,
        contentType: "json",
        unitGroup: "metric",
        shortColumnNames: "0",
      },
      headers: {
        "X-RapidAPI-Key": "a8c015a484msh9d6aceac1ac1d6cp1b5e69jsna13d6fb113f2",
        "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      // console.log(response.data, "Actual API Data");
      const thisData = Object.values(response.data.locations)[0];
      console.log(thisData, "This Data");
      setLocation(thisData.address);
      setValues(thisData.values);
      setWeather(thisData.values[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // fetchWeather();
  }, [place]);

  // useEffect(() => {
  //   console.log(values);
  // }, [values]);

  return (
    <stateContext.Provider
      value={{
        weather,
        values,
        location,
        setPlace,
        place,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);

import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const stateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [values, setValues] = useState([]);
  const [location, setLocation] = useState("mumbai");
  const [place, setPlace] = useState("mumbai");

  // fetch Api

  const fetchWeather = async () => {
    const options = {
      method: "GET",
      url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
      params: {
        aggregateHours: "24",
        location: location,
        contentType: "csv",
        unitGroup: "us",
        shortColumnNames: "0",
      },
      headers: {
        "X-RapidAPI-Key": "35d517fd59msh2347eeaa6a077b8p12faf1jsn48fd388d6979",
        "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);

      const thisData = Object.values(response.data.locations)[0];
      setLocation(thisData.address);
      setValues(thisData.values);
      setWeather(thisData.values[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [place]);

  useEffect(() => {
    console.log(values);
  }, [values]);

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

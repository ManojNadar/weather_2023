import { useState } from "react";
import "./App.css";
import search from "./assets/icons/search.svg";
import { useStateContext } from "./Context/index.jsx";
import { BackgroundLayout, WeatherCard, MiniCard } from "./Components";

function App() {
  const [input, setInput] = useState("");

  const { weather, location, values, place, setPlace } = useStateContext();
  // console.log(weather);

  const submit = () => {
    setPlace(input);
    setInput("");
  };

  return (
    <>
      <div className="w-full h-screen text-white">
        <nav className="w-full flex justify-between items-center ">
          <h1 className="text-white font-bold tracking-wide text-3xl">
            Weather App
          </h1>

          <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex-items-center gap-2">
            <img
              src={search}
              alt="search"
              className="w-[3.5rem] h-[3.5rem] py-3"
            />
            <input
              type="text"
              className="focus:outline-none w-full text-[#212121] text-lg"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  submit();
                }
              }}
            />
          </div>
        </nav>
        <BackgroundLayout />

        <main className="w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center">
          <WeatherCard
            place={location}
            windspeed={weather.wspd}
            humidity={weather.humidity}
            temperature={weather.temp}
            heatIndex={weather.heatIndex}
            iconString={weather.conditions}
            conditions={weather.conditions}
          />

          <div className="flex justify-center gap-8 flex-wrap w-[60%]">
            {values?.slice(1, 7).map((curr) => {
              return (
                <MiniCard
                  key={curr.datetime}
                  time={curr.datetime}
                  temp={curr.temp}
                  iconString={curr.conditions}
                />
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;

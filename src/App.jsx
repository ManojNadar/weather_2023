import { useState } from "react";
import "./App.css";
import search from "./assets/icons/search.svg";
import { useStateContext } from "./Context/index.jsx";
import { BackgroundLayout, WeatherCard, MiniCard } from "./Components";
import { useDate } from "./Utils/UseDate";

function App() {
  const [input, setInput] = useState("");

  const { weather, location, values, place, setPlace } = useStateContext();
  // console.log(weather);

  const { time } = useDate();

  const fakeData = [
    {
      datetime: new Date(),
      temp: 28.9,
      conditions: "Clear",
      id: 1,
    },
    {
      datetime: new Date(),
      temp: 28.9,
      conditions: "Clear",
      id: 2,
    },
    {
      datetime: new Date(),
      temp: 28.9,
      conditions: "Clear",
      id: 3,
    },
    {
      datetime: new Date(),
      temp: 28.9,
      conditions: "Clear",
      id: 4,
    },
    {
      datetime: new Date(),
      temp: 28.9,
      conditions: "Clear",
      id: 5,
    },
    {
      datetime: new Date(),
      temp: 28.9,
      conditions: "Clear",
      id: 6,
    },
  ];

  const submit = () => {
    setPlace(input);
    setInput("");
  };

  return (
    <>
      <div className="w-full h-screen text-white">
        <nav className="w-full flex justify-around items-center pt-2 pb-3">
          <h1 className="w-[auto] text-4xl font-bold">Weather App</h1>

          <div className="w-[25rem] flex relative mt-2">
            <img
              src={search}
              alt="search"
              className="absolute w-[1.1rem] h-[1.1rem] mt-2 ml-2 "
            />
            <input
              type="text"
              className="w-[40rem] h-[2rem] border-black focus:outline-none pl-10 placeholder-black placeholder:text-slate-400 pb-1 text-black"
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search Location"
              value={input}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  submit();
                }
              }}
            />
          </div>

          <div className="w-[auto]  text-2xl font-bold">{time}</div>
        </nav>
        <BackgroundLayout />

        <main className="">
          <WeatherCard
            place={location}
            windspeed={weather.wspd}
            humidity={weather.humidity}
            temperature={weather.temp}
            heatIndex={weather.heatIndex}
            iconString={weather.conditions}
            conditions={weather.conditions}
            visibility={weather.visibility}
          />

          <div className="w-[90rem] h-[15rem] mt-10 m-auto flex justify-around">
            {values?.length ? (
              <div className="w-[90rem] h-[15rem] mt-10 m-auto flex justify-around">
                {values?.slice(1, 7).map((curr) => {
                  return (
                    <div
                      key={curr.address}
                      className="w-[12rem] h-[12rem] bg-black glassCardRound text-center overflow-hidden"
                    >
                      <MiniCard
                        key={curr.datetime}
                        time={curr.datetime}
                        temp={curr.temp}
                        iconString={curr.conditions}
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="w-[90rem] h-[15rem] mt-10 m-auto flex justify-around">
                {fakeData?.map((curr) => {
                  return (
                    <div
                      key={curr.id}
                      className="w-[12rem] h-[12rem] bg-black glassCardRound text-center overflow-hidden"
                    >
                      <MiniCard
                        key={curr.datetime}
                        time={curr.datetime}
                        temp={curr.temp}
                        iconString={curr.conditions}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;

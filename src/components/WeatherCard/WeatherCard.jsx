import React, { useContext } from "react";
import { Context } from "../../context/Context";
import "./WeatherCard.css";
import SearchIconCard from "../../images/weathercard/SearchIconCard";
import UbicationIconCard from "../../images/weathercard/UbicationIconCard";
import TemperatureIconCard from "../../images/weathercard/TemperatureIconCard";
import Spinner from "../Spinner/Spinner";
import icons from "../../images/icons-weather/icons";

function WeatherCard() {
  const today = new Date();
  const day = today.getDate();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeekString = daysOfWeek[today.getDay()];
  const monthName = today.toLocaleString("en-US", { month: "long" });

  const { city, setCity, loading, setLoading, error, setError, data, setData } =
    useContext(Context);

  const onSubmit = (e) => {
    e.preventDefault();
    if (city === "" || !city) return;
    getWeather(city.trim());
  };

  const getWeather = () => {
    setError(null);
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=daafdbccc42b8ba1305112f12e6b508f&lang=en`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("City not found");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        localStorage.setItem("city", JSON.stringify(city));
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        alert("Enter an available location.");
      })
      .finally(() => setLoading(false));
  };
  return (
    <>
      <section>
        <div className="search-weather">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Location Search"
              onChange={(e) => setCity(e.target.value)}
            />
            <span type="submit">
              <SearchIconCard />
            </span>
          </form>
        </div>
        <div className="weather-container">
          {loading && <Spinner />}
          {data && (
            <>
              <div className="date-container">
                <div className="location-container">
                  <UbicationIconCard />
                  <p>
                    {data.name},<span> {data.sys.country}</span>
                  </p>
                </div>
                <div className="day-container">
                  <h1>
                    {monthName}, {day}
                  </h1>
                  <p>{dayOfWeekString}</p>
                </div>
              </div>
              <div className="section-icon-description">
                <div className="icon-container">
                  <img src={icons[data.weather[0].icon]} alt="icono-weather" />
                  <p>{data.weather[0].description.toUpperCase()}</p>
                </div>
                <div className="description-container">
                  <div className="container-temperature">
                    <TemperatureIconCard />
                    <p>{parseInt(data.main.temp - 273.15).toFixed(1)} °C</p>
                  </div>

                  <div className="container-min-max-humidity">
                    <p>
                      MIN:
                      <span>
                        {parseInt(data.main.temp_min - 273.15).toFixed(1)}°C
                      </span>
                    </p>
                    <p>
                      MAX:
                      <span>
                        {parseInt(data.main.temp_max - 273.15).toFixed(1)}°C
                      </span>
                    </p>
                    <p>
                      Humidity: <span>{data.main.humidity}%</span>
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
          {!loading && !data && (
            <>
              <div className="title-default">
                <h1>Ingresa una ciudad</h1>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default WeatherCard;

import React from "react";
import { useParams } from "react-router-dom";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import Navbar from "../components/Nav/Navbar";
function SectionWeather() {
  const { city } = useParams();
  return (
    <>
      <Navbar />
      <WeatherCard city={city} />
    </>
  );
}

export default SectionWeather;

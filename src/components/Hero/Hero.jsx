import SearchIconHero from "../../images/hero/SearchIconHero";
import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";
import SectionWeather from "../../Pages/SectionWeather";

function hero() {
  return (
    <>
      <section className="hero-section">
        <div className="container-title-subtitle">
          <h1>Discover the weather forecast </h1>
          <p>Stay ahead of the weather. </p>
        </div>

        <div className="container-button">
          <Link to={"/section-weather"}>
            <button>
              <span className="container-searchicon">
                <SearchIconHero />
              </span>
              Search
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default hero;

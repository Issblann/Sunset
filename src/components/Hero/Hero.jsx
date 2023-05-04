import SearchIconHero from "../../images/hero/SearchIconHero";
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
      </section>
    </>
  );
}

export default hero;

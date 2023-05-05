import React, { useContext, useState } from "react";
import "./InputSearch.css";
// import { Context } from "../../context/Context";
import { BiSearch } from "react-icons/bi";

const InputSearch = () => {
  // const { city, setCity } = useContext(Context);
  const [city, setCity] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ city });
    city.trim();
    if (city === "" || !city) return;
    window.location.href = `/section-weather/${city}`;
  };

  console.log();
  return (
    <>
      <div className="search-container">
        <form onSubmit={onSubmit}>
          <BiSearch type="submit" size="16px" color="#3C3C43" opacity="0.6" />
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setCity(e.target.value)}
          />
          {/* <BiSearch/> */}
        </form>
      </div>
    </>
  );
};

export default InputSearch;

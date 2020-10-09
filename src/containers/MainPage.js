import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./SearchBar";
import CurrentWeatherCard from "../components/CurrentWeatherCard";
import HourlyWeatherSection from "./HourlyForecast";


const MainPage = () => {
  return (
    <div>
      <div className="container" style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
      <h1 className="text-center">getTemp</h1>
      <SearchBar />
      <CurrentWeatherCard />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        
      <HourlyWeatherSection />
      </div>
      
    </div>
  );
};

export default MainPage;

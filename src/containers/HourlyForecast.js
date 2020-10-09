import React from 'react'
import { useSelector } from "react-redux"
import HourlyCard from '../components/HourlyCard';




const HourlyWeatherSection = () => {
  const hourlyData = useSelector(state => state.hourlyWeatherData)

  return (
    <div>
      {hourlyData && <h1 className="text-center">HOURLY</h1>}
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }} >
      {hourlyData && hourlyData.map(weather => {
        return <HourlyCard weather={weather} />
      })}
    </div>
    </div>
  );
}


export default HourlyWeatherSection

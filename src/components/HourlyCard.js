import React from 'react'

const HourlyCard = ({weather}) => {
    const unixTimeConverter = (unixTime) => {
        let date = new Date(unixTime * 1000)
        return date.getHours();
    }
    return (
        <div className="text-center">
            <div style={{border: "1px red solid", marginLeft: "10px", marginTop:"5px"}}>
    <p className="text-left">{unixTimeConverter(weather.dt)}</p>
    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather"/>
    <p>{weather.weather[0].description}</p>
    <p >{Math.round(weather.temp)}C</p>
            </div>
        </div>
    )
}

export default HourlyCard

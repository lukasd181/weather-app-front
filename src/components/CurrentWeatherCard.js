import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
const CurrentWeatherCard = () => {
  const current = useSelector((state) => state.currentWeatherData);
  
  return (
    <div>{current &&
      <Card className="text-center" style={{ width: "18rem" , marginTop: "30px", display: "flex", flexDirection:"column", alignItems:"center"}}>
        <Card.Body>
          <Card.Title>{current.name}</Card.Title>
          <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} />
          <Card.Text><p>{current.weather[0].description}</p></Card.Text>
           <Card.Text><h1>{Math.round(current.main.temp)}C</h1></Card.Text>
    <Card.Text><p>H:{Math.round(current.main.temp_max)}  L:{Math.round(current.main.temp_min)}</p></Card.Text>
          
        </Card.Body>
      </Card>}
    </div>
  );
};

export default CurrentWeatherCard;

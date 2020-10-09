import React from "react";
import { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { weatherActions } from "../redux/actions/weather.actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const getWeatherData = (keyword) => {
      console.log("keyword", keyword)
    dispatch(weatherActions.getWeather(keyword));
  };
  return (
    <div>
      <Form
        inline
        onSubmit={(e) => {
          e.preventDefault();
          getWeatherData(keyword);
        }}
      >
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchBar;

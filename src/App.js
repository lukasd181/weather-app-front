import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./containers/MainPage";

function App() {
  

  return (
    <div className="container">
      <MainPage />
    </div>
  );
}

export default App;

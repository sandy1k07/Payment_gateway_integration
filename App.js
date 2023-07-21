import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Payment from "./components/Payment";
import "./style.scss";

const App = () => {
  const [state, setState] = useState("start");

  const handleClick = () => {
    setState("pay");
  };

  return (
    <div className="home">
      <Navbar />

      {state == "start" && (
        <div className="container">
          <h1>
            "Food nourishes the body
            <br />
            Sharing nourishes the soul"
          </h1>
          <p>
            Close to a billion people - one-eighth of the world’s population
            still live in hunger. Each year 2 million children die through
            malnutrition.
            <br />
            This is happening at a time when doctors in Britain are warning of
            the spread of obesity. We are eating too much while others starve.
          </p>
          <button onClick={handleClick}>Lets's Feed❤️</button>
        </div>
      )}
      {state == "pay" && <Payment />}
    </div>
  );
};

export default App;

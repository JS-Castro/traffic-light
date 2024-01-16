import { useEffect, useState, useMemo } from "react";
import "../App.css";
import PropTypes from "prop-types";

export function TrafficLight() {
  const LIGHTS = useMemo(() => ["red", "yellow", "green"], []);
  const DELAY = "1000";
  const [light, setLight] = useState("");
  const [counter, setCounter] = useState(0);
  const { isRed, isYellow, isGreen } = getLight(light);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (counter === LIGHTS.length - 1) setCounter(0);
      if (counter !== LIGHTS.length - 1) setCounter((prevCount) => prevCount + 1);

      setLight(LIGHTS[counter]);
    }, DELAY);

    return () => {
      clearTimeout(timer);
    };
  }, [counter, LIGHTS]);

  return (
    <>
      <div className={`traffic-ligth ${isRed ? "red" : "gray"}`}></div>
      <div className={`traffic-ligth ${isYellow ? "yellow" : "gray"}`}></div>
      <div className={`traffic-ligth ${isGreen ? "green" : "gray"}`}></div>
    </>
  );
}

TrafficLight.propTypes = {
  light: PropTypes.string,
};

function getLight(light) {
  return {
    isRed: light === "red",
    isYellow: light === "yellow",
    isGreen: light === "green",
  };
}

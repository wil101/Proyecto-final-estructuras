"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Map from "@/components/Map";
import "./page.css";
import GeneralButton from "@/components/GeneralButton";

export default function Summary() {
  const [stars, setStars] = useState([false, false, false, false, false]);

  const handleStarClick = (index) => {
    const newStars = stars.map((star, i) => i <= index);
    setStars(newStars);
  };

  const resetStars = () => {
    const newStars = stars.map(() => false);
    setStars(newStars);
  };

  return (
    <div>
      <Header></Header>
      <Map></Map>
      <GeneralButton></GeneralButton>
      <div className="summary">
        <h2>Información de su viaje</h2>
        <div className="summary-info">
          <div className="summary-info-item">
            <p>
              {new Date().toLocaleDateString()}{" "}
              {new Date().toLocaleTimeString()}
            </p>
            <br />
            <h2>COP$ 18.000</h2>
          </div>
          <div className="summary-info-item">
            <div id="user-img">
              <img src={"/user-active.svg"} alt="" width={"80"} height={"80"} />
            </div>
            <br />
            <p>Maria Gomez</p>
          </div>
        </div>

        <div className="calificación">
          <div className="summary-info-item">
            <h3>califica el cliente</h3>
            <div>
              {stars.map((star, index) => (
                <img
                  key={index}
                  src={star ? "fullstar.png" : "voidstar.png"}
                  alt=""
                  width={"48"}
                  height={"48"}
                  onClick={() => handleStarClick(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="summary-btns">
          <button className="env-btn" onClick={resetStars}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

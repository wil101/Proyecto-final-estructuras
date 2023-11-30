"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Map from "@/components/Map";
import "./pageUser.css";
import Drivers from "@/components/Drivers";

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

  const [showInfo, setShowInfo] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);

  return (
    <div>
      <Header></Header>
      <Map></Map>
      <div className="drivers">
        <h4>Mi perfil</h4>
        <hr />
        <p
          onClick={() => {
            setShowInfo(true);
            setShowInfo2(false);
          }}
        >
          <img
            width={"30"}
            height={"30"}
            src={"https://img.icons8.com/material-rounded/48/car.png"}
            alt={"car"}
          />
          Información de mi viaje
        </p>
        <hr />
        <p
          onClick={() => {
            setShowInfo(false);
            setShowInfo2(true);
          }}
        >
          <img
            width={"30"}
            height={"30"}
            src={"https://img.icons8.com/material-rounded/48/car.png"}
            alt={"car"}
          />
          Mis conductores preferidos
        </p>
      </div>

      {showInfo && (
        <div className="summary">
          <h2>Información de su viaje</h2>
          <div className="summary-info">
            <div className="summary-info-item">
              <p>
                {new Date().toLocaleDateString()}{" "}
                {new Date().toLocaleTimeString()}{" "}
              </p>
              <br />

              <h2>Cop$ 18.000</h2>
            </div>
            <div className="summary-info-item">
              <div id="user-img">
                <img
                  src={"/user-active.svg"}
                  alt=""
                  width={"80"}
                  height={"80"}
                />
              </div>
              <br />
              <p>Juan Perez</p>
            </div>
          </div>

          <div className="calificación">
            <div className="summary-info-item">
              <h3>Califica tu conductor</h3>
              <div id="stars">
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
              <input type="checkbox" name="marca" value="marca" />{" "}
              <label htmlFor="marca">Marcar como conductor preferido</label>
            </div>
          </div>

          <div className="summary-btns">
            <button className="env-btn" onClick={resetStars}>
              Enviar
            </button>
          </div>
        </div>
      )}

      {showInfo2 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="info">
            <button id="equis" onClick={() => setShowInfo2(false)}>
              X
            </button>
            <div className="inerDiv">
              <h2 style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                CONDUCTORES PREFERIDOS
              </h2>
            </div>
            <Drivers></Drivers>
            <Drivers></Drivers>
            <Drivers></Drivers>
          </div>
        </div>
      )}
    </div>
  );
}

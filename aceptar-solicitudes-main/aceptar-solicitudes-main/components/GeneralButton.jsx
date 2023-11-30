"use client";
import { useState } from "react";
import "./GeneralButton.css";

function GeneralButton() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="state">
      <div className={`color ${isActive ? "active" : "color-true"}`}></div>
      <h3 className="title">Mi perfil</h3>
      <div className="stateButton">
        <p> Estado: {isActive ? "Activo" : "Inactivo"}</p>
        <label className="switch">
          <input type="checkbox" onChange={toggleActive} checked={isActive} />
          <span className="slider-round"></span>
        </label>
      </div>
      <div className="search">
        <a href="/requests">🔎 Buscar viajes </a>
      </div>
      <div className="DeleteAcount">
        <a href="/deleteAccount">Eliminar cuenta</a>
      </div>
    </div>
  );
}

export default GeneralButton;

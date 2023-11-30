"use client";
import { useState } from "react";
import "./SwitchButton.css";

function SwitchButton() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="state">
      <p>{isActive ? "Activo" : "Inactivo"}</p>
      <label className="switch">
        <input type="checkbox" onChange={toggleActive} checked={isActive} />
        <span className="slider-round"></span>
      </label>
    </div>
  );
}

export default SwitchButton;

"use client";
import "./page.css";
import Header from "@/components/Header";
import Map from "@/components/Map";
import Drivers from "@/components/Drivers";

import React, { useState } from 'react';

export default function Home() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
        <Header></Header>
        <Map></Map>
        <div className="drivers">
            <h4>Mi perfil</h4>
            <hr/>
            <p onClick={() => setShowInfo(true)}>
            <img width={"30"} height={"30"} src={"https://img.icons8.com/material-rounded/48/car.png"} alt={"car"}/>
                Mis conductores preferidos
            </p>
        </div>

        {showInfo && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className="info">
              <button id="equis" onClick={() => setShowInfo(false)}>X</button>
              <div className="inerDiv">
                <h2 style={{fontSize: '1.5em', fontWeight: 'bold'}}>CONDUCTORES PREFERIDOS</h2>
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

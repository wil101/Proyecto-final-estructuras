"use client";
import Header from "@/components/Header";
import Map from "@/components/Map";
import GeneralButton from "@/components/GeneralButton";
import "./page.css";
import { useState, useEffect } from "react";

export default function Requests() {
  return (
    <div>
      <Header></Header>
      <Map></Map>
      <GeneralButton></GeneralButton>

      <div className="info">
        <div className="bordeazul">
          <h2>SOLICITUD ELIMINAR CUENTA</h2>
        </div>
        <div className="description">
          <h3>Juan, sentimos mucho que te vayas</h3>
          <p>
            Cuando elimines tu cuenta esta se desactivara de manera inmediata y
            dentro del plazo de 30 dias sera eliminada de manera permanente
          </p>
          <p>
            Tu opinion es muy importante entonces por eso esperamo que nos dejes
            tu comentario de porque te das de baja
          </p>
          <textarea
            className="comment-input"
            placeholder="Igresa Aquí tu razón para eliminar la cuenta..."
          ></textarea>
          <h3>¿Estas seguro que quieres eliminar la cuenta?</h3>
          <div className="btns">
            <button id="equis">cancelar</button>
            <button className="rej-btn2">continuar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

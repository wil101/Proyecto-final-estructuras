"use client";
import Header from "@/components/Header";
import Map from "@/components/Map";
import GeneralButton from "@/components/GeneralButton";
import Link from "next/link";
import "./page.css";
import { useState, useEffect } from "react";

export default function Requests() {

  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [price, setPrice] = useState(0);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.data));
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsOpen(true);
    setPrice(generateRandomPrice());
    generateEstimates();
  };

  const generateRandomPrice = () => {
    return Math.floor(Math.random() * (20000 - 4000 + 1)) + 4000; // Genera un número aleatorio entre 4000 y 20000
  };

  const [estimatedTime, setEstimatedTime] = useState(0);
  const [estimatedDistance, setEstimatedDistance] = useState(0);


  const generateEstimates = () => {
    const price = Math.floor(Math.random() * (20000 - 4000 + 1)) + 4000; // Genera un número aleatorio entre 4000 y 20000
    const distance = price / 1200; // asume que el costo por kilómetro es de 400 COP
    const time = (distance / 25) * 60; // asume que la velocidad promedio es de 30 km/h
  
    setPrice(price);
    setEstimatedTime(time);
    setEstimatedDistance(distance);
  };

  const handleReject = (userToReject) => {
    setUsers(users.filter(user => user.id !== userToReject.id));
    handleClose();
  };

  const handleAccept = (userToAccept) => {
    setUsers([userToAccept]);
    handleClose();
  };

  return (
    <div>
      <Header></Header>
      <Map></Map>
      <GeneralButton></GeneralButton>
      <div className="">
        <ul className="panel-requests">
          {users?.map((user) => (
            <li key={user.id}>
              <div className="users" onClick={() => handleUserClick(user)}>
                <img
                  src={"/profile-icon.svg"}
                  alt=""
                  width={"60"}
                  height={"60"}
                />
                <p>{user.first_name}</p>
                <button className="acp-btn"></button>
                <button className="rej-btn"></button>
              </div>
            </li>
          ))}
        </ul>
        {selectedUser && isOpen && (
          <div>
            {/*<button>messi</button>*/}
            <div className="info">
              <button id="equis" onClick={handleClose}>
                X
              </button>
              <div className="innerContainer">
                <h1>${price.toFixed(2)}</h1>
                <h2>{selectedUser.first_name}</h2>
                <h2>Descripción:</h2>
                <p>
                  Su viaje le tomará aproximadamente {estimatedTime.toFixed(0)} minutos y {estimatedDistance.toFixed(1)} km de distancia.
                </p>
                <div className="btns">
                  <Link href={"/summaryDriver"}><button className="acp-btn2" onClick={() => handleAccept(selectedUser)}>Aceptar</button></Link>
                  <button className="rej-btn2" onClick={() => handleReject(selectedUser)}>Rechazar</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

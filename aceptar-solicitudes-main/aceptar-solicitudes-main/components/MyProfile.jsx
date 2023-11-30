"use client";
import "./MyProfile.css"
import { useState } from "react";


export default function MyProfile() {
const [showInfo, setShowInfo] = useState(false);
return(
<div className="drivers">
    <h4>Mi perfil</h4>
    <hr/>
    <p onClick={() => setShowInfo(true)}>
    <img width={"30"} height={"30"} src={"https://img.icons8.com/material-rounded/48/car.png"} alt={"car"}/>
        Mis conductores preferidos
    </p>
</div>);
}
"use client";
import "./page.css";
import GeneralButton from "@/components/GeneralButton";
import Header from "@/components/Header";
import Map from "@/components/Map";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Map></Map>
      <GeneralButton></GeneralButton>
    </div>
  );
}

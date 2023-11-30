import "./Map.css";

export default function Map() {
  return (
    <div className="map-conteiner">
      <iframe
        src="/logo.jpeg"
        frameBorder="0"
        allowFullScreen={""}
        loading={"lazy"}
        className="map"
      ></iframe>
    </div>
  );
}

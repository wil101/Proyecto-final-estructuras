import "./Map.css";

export default function Map() {
  return (
    <div className="map-conteiner">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.938544464496!2d-75.5881814852626!3d6.249647795465254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e441f60a10f0e0d%3A0xed233afc666e39e0!2sMedell%C3%ADn%2C%20Antioquia%2C%20Colombia!5e0!3m2!1sen!2sus!4v1632580744903!5m2!1sen!2sus"
        frameBorder="0"
        allowFullScreen={""}
        loading={"lazy"}
        className="map"
      ></iframe>
    </div>
  );
}

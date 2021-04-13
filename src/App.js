import "./App.css";
import { Geopackage } from "./Geopackage";
import { MapContainer, TileLayer } from "react-leaflet";

export default function App() {
  // const crs = new window.L.Proj.CRS('EPSG4326', )

  return (
    <MapContainer center={[45, 15]} zoom={3}>
      <Geopackage />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />{" "}
    </MapContainer>
  );
}

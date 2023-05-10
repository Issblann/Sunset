import React, { useState, useContext } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  WMSTileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Context } from "../../context/Context";

const MapGeolocation = () => {
  const { location, setLocation } = useContext(Context);
  const zoom = 14;
  const coordsLocalStorage = JSON.parse(localStorage.getItem("coordenadas"));
  console.log("coordenadas local storage", coordsLocalStorage);
  const position = [location.lat, location.lon];
  const mapIcon = L.icon({
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });
  return (
    <MapContainer
      center={coordsLocalStorage ?? position}
      zoom={zoom}
      scrollWheelZoom={true}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LayersControl position="topright">
        <LayersControl.Overlay name="temp_new" checked>
          <WMSTileLayer
            url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${
              import.meta.env.VITE_APP_API_KEY
            }`}
          />
        </LayersControl.Overlay>
      </LayersControl>
      <Marker position={coordsLocalStorage ?? position} icon={mapIcon} />
    </MapContainer>
  );
};
export default MapGeolocation;

import React, { useContext } from "react";
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
  const { location, setLocation, data, setData } = useContext(Context);
  const zoom = 10;
  const coordsLocalStorage = JSON.parse(localStorage.getItem("coordenadas"));
  const dataLocalStorage = JSON.parse(localStorage.getItem("weatherData"));
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
        <LayersControl.Overlay name="clouds_new" checked>
          <WMSTileLayer
            url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${
              import.meta.env.VITE_APP_API_KEY
            }`}
          />
        </LayersControl.Overlay>
      </LayersControl>
      <Marker position={coordsLocalStorage ?? position} icon={mapIcon}>
        <Popup>
          {(data ?? dataLocalStorage) && (
            <>
              <p>
                {(data && data.name) ||
                  (dataLocalStorage && dataLocalStorage.name)}
              </p>
              <p>
                {((data && data.main && data.main.temp) ||
                  (dataLocalStorage &&
                    dataLocalStorage.main &&
                    dataLocalStorage.main.temp)) &&
                  parseInt(
                    (data ? data.main.temp : dataLocalStorage.main.temp) -
                      273.15
                  ).toFixed(1)}
                °C
              </p>
            </>
          )}
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default MapGeolocation;

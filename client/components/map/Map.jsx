import React, { useState, useEffect } from "react";
import mapStyles from "./mapStyles.js";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "94vh",
  height: "60vh",
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const Map = (props) => {
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [markers, setMarkers] = useState([]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    libraries,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  const success = (pos) => {
    const { latitude: lat, longitude: lng } = pos.coords;
    setCenter({
      lat,
      lng,
    });
  };

  if (loadError) return "error loading maps";
  if (!isLoaded) return "loading maps";
  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={options}
        onClick={(e) => {
          setMarkers((current) => [
            ...current,
            { lat: e.latLng.lat(), lng: e.latLng.lng() },
          ]);
        }}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;

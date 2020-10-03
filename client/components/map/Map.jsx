import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vh",
  height: "100vh",
};

const Map = (props) => {
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
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
  console.log(center);
  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      ></GoogleMap>
    </div>
  );
};

export default Map;

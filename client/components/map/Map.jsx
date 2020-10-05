import React, { useState, useEffect, useRef, useCallback } from "react";
import mapStyles from "./mapStyles.js";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Circle,
} from "@react-google-maps/api";
import { FaMapMarkerAlt } from "react-icons/fa";
const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "60vh",
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const Map = (props) => {
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [marker, setMarker] = useState(null);
  const [selected, setSelected] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    libraries,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, [setMarker]);

  const success = (pos) => {
    const { latitude: lat, longitude: lng } = pos.coords;
    setCenter({
      lat,
      lng,
    });
  };

  const onMapClick = useCallback((e) => {
    setMarker({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "error loading maps";
  if (!isLoaded) return "loading maps";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {marker ? (
          <div>
            <Marker
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => {
                setMarker(null);
              }}
            />
            <Circle
              options={{ fillColor: "red" }}
              center={{ lat: marker.lat, lng: marker.lng }}
              radius={1200}
            />
          </div>
        ) : null}
      </GoogleMap>
    </div>
  );
};

export default Map;

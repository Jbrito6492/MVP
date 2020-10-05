import React, { useState, useEffect, useRef, useCallback } from "react";
import mapStyles from "./mapStyles.js";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Circle,
} from "@react-google-maps/api";

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
  // const [radius, setRadius] = useState(1609.34); // 1 mile

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
              onLoad={(circle) => {
                circle.setRadius(1609.34);
                const bounds = circle.getBounds();
                console.log(bounds);
              }}
              onUnmount={(circle) => {
                console.log("unmounted");
              }}
            />
          </div>
        ) : null}
      </GoogleMap>
    </div>
  );
};

export default Map;

import React, { useState, useEffect, useRef, useCallback } from "react";
import mapStyles from "./mapStyles.js";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Circle,
  DistanceMatrixService,
} from "@react-google-maps/api";
import { getLocation } from "../../store/actions/index.js";
import { useSelector, useDispatch } from "react-redux";
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
  const dispatch = useDispatch();
  const location = useSelector((state) => state.coords);
  const [marker, setMarker] = useState({ location, visible: false });

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    libraries,
  });

  useEffect(() => {
    dispatch(getLocation());
  }, []);

  const onMapClick = useCallback(
    (e) => {
      const coords = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      };
      const { lat, lng } = coords;
      setMarker({ ...marker, visible: true, location: { lat, lng } });
    },
    [marker]
  );

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
        zoom={10}
        center={location}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {marker.visible ? (
          <div>
            <Marker
              position={{ lat: marker.location.lat, lng: marker.location.lng }}
              onClick={() => {
                setMarker({ ...marker, visible: false });
              }}
            />
            <Circle
              options={{ fillColor: "red" }}
              center={{ lat: marker.location.lat, lng: marker.location.lng }}
              radius={1200}
            />
          </div>
        ) : null}
      </GoogleMap>
    </div>
  );
};

export default Map;

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
import Footer from "../footer/Footer.jsx";
import Slider from "../slider/Slider.jsx";
import withStyles from "isomorphic-style-loader/withStyles";
import classes from "../../css/map.css";

const libraries = ["places"];
const mapContainerStyle = {
  width: "750px",
  height: "750px",
  borderRadius: "7px",
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const Map = (props) => {
  const dispatch = useDispatch();
  const { location } = useSelector((state) => state.user);
  const { radius } = useSelector((state) => state.map);
  const [marker, setMarker] = useState({ location, visible: false });
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    libraries,
  });

  useEffect(() => {
    dispatch(getLocation());
  }, [location]);

  const onMapClick = useCallback(
    (e) => {
      const coords = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      };
      const { lat, lng } = coords;
      setMarker({ ...marker, visible: true, location: { lat, lng } });
      console.log(marker)
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
    <>
      <div className={classes.mapContainer}>
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
                position={{
                  lat: marker.location.lat,
                  lng: marker.location.lng,
                }}
                onClick={() => {
                  setMarker({ ...marker, visible: false });
                }}
              />
              <Circle
                options={{ fillColor: "red" }}
                center={{ lat: marker.location.lat, lng: marker.location.lng }}
                radius={radius}
              />
            </div>
          ) : null}
        </GoogleMap>
      </div>
      <Footer>
        <Slider />
      </Footer>
    </>
  );
};

export default withStyles(classes)(Map);

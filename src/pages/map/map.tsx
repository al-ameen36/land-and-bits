import mapboxgl, { LngLatLike } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./map.module.scss";
import { useEffect, useRef, useState } from "react";
import { Profile } from "../../components/profile/profile";
import Sidebar from "../../components/sidebar/sidebar";
import useGeoJson from "../../hooks/geojson";
import dummyUsers from "../../data/dummyUsers";
import { selectCurrentFarmer } from "../../store/slices/app";
import { useAppSelector } from "../../store/hooks";

const INITIAL_CENTER: LngLatLike = [7.420036, 10.528597];
const INITIAL_ZOOM = 14.5;

export default function Map() {
  const mapRef = useRef<mapboxgl.Map>(null);
  const mapContainerRef = useRef(null);
  const [center, setCenter] = useState<LngLatLike>(INITIAL_CENTER);
  const [zoom, setZoom] = useState(INITIAL_ZOOM);
  const { drawMarkers, geoJson } = useGeoJson(dummyUsers);
  const farmer = useAppSelector(selectCurrentFarmer);
  const classes = [styles.content_area, farmer ? styles.active : ""].join(" ");

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;

    if (mapContainerRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: center,
        zoom: zoom,
      });

      drawMarkers(mapRef);

      mapRef.current.on("move", () => {
        // get the current center coordinates and zoom level from the map
        const mapCenter = mapRef.current?.getCenter();
        const mapZoom = mapRef.current?.getZoom();

        // update state
        if (mapCenter?.lat && mapCenter.lng)
          setCenter([mapCenter?.lng, mapCenter?.lat]);
        else setCenter(INITIAL_CENTER);
        setZoom(mapZoom || zoom);
      });

      return () => {
        mapRef.current?.remove();
      };
    }
  }, [mapRef, geoJson]);

  // Center may be an array or object
  // const lng = Array.isArray(center)
  //   ? center[0]
  //   : "lng" in center
  //   ? center.lng
  //   : center.lon;
  // const lat = Array.isArray(center) ? center[1] : center.lat;

  return (
    <>
      <div id="map-container" className={styles.map} ref={mapContainerRef} />
      <div className={classes}>
        <Profile />
      </div>
      <Sidebar />
    </>
  );
}

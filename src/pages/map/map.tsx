import mapboxgl, { LngLatLike } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./map.module.scss";
import { useEffect, useRef, useState } from "react";
import { Profile } from "./components/profile/profile";
import Sidebar from "./components/sidebar/sidebar";

const INITIAL_CENTER: LngLatLike = [-74.0242, 40.6941];
const INITIAL_ZOOM = 10.12;

export default function Map() {
  const mapRef = useRef<mapboxgl.Map>(null);
  const mapContainerRef = useRef(null);
  const [center, setCenter] = useState<LngLatLike>(INITIAL_CENTER);
  const [zoom, setZoom] = useState(INITIAL_ZOOM);

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;

    if (mapContainerRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        center: center,
        zoom: zoom,
      });

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
  }, [mapRef]);

  // Center may be an array or object
  const lng = Array.isArray(center)
    ? center[0]
    : "lng" in center
    ? center.lng
    : center.lon;
  const lat = Array.isArray(center) ? center[1] : center.lat;

  return (
    <>
      <div id="map-container" className={styles.map} ref={mapContainerRef} />
      <div className={styles.content_area}>
        <div className={styles.island}>
          Longitude: {lng.toFixed(4)} | Latitude: {lat.toFixed(4)} | Zoom:{" "}
          {zoom.toFixed(2)}
        </div>
        <Profile />
      </div>
      <Sidebar />
    </>
  );
}

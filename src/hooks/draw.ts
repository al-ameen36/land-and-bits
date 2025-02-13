import { RefObject } from "react";
import mapboxgl, { LngLatLike } from "mapbox-gl";
import { useAppDispatch } from "../store/hooks";
import { farmersGeojson } from "../data/dummyFarmers";
import { setFarmer } from "../store/slices/app";
import dummyUsers from "../data/dummyUsers";
import { Farmer } from "../types/farmers";

export default function useDraw() {
  const dispatch = useAppDispatch();

  const drawMarkers = (
    mapRef: RefObject<mapboxgl.Map | null>,
    geojson: typeof farmersGeojson
  ) => {
    if (mapRef.current) {
      for (const marker of geojson.features) {
        const el = document.createElement("div");
        const width = marker.properties.iconSize[0];
        const height = marker.properties.iconSize[1];
        el.className = "marker";
        el.style.backgroundImage = `url(https://picsum.photos/id/${marker.properties.imageId}/${width}/${height})`;
        el.style.width = `${width}px`;
        el.style.height = `${height}px`;
        el.style.backgroundSize = "100%";
        el.style.display = "block";
        el.style.border = "none";
        el.style.borderRadius = "50%";
        el.style.cursor = "pointer";
        el.style.padding = "0";

        el.addEventListener("click", () => {
          dispatch(
            setFarmer(
              dummyUsers.find((frm) => frm.id == marker.properties.id) as Farmer
            )
          );
        });

        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates as LngLatLike)
          .addTo(mapRef.current);
      }
    }
  };

  return { drawMarkers };
}

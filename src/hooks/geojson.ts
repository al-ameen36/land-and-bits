import { useState, useEffect, RefObject } from "react";
import mapboxgl, { LngLatLike } from "mapbox-gl";
import { useAppDispatch } from "../store/hooks";
import { FeatureCollection, Feature, Point } from "geojson";
import { setFarmer } from "../store/slices/app";
import dummyUsers from "../data/dummyUsers";
import { Farmer } from "../types/farmers";

const useMapMarkers = (users: Farmer[]) => {
  const dispatch = useAppDispatch();
  const [geoJson, setGeoJson] = useState<FeatureCollection | null>(null);

  useEffect(() => {
    const features: Feature<
      Point,
      { id: number; name: string; email: string }
    >[] = users.map((user) => {
      const coordinates = user.coords;
      if (!coordinates) {
        throw new Error(`Coordinates for user ID ${user.id} not found.`);
      }

      const feature: Feature<
        Point,
        {
          id: number;
          name: string;
          email: string;
          iconSize: LngLatLike;
          imageId: number;
          photo: string;
        }
      > = {
        type: "Feature",
        properties: {
          id: user.id,
          name: user.name,
          email: user.email,
          imageId: user.id,
          iconSize: [60, 60],
          photo: user.photo,
        },
        geometry: {
          type: "Point",
          coordinates: coordinates,
        },
      };

      return feature;
    });

    const featureCollection: FeatureCollection = {
      type: "FeatureCollection",
      features: features,
    };

    setGeoJson(featureCollection);
  }, [users]);

  const drawMarkers = (mapRef: RefObject<mapboxgl.Map | null>) => {
    console.log(geoJson);
    if (mapRef.current && geoJson) {
      for (const marker of geoJson.features) {
        const el = document.createElement("div");
        const width = marker.properties?.iconSize[0];
        const height = marker.properties?.iconSize[1];
        el.className = "marker";
        // el.style.backgroundImage = `url(https://picsum.photos/id/${marker.properties?.imageId}/${width}/${height})`;
        el.style.backgroundImage = `url(${marker.properties?.photo})`;
        el.style.width = `${width}px`;
        el.style.height = `${height}px`;
        el.style.backgroundSize = "100%";
        el.style.display = "block";
        el.style.border = "none";
        el.style.borderRadius = "50%";
        el.style.cursor = "pointer";
        el.style.padding = "0";

        console.log("Marker created:", el);

        el.addEventListener("click", () => {
          dispatch(
            setFarmer(
              dummyUsers.find(
                (frm) => frm.id === marker.properties?.id
              ) as Farmer
            )
          );
        });

        const coordinates = (marker.geometry as Point).coordinates;

        new mapboxgl.Marker(el)
          .setLngLat(coordinates as LngLatLike)
          .addTo(mapRef.current);
      }
    }
  };

  return { drawMarkers, geoJson };
};

export default useMapMarkers;

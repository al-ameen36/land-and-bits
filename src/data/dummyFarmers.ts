import { LngLatLike } from "mapbox-gl";

const INITIAL_POS: LngLatLike = [9.0582, 7.483333];

export const farmersGeojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        id: 1,
        message: "Foo",
        imageId: 1011,
        iconSize: [60, 60],
      },
      geometry: {
        type: "Point",
        coordinates: INITIAL_POS,
      },
    },
    {
      type: "Feature",
      properties: {
        id: 2,
        message: "Bar",
        imageId: 870,
        iconSize: [50, 50],
      },
      geometry: {
        type: "Point",
        coordinates: [-61.21582, -15.971891],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 3,
        message: "Baz",
        imageId: 837,
        iconSize: [40, 40],
      },
      geometry: {
        type: "Point",
        coordinates: [-63.292236, -18.281518],
      },
    },
  ],
};

// Your access token can be found at: https://ion.cesium.com/tokens.
// Replace `your_access_token` with your Cesium ion access token.

Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0NmUxNDI0MC00MTE3LTQ5ZTctOWJjMC0wODUxNTY5NDJjZmQiLCJpZCI6MjExMTAzLCJpYXQiOjE3MTQwMTE0ODJ9.kUxiH5pW_aM-XWuTkoJkbwmtvZxzc-zyyoHOOukIPuc";

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Cesium.Viewer("cesiumContainer", {
  terrain: Cesium.Terrain.fromWorldTerrain(),
});

// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
  orientation: {
    heading: Cesium.Math.toRadians(0.0),
    pitch: Cesium.Math.toRadians(-15.0),
  },
});

// Add Cesium OSM Buildings, a global 3D buildings layer.
const buildingTileset = await Cesium.createOsmBuildingsAsync();
viewer.scene.primitives.add(buildingTileset);

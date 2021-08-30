import React, { useContext } from "react";
import MapView from "react-native-maps";
import { useEffect, useState } from "react/cjs/react.development";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { MapCallout } from "../components/map-callout.component";
import { Search } from "../components/search.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const [latDelta, setLatDelta] = useState(0);

  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.01,
        }}
      >
        {restaurants.map((r) => {
          return (
            <MapView.Marker
              key={r.name}
              title={r.name}
              coordinate={{
                latitude: r.geometry.location.lat,
                longitude: r.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() => {
                  navigation.navigate("RestaurantDetail", { restaurant: r });
                }}
              >
                <MapCallout restaurant={r} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};

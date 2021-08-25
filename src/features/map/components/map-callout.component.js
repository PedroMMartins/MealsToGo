import React from "react";
import { Image, View } from "react-native";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurantInfo.component";

export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} />;
};

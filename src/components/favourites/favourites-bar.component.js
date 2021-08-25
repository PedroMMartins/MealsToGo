import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../services/favourites/favourites.context";
import styled from "styled-components/native";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const FavouritesBar = () => {
  return <Text>FAVOURITES BAr</Text>;
};

import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { Spacer } from "../spacer/spacer.component";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurantInfo.component";
import { Text } from "../typography/text.component";

const FavouritesWrapper = styled(Card)`
  padding: 10px;
  width:95%
  align-self:center
  z-index: 999;
  border-radius: 15px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }

  return (
    <FavouritesWrapper elevation={3}>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((f) => {
          const key = f.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetail", { restaurant: f })
                }
              >
                <CompactRestaurantInfo restaurant={f} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};

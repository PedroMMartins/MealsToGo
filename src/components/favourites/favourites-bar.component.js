import React, { useContext } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Spacer } from "../spacer/spacer.component";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurantInfo.component";
import { Text } from "../typography/text.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }

  return (
    <FavouritesWrapper>
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

import React, { useContext } from "react";
import { ActivityIndicator } from "react-native-paper";
import { FlatList, Pressable, TouchableOpacity } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { colors } from "../../../infrastructure/theme/colors";
import { Search } from "../components/search.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  //   const [searchQuery, setSearchQuery] = useState("");
  //   const onChangeSearch = (query) => setSearchQuery(query);
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  console.log(navigation);
  return (
    <SafeArea>
      <Search />
      {isLoading && (
        <LoadingContainer>
          <Loading
            animating={isLoading}
            color={colors.brand.primary}
            size={50}
          />
        </LoadingContainer>
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 32 }}
      />
    </SafeArea>
  );
};

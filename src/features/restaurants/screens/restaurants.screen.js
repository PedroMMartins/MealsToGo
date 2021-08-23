import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Spacer } from "../../../components/spacer/spacer.component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  //   const [searchQuery, setSearchQuery] = useState("");
  //   const onChangeSearch = (query) => setSearchQuery(query);
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
        //   placeholder="Search"
        //   icon="heart-outline"
        //   onChangeText={onChangeSearch}
        //   value={searchQuery}
        />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 32 }}
      />
    </SafeArea>
  );
};

import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
  flex-grow: 1;
`;

export const RestaurantsScreen = () => {
  //   const [searchQuery, setSearchQuery] = useState("");
  //   const onChangeSearch = (query) => setSearchQuery(query);

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
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};

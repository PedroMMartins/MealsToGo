import React from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";
import { SafeArea } from "../../../components/utility/safe-area.component";

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
        data={[
          { name: "1" },
          { name: "2" },
          { name: "3" },
          { name: "4" },
          { name: "5" },
          { name: "6" },
        ]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 32 }}
      />
    </SafeArea>
  );
};

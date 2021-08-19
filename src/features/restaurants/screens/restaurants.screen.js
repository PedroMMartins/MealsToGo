import React from "react";
import { Searchbar } from "react-native-paper";
import { SafeAreaView, View, StyleSheet, StatusBar } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => {
  //   const [searchQuery, setSearchQuery] = useState("");
  //   const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
        //   placeholder="Search"
        //   icon="heart-outline"
        //   onChangeText={onChangeSearch}
        //   value={searchQuery}
        />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
    flexGrow: 1,
  },
});

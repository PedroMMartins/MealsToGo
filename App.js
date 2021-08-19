import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";

//const isAndroid = Platform.OS === 'android';
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}

// const styles = StyleSheet.create({});

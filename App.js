import React, { useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { Navigation } from "./src/infrastructure/navigation/index";
import * as firebase from "firebase";
//import firebaseConfig from "./src/services/authentication/authentication.config";
const firebaseConfig = {
  apiKey: "AIzaSyBm9CcEapcR1SZBtDFzq36YRDSiSaWpImk",
  authDomain: "mealstogo-3a585.firebaseapp.com",
  projectId: "mealstogo-3a585",
  storageBucket: "mealstogo-3a585.appspot.com",
  messagingSenderId: "660665601322",
  appId: "1:660665601322:web:186fd60ddd3a79f0c22253",
};
import { useEffect } from "react/cjs/react.development";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

//const isAndroid = Platform.OS === 'android';
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

// const styles = StyleSheet.create({});

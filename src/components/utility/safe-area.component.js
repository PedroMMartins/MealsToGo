import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  color: ${(props) => props.theme.colors.bg.primary};
  /*${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};*/
`;

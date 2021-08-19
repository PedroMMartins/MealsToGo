import React from "react";
import { StyleSheet } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    openingHours,
    rating = 4,
    isClosedTemporary,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
      </Card.Content>
    </RestaurantCard>
  );
};

import React from "react";

import styled from "styled-components/native";

const TopSmall = styled.View`
  margin-top: 4px;
`;

const TopMedium = styled.View`
  margin-top: 8px;
`;

const TopLarge = styled.View`
  margin-top: 16px;
`;

export const Spacer = ({ variant }) => {
  if (variant === "top.medium") {
    return <TopMedium />;
  }
  if (variant === "top.large") {
    return <TopLarge />;
  }
  return <TopSmall />;
};

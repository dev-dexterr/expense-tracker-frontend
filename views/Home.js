import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  PageTitleName,
  BalanceBackground,
  BalanceText,
  BalanceText2,
  BalanceText3,
  BalanceText4
} from "../components/HomeStyles";

//Icons
import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation, username }) => {

  useEffect(() => {
    console.log("asdasdas111", username);
  })
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageTitle>Hello,</PageTitle>
        <PageTitleName>{'Dexter'}</PageTitleName>
        <BalanceBackground>
          <BalanceText>
            <BalanceText2>
              $
            </BalanceText2>
            17,800.88
          </BalanceText>
          <BalanceText3>
            Current Balance
          </BalanceText3>
          <BalanceText4>
            Available
          </BalanceText4>
        </BalanceBackground>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Home;

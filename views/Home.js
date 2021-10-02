import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
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
  BalanceText4,
  IEContainer,
  IEBackground,
  IEText1,
  IEText2,
  IEListTextContainer,
  IEListText
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
        <IEContainer>
            <IEBackground>
              <IEText1>
                <BalanceText2>$</BalanceText2>
                100
              </IEText1>
              <IEText2>Income</IEText2>
            </IEBackground>
            <IEBackground>
              <IEText1>
                <BalanceText2>$</BalanceText2>
                500
              </IEText1>
              <IEText2>Expense</IEText2>
            </IEBackground>
        </IEContainer>
        <IELists />
      </InnerContainer>
    </StyledContainer>
  );
};

const IELists = () => {
  const [selectedTab, setselectedTab] = useState(0);
  const IETab = ['All' , 'Income', 'Expense'];
  return(
    <StyledContainer>
      <InnerContainer>
        <IEListTextContainer>
          {IETab.map((ie,index)=>(
            <Pressable key={index} onPress={()=> setselectedTab(index)}>
              <IEListText style={[index == selectedTab && style.activeIEText]}>{ie}</IEListText>
            </Pressable>
          ))}
        </IEListTextContainer>
      </InnerContainer>
    </StyledContainer>
  )
}

const style = StyleSheet.create({
  activeIEText:{
    color: 'black',
  }
})

export default Home;

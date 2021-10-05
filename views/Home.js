import React, { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
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
  IEListText,
  TransactionTouch,
  TransactionContainer,
  TransactionItemWrapper,
  TransactionLeftWrapper,
  TransactionRightWrapper,
  TransactionText1,
  TransactionText2,
  TransactionAmount
} from "../components/HomeStyles";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { setUsername, setEmail, setToken } from "../utils/redux/actions.js";

//SAMPLE DATA TESTING
import sampledata from '../utils/constants/sampleData.js';

//Iconsr
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  const { username } = useSelector((state) => state.userReducer);

  useEffect(() => {
    console.log("Username: ", username);
  }, []);
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageTitle>Hello,</PageTitle>
        <PageTitleName>{username}</PageTitleName>
        <BalanceBackground>
          <BalanceText>
            <BalanceText2>$</BalanceText2>
            17,800.88
          </BalanceText>
          <BalanceText3>Current Balance</BalanceText3>
          <BalanceText4>Available</BalanceText4>
        </BalanceBackground>
        <IEContainer>
          <IEBackground>
            <IEText1>
              <BalanceText2>$ </BalanceText2>
              100
            </IEText1>
            <IEText2>Income</IEText2>
          </IEBackground>
          <IEBackground>
            <IEText1>
              <BalanceText2>$ </BalanceText2>
              500
            </IEText1>
            <IEText2>Expense</IEText2>
          </IEBackground>
        </IEContainer>
        <IELists />
        <TransactionContainer>
        <FlatList 
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={sampledata}
          renderItem={({item}) => (
            <TransactionLists name={item.name} time={item.time} amount={item.price}/>
          )}
        />
        </TransactionContainer>
      </InnerContainer>
    </StyledContainer>
  );
};

const IELists = () => {
  const [selectedTab, setselectedTab] = useState(0);
  const IETab = ["All", "Income", "Expense"];
  return (
    <StyledContainer>
      <InnerContainer>
        <IEListTextContainer>
          {IETab.map((ie, index) => (
            <Pressable key={index} onPress={() => setselectedTab(index)}>
              <IEListText style={[index == selectedTab && style.activeIEText]}>
                {ie}
              </IEListText>
            </Pressable>
          ))}
        </IEListTextContainer>
      </InnerContainer>
    </StyledContainer>
  );
};

const TransactionLists = ({name , time , amount}) => {
  return (
    <>
      {/* <TransactionTitle>Today Transaction</TransactionTitle> */}
      <>
      <TransactionTouch>
        <TransactionItemWrapper>
          <TransactionLeftWrapper>
            <View>
              <TransactionText1>{name}</TransactionText1>
              <TransactionText2>{time}</TransactionText2>
            </View>
          </TransactionLeftWrapper>
          <TransactionRightWrapper>
            <View>
              <TransactionAmount>
                <BalanceText2>$ </BalanceText2>
                {amount}</TransactionAmount>
            </View>
          </TransactionRightWrapper>
        </TransactionItemWrapper>
        </TransactionTouch>
      </>
    </>
  )
}

const style = StyleSheet.create({
  activeIEText: {
    color: "black",
  },
});

export default Home;

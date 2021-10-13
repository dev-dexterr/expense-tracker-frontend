import React, { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
  TransactionAmount,
  IEIconBackground,
  IEIcon,
  NoTransactionView,
  NoTransactionText
} from "../components/HomeStyles";

//Lottie
import LottieView from 'lottie-react-native';

//Redux
import { useSelector } from "react-redux";

//SAMPLE DATA TESTING
import sampledata from "../utils/constants/sampleData.js";

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
            <TouchableOpacity key={index} onPress={() => setselectedTab(index)}>
              <IEListText style={[index == selectedTab && style.activeIEText]}>
                {ie}
              </IEListText>
            </TouchableOpacity >
          ))}
        </IEListTextContainer>
        {selectedTab == 0 &&
          <TransactionContainer>
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              data={sampledata}
              renderItem={({ item }) => (
                <TransactionLists
                  name={item.name}
                  amount={item.amount}
                  icon={item.icon}
                />
              )}
            />
          </TransactionContainer>
        }
        {
          selectedTab == 1 &&
          <TransactionContainer>
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              data={sampledata}
              renderItem={({ item }) => (
                <TransactionLists
                  name={item.name}
                  icon={item.icon}
                  amount={item.amount}
                />
              )}
            />
          </TransactionContainer>
        }
        {
          selectedTab == 2 &&
          <TransactionContainer>
            <NoTransactionView>
              {/* <NoTransactionText>No Transaction</NoTransactionText> */}
              <LottieView style={{width: '80%', aspectRatio: 1}}
                source={require('../assets/icons/13525-empty.json')}
                autoPlay
              />
              
            </NoTransactionView>
          </TransactionContainer>
        }
      </InnerContainer>
    </StyledContainer>
  );
};

const TransactionLists = ({ name, amount , icon }) => {
  return (
      <>
        <TransactionTouch>
          <TransactionItemWrapper>
            <TransactionLeftWrapper>
              <View>
                  <IEIconBackground>
                    <IEIcon source={icon} />
                  </IEIconBackground>
              </View>
              <View>
                <TransactionText1>{name}</TransactionText1>
              </View> 
            </TransactionLeftWrapper>
            <TransactionRightWrapper>
              <View>
                <TransactionAmount>
                  <BalanceText2>$ </BalanceText2>
                  {amount}
                </TransactionAmount>
              </View>
            </TransactionRightWrapper>
          </TransactionItemWrapper>
        </TransactionTouch>
      </>
  );
};

const style = StyleSheet.create({
  activeIEText: {
    color: "black",
  },
});

export default Home;

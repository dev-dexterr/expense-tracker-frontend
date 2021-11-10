import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { StatusBar } from "expo-status-bar";
import COLOR from "../utils/colors.js";
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
  TransactionAmount,
  IEIconBackground,
  IEIcon,
  NoTransactionView,
} from "../components/HomeStyles";

//Lottie
import LottieView from "lottie-react-native";

import { listTransaction } from "../api/generalAPI.js";
//Redux
import { useDispatch } from "react-redux";
import { setTransaction } from "../utils/redux/actions.js";

import IEModal from "../components/Modal/IE/IE.js";

//Redux
import { useSelector } from "react-redux";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { username, userId } = useSelector((state) => state);
  const [Income, setIncome] = useState(0)
  const [Expense, setExpense] = useState(0)

  const listTransactions = () => {
    listTransaction({ userprofile: userId })
      .then((res) => {
        if (res.meta == 2001) {
          if (res.datas.length == 0) {
            console.log("No Data Found!!!");
            return true;
          }
          //Calculate Income
          const filterIncome = res.datas.filter((item) => item.type == "Income")
          var income = 0;
          for(var i = 0; i < filterIncome.length; i++){
            income = income + Number(filterIncome[i].amount)
          }
          setIncome(income);

          //Calculate Expense
          const filterExpense = res.datas.filter((item) => item.type == "Expense")
          var expense = 0;
          for(var i = 0; i < filterExpense.length; i++){
            expense = expense + Number(filterExpense[i].amount)
          }
          setExpense(expense)

          dispatch(setTransaction(res.datas));
        }
      })
      .catch((err) => {
        console.log("Err", err);
      });
  }
  useEffect(() => {
    listTransactions();
    const unsubscribe = navigation.addListener('focus', () => {
      listTransactions();
    });
    return unsubscribe;
  }, [navigation, userId]);
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageTitle>Hello,</PageTitle>
        <PageTitleName>{username}</PageTitleName>
        <BalanceBackground>
          <BalanceText>
            <BalanceText2>$ </BalanceText2>{Income - Expense}
          </BalanceText>
          <BalanceText3>Current Balance</BalanceText3>
          <BalanceText4>Available</BalanceText4>
        </BalanceBackground>
        <IEContainer>
          <IEBackground IE>
            <IEText1>
              <BalanceText2>$ </BalanceText2>{Income}
            </IEText1>
            <IEText2>Income</IEText2>
          </IEBackground>
          <IEBackground>
            <IEText1>
              <BalanceText2>$ </BalanceText2>{Expense}
            </IEText1>
            <IEText2>Expense</IEText2>
          </IEBackground>
        </IEContainer>
        <IELists />
      </InnerContainer>
    </StyledContainer>
  );
};

const IELists = ({ }) => {
  const [selectedTab, setselectedTab] = useState(0);
  const IETab = ["All", "Income", "Expense"];
  const transaction = useSelector((state) => state.transaction);
  const FilterIncome = transaction.filter((item) => item.type == "Income");
  const FilterExpense = transaction.filter((item) => item.type == "Expense");
  return (
    <StyledContainer>
      <InnerContainer>
        <IEListTextContainer>
          {IETab.map((ie, index) => (
            <TouchableOpacity key={index} onPress={() => setselectedTab(index)}>
              <IEListText style={[index == selectedTab && style.activeIEText]}>
                {ie}
              </IEListText>
            </TouchableOpacity>
          ))}
        </IEListTextContainer>

        {selectedTab == 0 && (
          <TransactionContainer>
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              data={transaction}
              ListEmptyComponent={
                <NoTransactionView>
                  <LottieView
                    style={{ width: "40%", aspectRatio: 1 }}
                    source={require("../assets/icons/13525-empty.json")}
                    autoPlay
                  />
                </NoTransactionView>
              }
              renderItem={({ item }) => {
                return (
                  <TransactionLists
                    name={item.name}
                    iconName={item.iconName}
                    amount={item.amount}
                    item={item}
                  />
                );
              }}
            />
          </TransactionContainer>
        )}
        {selectedTab == 1 && (
          <TransactionContainer>
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              data={FilterIncome}
              ListEmptyComponent={
                <NoTransactionView>
                  <LottieView
                    style={{ width: "40%", aspectRatio: 1 }}
                    source={require("../assets/icons/13525-empty.json")}
                    autoPlay
                  />
                </NoTransactionView>
              }
              renderItem={({ item }) => {
                if (FilterIncome.length) {
                  return (
                    <TransactionLists
                      name={item.name}
                      iconName={item.iconName}
                      amount={item.amount}
                      item={item}
                    />
                  );
                }
              }}
            />
          </TransactionContainer>
        )}
        {selectedTab == 2 && (
          <TransactionContainer>
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              data={FilterExpense}
              ListEmptyComponent={
                <NoTransactionView>
                  <LottieView
                    style={{ width: "40%", aspectRatio: 1 }}
                    source={require("../assets/icons/13525-empty.json")}
                    autoPlay
                  />
                </NoTransactionView>
              }
              renderItem={({ item }) => {
                if (FilterExpense.length) {
                  return (
                    <TransactionLists
                      name={item.name}
                      iconName={item.iconName}
                      amount={item.amount}
                      item={item}
                    />
                  );
                }
              }}
            />
          </TransactionContainer>
        )}
      </InnerContainer>
    </StyledContainer>
  );
};

const TransactionLists = ({ name, amount, iconName, item }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TransactionTouch onPress={() => setModalVisible(true)}>
        <TransactionItemWrapper>
          <TransactionLeftWrapper>
            <View>
              <IEIconBackground>
                <IEIcon source={iconName} />
              </IEIconBackground>
            </View>
            <View>
              <TransactionText1>{name}</TransactionText1>
            </View>
          </TransactionLeftWrapper>
          <TransactionRightWrapper>
            <>
              {item.type == "Income" && (
                <TransactionAmount style={style.income}>
                  <BalanceText2 style={style.income}>$ </BalanceText2>
                  {amount}
                </TransactionAmount>
              )}
              {item.type == "Expense" && (
                <TransactionAmount style={style.expense}>
                  <BalanceText2 style={style.expense}>$ </BalanceText2>
                  {amount}
                </TransactionAmount>
              )}
            </>
          </TransactionRightWrapper>
        </TransactionItemWrapper>
      </TransactionTouch>
      <IEModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        item={item}
      />
    </>
  );
};


const style = StyleSheet.create({
  activeIEText: {
    color: COLOR.quinary,
  },
  income: {
    color: COLOR.income,
  },
  expense: {
    color: COLOR.expense,
  },
});

export default Home;

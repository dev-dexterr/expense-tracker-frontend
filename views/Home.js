import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import COLOR from '../utils/colors.js';
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
  ModalView,
  CenteredModalView,
  TitleText,
  IEIconBackgroundModal,
  IEIconModal,
  ModalIconContainer,
  ModalContentContainer,
  ModalBackgroundButton,
  AmountText,
  ModalRightWrapper,
  ModalLeftWrapper,
  ModalItemWrapper,
  ContentText,
  DynamicContentText,
  ModalBackgroundButton2
} from "../components/HomeStyles";

//Lottie
import LottieView from "lottie-react-native";

import { useNavigation } from "@react-navigation/native";

//Redux
import { useSelector } from "react-redux";

//Font Awesome Icons
import { Feather } from "@expo/vector-icons";

//SAMPLE DATA TESTING
import sampledata from "../utils/constants/sampleData.js";

const Home = () => {
  const {username}= useSelector((state) => state);

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
  const FilterIncome = sampledata.filter(item => item.type == "Income")
  const FilterExpense = sampledata.filter(item => item.type == "Expense")
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
              data={sampledata}
              ListEmptyComponent={<NoTransactionView>
                <LottieView
                  style={{ width: "40%", aspectRatio: 1 }}
                  source={require("../assets/icons/13525-empty.json")}
                  autoPlay
                />
              </NoTransactionView>}
              renderItem={({ item }) => {
                if (sampledata.length) {
                  return (
                    <TransactionLists
                      name={item.name}
                      iconName={item.iconName}
                      amount={item.amount}
                      item={item}
                    />
                  )
                }
              }
              }
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
              ListEmptyComponent={<NoTransactionView>
                <LottieView
                  style={{ width: "40%", aspectRatio: 1 }}
                  source={require("../assets/icons/13525-empty.json")}
                  autoPlay
                />
              </NoTransactionView>}
              renderItem={({ item }) => {
                if (FilterIncome.length) {
                  return (
                    <TransactionLists
                      name={item.name}
                      iconName={item.iconName}
                      amount={item.amount}
                      item={item}
                    />
                  )
                }
              }
              }
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
              ListEmptyComponent={<NoTransactionView>
                <LottieView
                  style={{ width: "40%", aspectRatio: 1 }}
                  source={require("../assets/icons/13525-empty.json")}
                  autoPlay
                />
              </NoTransactionView>}
              renderItem={({ item }) => {
                if (FilterExpense.length) {
                  return (
                    <TransactionLists
                      name={item.name}
                      iconName={item.iconName}
                      amount={item.amount}
                      item={item}
                    />
                  )
                }
              }
              }
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
            <View>
              <TransactionAmount>
                <BalanceText2>$ </BalanceText2>
                {amount}
              </TransactionAmount>
            </View>
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

const IEModal = ({ modalVisible, setModalVisible, item }) => {
  const navigation = useNavigation();
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <CenteredModalView>
        <ModalView>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <ModalBackgroundButton>
              <Feather name="x-circle" size={24} />
            </ModalBackgroundButton>
          </TouchableOpacity>
          <ModalIconContainer>
            <IEIconBackgroundModal>
              <IEIconModal source={item.iconName} />
            </IEIconBackgroundModal>
          </ModalIconContainer>
          {item.type == 'Income' &&
            <>
              <AmountText style={style.income}>
                <BalanceText2 style={style.income}>$ </BalanceText2>
                {item.amount}
              </AmountText>
              <TitleText>{item.name}</TitleText>
            </>
          }
          {item.type == 'Expense' &&
            <>
              <AmountText style={style.expense}>
                <BalanceText2 style={style.expense}>$ </BalanceText2>
                {item.amount}
              </AmountText>
              <TitleText>{item.name}</TitleText>
            </>
          }
          <ModalContentContainer>
            <ModalItemWrapper>
              <ModalLeftWrapper>
                <ContentText>Transaction Date :</ContentText>
              </ModalLeftWrapper>
              <ModalRightWrapper>
                <View>
                  <DynamicContentText>{item.datetime}</DynamicContentText>
                </View>
              </ModalRightWrapper>
            </ModalItemWrapper>

            <ModalItemWrapper>
              <ModalLeftWrapper>
                <ContentText>Remark :</ContentText>
              </ModalLeftWrapper>
              <ModalRightWrapper>
                <View>
                  <DynamicContentText>{item.remark}</DynamicContentText>
                </View>
              </ModalRightWrapper>
            </ModalItemWrapper>
          </ModalContentContainer>
          <TouchableOpacity onPress={()=>{navigation.navigate("EditTransaction", item); setModalVisible(!modalVisible)}}>
            <ModalBackgroundButton2>
                <Feather name="edit" size={24} color="black" />
            </ModalBackgroundButton2>
          </TouchableOpacity>
        </ModalView>
      </CenteredModalView>
    </Modal>
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
  }
});

export default Home;

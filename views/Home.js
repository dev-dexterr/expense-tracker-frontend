import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Alert, Modal } from "react-native";
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
  NoTransactionText,
  ModalView,
  CenteredModalView,
  TitleText,
  IEIconBackgroundModal,
  IEIconModal,
  ModalIconContainer,
  ModalContentContainer,
  ModalBackgroundButton
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
                  item={item}
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
                  item={item}
                />
              )}
            />
          </TransactionContainer>
        }
        {
          selectedTab == 2 &&
          <TransactionContainer>
            <NoTransactionView>
              <LottieView style={{ width: '40%', aspectRatio: 1 }}
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

const TransactionLists = ({ name, amount, icon, item }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TransactionTouch onPress={() => setModalVisible(true)}>
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
      <IEModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        item={item}
      />
    </>
  );
};

const IEModal = ({ modalVisible, setModalVisible, item }) => {
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
          <ModalIconContainer>
            <IEIconBackgroundModal>
              <IEIconModal source={item.icon} />
            </IEIconBackgroundModal>
          </ModalIconContainer>
          <ModalContentContainer>
            <TitleText>{item.name}</TitleText>
          </ModalContentContainer>

          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
          >
            <ModalBackgroundButton>
              <Text>Close</Text>
            </ModalBackgroundButton>
          </TouchableOpacity>
        </ModalView>
      </CenteredModalView>
    </Modal>
  )
}

const style = StyleSheet.create({
  activeIEText: {
    color: "black",
  },
});

export default Home;

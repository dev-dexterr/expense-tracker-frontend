import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  View,
  Modal,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";
import COLOR from "../../../utils/colors.js";
import {
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
  ModalBackgroundButton2,
  ModalBackgroundContainer,
  BalanceText2,
} from "./IEStyles.js";

import moment from "moment";
//Font Awesome Icons
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setTID } from "../../../utils/redux/actions.js";

const IEModal = ({ modalVisible, setModalVisible, item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
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
              <IEIconModal source={item.iconName} />
            </IEIconBackgroundModal>
          </ModalIconContainer>
          {item.type == "Income" && (
            <>
              <AmountText style={style.income}>
                <BalanceText2 style={style.income}>$ </BalanceText2>
                {item.amount}
              </AmountText>
              <TitleText>{item.name}</TitleText>
            </>
          )}
          {item.type == "Expense" && (
            <>
              <AmountText style={style.expense}>
                <BalanceText2 style={style.expense}>$ </BalanceText2>
                {item.amount}
              </AmountText>
              <TitleText>{item.name}</TitleText>
            </>
          )}
          <ModalContentContainer>
            <ModalItemWrapper>
              <ModalLeftWrapper>
                <ContentText>Transaction Date :</ContentText>
              </ModalLeftWrapper>
              <ModalRightWrapper>
                <View>
                  <DynamicContentText>
                    {moment(item.datetime).format("MMM Do YYYY, h:mm a")}
                  </DynamicContentText>
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
            <ModalBackgroundContainer>
                <View>
              <TouchableOpacity
                onPress={() => {
                  moment(item.datetime);
                  dispatch(setTID(item.id));
                  navigation.navigate("EditTransaction", item),
                    setModalVisible(!modalVisible);
                }}
              >
                <ModalBackgroundButton2>
                  <Feather name="edit" size={24} color="black" />
                </ModalBackgroundButton2>
              </TouchableOpacity>
              </View>
                <View>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <ModalBackgroundButton>
                      <Feather name="x-circle" size={24} />
                    </ModalBackgroundButton>
                  </TouchableOpacity>
                </View>
            </ModalBackgroundContainer>
          </ModalContentContainer>
          {/* <TouchableOpacity
                        onPress={() => {
                            moment(item.datetime);
                            dispatch(setTID(item.id));
                            navigation.navigate("EditTransaction", item),
                                setModalVisible(!modalVisible);
                        }}
                    >
                        <ModalBackgroundButton2>
                            <Feather name="edit" size={24} color="black" />
                        </ModalBackgroundButton2>
                    </TouchableOpacity> */}
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
  },
});

export default IEModal;

import React, { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, View, Text, Image, ActionSheetIOS } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  StyledContainer,
  InnerContainer,
  TransactionView,
  TransactionTitle,
  TransactionDollar,
  TransactionDollarView,
  TransactionTextInput,
  CategoryTouch,
  CategoryItemWrapper,
  CategoryLeftWrapper,
  CategoryRightWrapper,
  CategoryText,
  CategoryIconBackground,
  CategoryIcon,
  StyledFormArea,
  StyledButton,
  StyledButtonText,
  IEIcon
} from "../components/AddTransactionStyles.js";

import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper.js";

//Icon
import { Feather } from "@expo/vector-icons";

import moment from 'moment';

import {meta} from '../utils/enum.js'

import { addTransaction } from "../api/generalAPI.js";

//Redux
import { shallowEqual, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setRoute, setUserID } from "../utils/redux/actions.js";

//formik
import { Formik } from "formik";
import TextInput from "../components/textinput/TextInput.js";
import DatePicker from "../components/datetimepicker/date.js";

const AddTransaction = ({ route, navigation }) => {
  const dispatch = useDispatch();
  let data = route.params;
  const [datevalue, setDate] = useState(new Date());
  const user_id = useSelector((state) => state.userId, shallowEqual);
  const onChange = (e, newDate) => {
    setDate(newDate);
  };
  useEffect(() => {
    dispatch(setRoute('AddTransaction'))
  },[])

  const handleAddTransaction = async (credentials) => {
    addTransaction(credentials).then((res)=>{
      if(res.meta == meta.OK){
        console.log(res.message);
        navigation.navigate('Home')
      }
    }).catch(err=>{
      console.log(err);
    })
  }

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <InnerContainer>
          <TransactionView>
            <TransactionTitle>Add Transaction</TransactionTitle>
          </TransactionView>
          <Formik
            initialValues={{ amount: "", remark: "", datetime: "", type: "", name: "", iconName: "", userprofile: "" }}
            onSubmit={(values) => {
              if (values.amount == "") {
                console.log("Please Fill in the Fields");
                console.log(values);
              } else {
                values.type = data.type;
                values.name = data.name;
                values.iconName = data.iconName;
                values.datetime = moment(datevalue);
                values.userprofile = user_id
                handleAddTransaction(values);
              }
            }}
          >{
              ({ handleBlur, handleChange, handleSubmit, values }) => (
                <StyledFormArea>
                  <TransactionDollarView>
                    <TransactionDollar>$ </TransactionDollar>
                    <TransactionTextInput
                      placeholder="0"
                      keyboardType="decimal-pad"
                      values={values.amount}
                      onBlur={handleBlur("amount")}
                      onChangeText={handleChange("amount")}
                    />
                  </TransactionDollarView>
                  <CategoryTouch onPress={() => navigation.navigate("Category")}>
                    <Categories name={data?.name} iconName={data?.iconName} type={data?.type} />
                  </CategoryTouch>
                  <View>
                    <DatePicker label="Date" value={datevalue} onChange={onChange} />
                  </View>
                  <TextInput
                    label="Remark"
                    placeholder="(Optional)"
                    values={values.remark}
                    onBlur={handleBlur("remark")}
                    onChangeText={handleChange("remark")}
                  />
                  <StyledButton onPress={handleSubmit}>
                    <StyledButtonText>Add</StyledButtonText>
                  </StyledButton>
                </StyledFormArea>

              )
            }
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

const Categories = ({ name, iconName, type }) => {
  const [cname, setcname] = useState()
  useEffect(() => {
    if (name == undefined) {
      setcname("Choose Category")
    } else {
      setcname(name);
    }
  }, [name]);
  return (
    <CategoryItemWrapper>
      <CategoryLeftWrapper>
        <View>
          <CategoryIconBackground>
            <CategoryIcon>
              <IEIcon source={iconName} />
            </CategoryIcon>
          </CategoryIconBackground>
        </View>
        <View>
          <CategoryText>{cname}</CategoryText>
        </View>
      </CategoryLeftWrapper>
      <CategoryRightWrapper>
        <View>
          <Feather name="chevron-right" size={24} color="black" />
        </View>
      </CategoryRightWrapper>
    </CategoryItemWrapper>
  );
};

export default AddTransaction;

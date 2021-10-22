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

//Redux
import { useDispatch } from "react-redux";
import { setRoute } from "../utils/redux/actions.js";

//formik
import { Formik } from "formik";
import TextInput from "../components/textinput/TextInput.js";
import DatePicker from "../components/datetimepicker/date.js";

const AddTransaction = ({ route, navigation }) => {
  const dispatch = useDispatch();
  let data = route.params;
  const [datevalue, setDate] = useState(new Date());
    const onChange = (e, newDate) => {
        setDate(newDate);
    };
  useEffect(() => {
    dispatch(setRoute('AddTransaction'))
  })
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <InnerContainer>
          <TransactionView>
            <TransactionTitle>Add Transaction</TransactionTitle>
          </TransactionView>
          <Formik
            initialValues={{ amount: "", remark: "", date: "", type: "", name: "", iconName: "" }}
            onSubmit={(values) => {
              if (values.amount == "") {
                console.log("Please Fill in the Fields");
                console.log(values);
              } else {
                values.type = data.type;
                values.name = data.name;
                values.iconName = data.iconName;
                values.date = moment(datevalue).format("MMM Do YY hh:mm a"); 
                console.log(values);
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
                    <DatePicker label="Date" value={datevalue} onChange={onChange}/>
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

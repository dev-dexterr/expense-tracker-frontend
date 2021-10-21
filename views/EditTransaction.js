import React, { useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  View,
  Text,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper.js";

import {
  StyledContainer,
  InnerContainer,
  EditTransactionTitle,
  TransactionDollar,
  TransactionDollarView,
  TransactionTextInput,
  StyledFormArea,
  CategoryText,
  CategoryIconBackground,
  CategoryIcon,
  CategoryRightWrapper,
  CategoryLeftWrapper,
  CategoryItemWrapper,
  CategoryTouch,
  IEIcon,
  StyledButton,
  StyledButtonText,
} from "../components/AddTransactionStyles.js";

//Icon
import { Feather } from "@expo/vector-icons";

//Redux
import { useDispatch } from "react-redux";
import { setRoute } from "../utils/redux/actions.js";

//formik
import { Formik } from "formik";
import TextInput from "../components/textinput/TextInput.js";

const EditTransaction = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const data = route.params;
  useEffect(() => {
    console.log("Params", data);
    dispatch(setRoute("EditTransaction"));
  });
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <InnerContainer>
          <EditTransactionTitle>Edit Transaction</EditTransactionTitle>
          <Formik
            initialValues={{
              amount: data.amount,
              remark: data.remark,
              type: data.type,
              name: data.name,
              iconName: data.iconName,
            }}
            onSubmit={(values) => {
              if (
                values.amount == "" ||
                values.type == "" ||
                values.name == "" ||
                values.iconName == ""
              ) {
                console.log("Please Fill in the Fields");
              } else {
                values.type = data.type;
                values.name = data.name;
                values.iconName = data.iconName;
                console.log("Edit Values", values);
              }
            }}
          >
            {({
              handleBlur,
              handleChange,
              handleSubmit,
              values,
              handleDelete,
            }) => (
              <StyledFormArea>
                <TransactionDollarView>
                  <TransactionDollar>$ </TransactionDollar>
                  <TransactionTextInput
                    placeholder={data.amount}
                    keyboardType="decimal-pad"
                    onBlur={handleBlur("amount")}
                    onChangeText={handleChange("amount")}
                    values={values.amount}
                  />
                </TransactionDollarView>
                <CategoryTouch onPress={() => navigation.navigate("Category")}>
                  <Categories
                    name={data?.name}
                    iconName={data?.iconName}
                    type={data?.type}
                    onBlur={handleBlur("name")}
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("iconName")}
                    onChangeText={handleChange("iconName")}
                    onBlur={handleBlur("type")}
                    onChangeText={handleChange("type")}
                  />
                </CategoryTouch>
                <TextInput
                  label="Remark"
                  placeholder={data.remark}
                  values={values.remark}
                  onBlur={handleBlur("remark")}
                  onChangeText={handleChange("remark")}
                />
                <StyledButton onPress={handleSubmit}>
                  <StyledButtonText>Edit</StyledButtonText>
                </StyledButton>
                <StyledButton onPress={handleDelete}>
                  <StyledButtonText>Delete</StyledButtonText>
                </StyledButton>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

const Categories = ({ name, iconName, type }) => {
  const [cname, setcname] = useState();
  useEffect(() => {
    setcname(name);
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

export default EditTransaction;

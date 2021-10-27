import React, { useEffect, useState } from "react";
import {View} from "react-native";
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

import moment from 'moment';

import {meta} from '../utils/enum.js'

//Redux
import { useDispatch , useSelector } from "react-redux";
import { setRoute } from "../utils/redux/actions.js";

import { editTransaction , deleteTransaction } from "../api/generalAPI.js";

//formik
import { Formik } from "formik";
import TextInput from "../components/textinput/TextInput.js";
import DatePicker from "../components/datetimepicker/date.js";

const EditTransaction = ({ route, navigation }) => {
  const dispatch = useDispatch();
  //const transaction = useSelector((state) => state.transaction);
  const data = route.params;
  const user_id = useSelector((state) => state.userId);
  const [datevalue, setDate] = useState(new Date());
  const onChange = (e, newDate) => {
    setDate(newDate);
  };
  useEffect(() => {
    console.log("Params", data);
    dispatch(setRoute("EditTransaction"));
  }, []);

  const handleEditTransaction = async (credentials) => {
    credentials.id = data.id;
    credentials.userprofile = user_id;
    editTransaction(credentials).then((res)=>{
      if(res.meta == meta.OK){
        navigation.navigate('Home')
        console.log(res);
      }
    }).catch(err => {
      console.log(err);
    })
  }

  const handleDelete = async () => {
    console.log("Deleted Pressed!!!");
  }

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
              date: moment(data.datetime),
              iconName: data.iconName
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
                data.datetime = moment(datevalue);
                values.date = moment(data.datetime);
                //console.log("Edit Values", values);
                handleEditTransaction(values);
              }
            }}
          >
            {({ handleBlur, handleChange, handleSubmit, values}) => (
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
                <View>
                  <DatePicker label="Date" value={datevalue} onChange={onChange} />
                </View>
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
            )
            }
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

import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledTextInput,
  StyledInputLabel,
  StyledButton,
  StyledButtonText,
  RightIcon,
  ForgetText,
  ForgetView,
  ExtraView,
  ExtraText,
  ExtraTextLink,
  ExtraLinkContent,
} from "../components/LoginStyles";
//formik
import { Formik } from "formik";
//Redux
import { useDispatch } from "react-redux";
import { setUsername, setEmail, setToken, setID } from "../utils/redux/actions.js";

import { getterToken, setterToken } from "../utils/auth.js";

import { login } from "../api/generalAPI";
import { useNavigation } from "@react-navigation/native";
//Keyboard Avoiding View
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";


//Text Input
import TextInput from "../components/textinput/TextInput.js";

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleLogin = async (credentials, setSubmitting) => {
    login(credentials)
      .then((res) => {
        const data = res.data;
        dispatch(setUsername(data.username));
        dispatch(setEmail(data.email));
        dispatch(setID(data.login))
        setterToken(data.token);
        dispatch(setToken(data.token))
      })
      .catch((err) => {
        setSubmitting(false);
        console.log(err);
      });
  };

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageTitle>Log in {">>"} </PageTitle>
          <SubTitle>Continue where you stopped!</SubTitle>
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
              if (values.username == "" || values.password == "") {
                console.log("Please Fill in the Fields");
                setSubmitting(false);
              } else {
                handleLogin(values, setSubmitting);
              }
            }}
          >
            {({
              handleBlur,
              handleChange,
              handleSubmit,
              values,
              isSubmitting,
            }) => (
              <StyledFormArea>
                {/* //Username */}
                <TextInput
                  label="username"
                  placeholder="name"
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.username}
                />
                {/* //Password */}
                <TextInput
                  label="Password"
                  placeholder="* * * * * * * * *"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                {/* <ForgetView>
                  <ForgetText>Forget Password?</ForgetText>
                </ForgetView> */}
                {!isSubmitting && (
                  <StyledButton onPress={handleSubmit}>
                    <StyledButtonText>Login</StyledButtonText>
                  </StyledButton>
                )}

                {isSubmitting && (
                  <StyledButton disabled={true}>
                    <ActivityIndicator size="small" color="#FFFFFF" />
                  </StyledButton>
                )}

                <ExtraView>
                  <ExtraText>Don't have an Account?</ExtraText>
                  <ExtraTextLink onPress={() => navigation.navigate("Signup")}>
                    <ExtraLinkContent>Sign up</ExtraLinkContent>
                  </ExtraTextLink>
                </ExtraView>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default Login;

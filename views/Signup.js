import React, { useState } from "react";
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
  ExtraView,
  ExtraText,
  ExtraTextLink,
  ExtraLinkContent,
} from "../components/SignupStyle";
//formik
import { Formik } from "formik";

//Text Input
import TextInput from "../components/textinput/TextInput.js";

import { register } from "../api/generalAPI.js";

//Keyboard Avoiding View
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

const Signup = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);

  const handleSignup = async (credentials) => {
    register(credentials).then((res) => {
      const data = res.datas;
      console.log("Register: ", data);
      navigation.navigate("Login");
    }).
    catch((err) => {
      console.log(err);
    })
  };

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageTitle>Sign Up {">"} </PageTitle>
          <SubTitle>Create an account with us</SubTitle>
          <Formik
            initialValues={{ email: "test2@example.com", password: "123456", username: "test2" }}
            onSubmit={(values, { setSubmitting }) => {
              if (
                values.username == "" ||
                values.email == "" ||
                values.password == ""
              ) {
                console.log("Please Fill in the Fields");
                setSubmitting(false);
              } else {
                handleSignup(values, setSubmitting);
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
                {/* //Email Address */}
                <TextInput
                  label="Email Address"
                  placeholder="name@example.com"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
                {/* //Username */}
                <TextInput
                  label="Username"
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
                {!isSubmitting && (
                  <StyledButton onPress={handleSubmit}>
                    <StyledButtonText>Create Account</StyledButtonText>
                  </StyledButton>
                )}

                {isSubmitting && (
                  <StyledButton disabled={true}>
                    <ActivityIndicator size="small" color="#FFFFFF" />
                  </StyledButton>
                )}

                <ExtraView>
                  <ExtraText>Already have an Account?</ExtraText>
                  <ExtraTextLink onPress={() => navigation.navigate("Login")}>
                    <ExtraLinkContent>Log in</ExtraLinkContent>
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

export default Signup;

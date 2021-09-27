import React, { useState } from "react";
import { View } from "react-native";
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

//Icons
import { Ionicons } from "@expo/vector-icons";

//Keyboard Avoiding View
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

const Signup = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageTitle>Sign Up {">"} </PageTitle>
          <SubTitle>Create an account with us</SubTitle>
          <Formik
            initialValues={{ email: "", password: "", username: "" }}
            onSubmit={(values) => {
              console.log("Sign-up values", values);
            }}
          >
            {({ handleBlur, handleChange, handleSubmit, values }) => (
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
                {/* //Email Address */}
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
                <StyledButton onPress={handleSubmit}>
                  <StyledButtonText>Create Account</StyledButtonText>
                </StyledButton>
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

const TextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons size={30} name={hidePassword ? "md-eye-off" : "md-eye"} />
        </RightIcon>
      )}
    </View>
  );
};

export default Signup;

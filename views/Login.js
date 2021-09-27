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
  ForgetText,
  ForgetView,
  ExtraView,
  ExtraText,
  ExtraTextLink,
  ExtraLinkContent,
} from "../components/LoginStyles";
//formik
import { Formik } from "formik";

//API Client
import axios from "axios";

//Icons
import { Ionicons } from "@expo/vector-icons";

//Keyboard Avoiding View
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

const Login = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);

  const handleLogin = async (credentials, setSubmitting) => {
    const url = "http://192.168.31.159:5000/login";
    //const url = "http://192.168.1.164:5000/login";
    axios
      .post(url, credentials)
      .then((res) => {
        const result = res.data;
        const { data } = result;
        navigation.navigate('HomeTabs', { ...data });
        setSubmitting(false);
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
              if (values.username == '' || values.password == '') {
                console.log("Please Fill in the Fields")
                setSubmitting(false);
              } else {
                handleLogin(values, setSubmitting);
              }
            }}
          >
            {({ handleBlur, handleChange, handleSubmit, values, isSubmitting }) => (
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
                <ForgetView>
                  <ForgetText>Forget Password?</ForgetText>
                </ForgetView>
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

export default Login;

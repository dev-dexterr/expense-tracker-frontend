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
import TextInput from "../components/textinput/TextInput.js"

//API Client
import axios from "axios";

//Base URL
import baseURl from "../utils/api.js";

//Keyboard Avoiding View
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

const Signup = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);

  const handleSignup = async (credentials, setSubmitting) => {
    const url = `${baseURl.BASE_API_URL_HOME + baseURl.REGISTER}`;
    axios
      .post(url, credentials)
      .then(() => {
        navigation.navigate("Login");
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
          <PageTitle>Sign Up {">"} </PageTitle>
          <SubTitle>Create an account with us</SubTitle>
          <Formik
            initialValues={{ email: "", password: "", username: "" }}
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

// const TextInput = ({
//   label,
//   icon,
//   isPassword,
//   hidePassword,
//   setHidePassword,
//   ...props
// }) => {
//   return (
//     <View>
//       <StyledInputLabel>{label}</StyledInputLabel>
//       <StyledTextInput {...props} />
//       {isPassword && (
//         <RightIcon onPress={() => setHidePassword(!hidePassword)}>
//           <Ionicons size={30} name={hidePassword ? "md-eye-off" : "md-eye"} />
//         </RightIcon>
//       )}
//     </View>
//   );
// };

export default Signup;

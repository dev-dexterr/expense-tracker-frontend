import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, TouchableWithoutFeedback } from "react-native";
import {
  StyledContainer,
  InnerContainer,
  ProfileDetailTitle,
  StyledFormArea,
  StyledButton,
  StyledButtonText,
} from "../components/ProfileStyles";

//Text Input
import TextInput from "../components/textinput/TextInput.js";

import { useNavigation } from "@react-navigation/native";

//Redux
import { useSelector } from "react-redux";

import { Formik } from "formik";

const ProfileDetail = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const { username, email } = useSelector((state) => state);
  const navigation = useNavigation();

  const handlePassChange = () => {
    navigation.navigate('PasswordChange');
  }

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <ProfileDetailTitle>Edit Profile</ProfileDetailTitle>
        <Formik
          initialValues={{ username: username, password: "", email: email }}
          onSubmit={(values, { setSubmitting }) => {
            if (
              values.username == "" ||
              values.password == "" ||
              values == ""
            ) {
              console.log("Please Fill in the Fields");
              setSubmitting(false);
            } else {
              console.log("updated Values", values);
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
            <SafeAreaView>
              <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <StyledFormArea>
                    {/* //Username */}
                    <TextInput
                      label="username"
                      placeholder="name"
                      onChangeText={handleChange("username")}
                      onBlur={handleBlur("username")}
                      value={values.username}
                    />

                    {/* //Email Address */}
                    <TextInput
                      label="Email Address"
                      placeholder="name@example.com"
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      keyboardType="email-address"
                    />
                    {!isSubmitting && (
                      <>
                        <StyledButton onPress={handleSubmit}>
                          <StyledButtonText>Save</StyledButtonText>
                        </StyledButton>
                        <StyledButton onPress={handlePassChange}>
                          <StyledButtonText>Change Password</StyledButtonText>
                        </StyledButton>
                      </>
                    )}
                    {isSubmitting && (
                      <StyledButton disabled={true}>
                        <ActivityIndicator size="small" color="#FFFFFF" />
                      </StyledButton>
                    )}
                  </StyledFormArea>
                </TouchableWithoutFeedback>
              </KeyboardAvoidingView>
            </SafeAreaView>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

export default ProfileDetail;

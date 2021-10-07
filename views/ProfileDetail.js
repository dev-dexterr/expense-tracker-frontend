import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
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

//Redux
import { useSelector } from "react-redux";

import { Formik } from "formik";

const ProfileDetail = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const { username, email } = useSelector((state) => state.userReducer);
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
                  <StyledButtonText>Save</StyledButtonText>
                </StyledButton>
              )}
              {isSubmitting && (
                <StyledButton disabled={true}>
                  <ActivityIndicator size="small" color="#FFFFFF" />
                </StyledButton>
              )}
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

export default ProfileDetail;

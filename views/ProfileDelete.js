import React from "react";
import COLOR from "../utils/colors.js"
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, TouchableWithoutFeedback, ActivityIndicator } from "react-native";
import { Formik } from "formik";
import { shallowEqual, useSelector } from "react-redux";
import { setterToken } from "../utils/auth.js";
import { meta } from "../utils/enum.js";
import { deleteUser } from "../api/generalAPI.js";
//Text Input
import TextInput from "../components/textinput/TextInput.js";
import { StyledContainer, WarningB, ProfileDetailTitle, InnerContainer, StyledButton, StyledButtonText, OptionTouch, SettingTitle, DeleteWarning, StyledFormArea } from "../components/ProfileStyles.js";

import { useDispatch } from "react-redux";
import {setToken, setUsername , setEmail , setTID , setTransaction} from "../utils/redux/actions.js";

const ProfileDelete = () => {
    const { username } = useSelector((state) => state, shallowEqual);
    const user_id = useSelector((state) => state.userId, shallowEqual);
    const dispatch = useDispatch();

    const handleDelete = async (credentials, setSubmitting) => {
        await deleteUser(user_id).then((res) => {
            if(res.meta == meta.OK){
                setTimeout(() => {
                    setterToken("");
                    dispatch(setToken(null))
                    dispatch(setUsername(null))
                    dispatch(setEmail(null))
                    dispatch(setTID(null))
                    dispatch(setTransaction([]))
                }, 3000);
            }
        }).catch(err => {
            setSubmitting(false);
            console.log(err);
        })
    }

    return (
        <StyledContainer>
            <InnerContainer>
                <ProfileDetailTitle style={{ color: COLOR.expense }}>Delete Profile</ProfileDetailTitle>
                <DeleteWarning>Once you delete your account, there is no going back. Please be certain.</DeleteWarning>
                <DeleteWarning>We will immediately delete all of your <WarningB>transaction</WarningB>, along with all of your <WarningB>profile detail</WarningB>.</DeleteWarning>
                <Formik
                    initialValues={{ username: "", userprofile: "" }}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        if (values.username == "") {
                            console.log("Please Fill in the Fields");
                            setSubmitting(false);
                        } else if (values.username != username) {
                            console.log("Incorrect Username!");
                            resetForm({ values: "" });
                            setSubmitting(false);
                        } else {
                            values.userprofile = user_id;
                            handleDelete(values, setSubmitting);
                        }
                    }}
                >
                    {({ handleBlur, handleChange, handleSubmit, values, isSubmitting }) => (
                        <SafeAreaView>
                            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                    <StyledFormArea>
                                        <TextInput
                                            label="Enter your Username to confirm"
                                            onChangeText={handleChange("username")}
                                            onBlur={handleBlur("username")}
                                            value={values.username}
                                        />
                                        {!isSubmitting && (
                                            <StyledButton onPress={handleSubmit} style={{ backgroundColor: COLOR.expense }}>
                                                <StyledButtonText>Delete Account</StyledButtonText>
                                            </StyledButton>
                                        )}
                                        {isSubmitting && (
                                            <StyledButton disabled={true} style={{ backgroundColor: COLOR.expense }}>
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
    )
}

export default ProfileDelete;
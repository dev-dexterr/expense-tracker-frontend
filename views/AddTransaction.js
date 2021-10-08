import React from "react";
import { FlatList, Pressable, StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StyledContainer, InnerContainer, TransactionView, TransactionTitle, TransactionBackground, TransactionDollar, StyledFormArea, TransactionDollarView, TransactionTextInput } from "../components/AddTransactionStyles.js";

import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper.js";

//Text Input
import TextInput from "../components/textinput/TextInput.js"
//formik
import { Formik } from "formik";

const AddTransaction = () => {
    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <InnerContainer>
                    <TransactionView>
                        <TransactionTitle>Add Transaction</TransactionTitle>
                    </TransactionView>
                    <TransactionDollarView>
                        <TransactionDollar>$ </TransactionDollar>
                        <TransactionTextInput
                            placeholder="0"
                            keyboardType="decimal-pad"
                        />
                    </TransactionDollarView>
                    
                </InnerContainer>
            </StyledContainer>
        </KeyboardAvoidingWrapper>
    )
}
export default AddTransaction;
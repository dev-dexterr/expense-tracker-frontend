import React from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {  StyledContainer, InnerContainer, TransactionView, TransactionTitle, TransactionBackground, TransactionDollar, TransactionDollarView } from "../components/AddTransactionStyles.js";

const AddTransaction = () => {
    return(
        <StyledContainer>
            <InnerContainer>
                <TransactionView>
                    <TransactionTitle>Add Transaction</TransactionTitle>
                </TransactionView>
                <TransactionBackground>
                    <TransactionDollarView>
                        <TransactionDollar>$ </TransactionDollar>
                    </TransactionDollarView>
                </TransactionBackground>
            </InnerContainer>   
        </StyledContainer>
    )
}
export default AddTransaction;
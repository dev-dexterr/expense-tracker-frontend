import React from "react";
import { NoTransactionView } from "./NoTransactionStyles.js"
import LottieView from "lottie-react-native";

const NoTransaction = () => {
    return (
        <NoTransactionView>
            <LottieView
                style={{ width: "40%", aspectRatio: 1 }}
                source={require("../../assets/icons/13525-empty.json")}
                autoPlay
            />
        </NoTransactionView>

    )
}

export default NoTransaction;
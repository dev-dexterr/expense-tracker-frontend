import React, { useEffect, useState} from "react";
import { View, ActivityIndicator, TouchableOpacity, BackHandler } from "react-native";
import { StyledContainer, InnerContainer } from "../components/ChartStyles.js";

const Chart = () => {
    return(
        <StyledContainer>
            <InnerContainer></InnerContainer>
        </StyledContainer>
    )
}

export default Chart;
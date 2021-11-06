import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, TouchableOpacity, BackHandler } from "react-native";
import { StyledContainer, InnerContainer } from "../components/ChartStyles.js";
import PieChart from "../components/pie-chart/PieChart.js";

const Chart = () => {
    return (
        <StyledContainer>
            <InnerContainer>
                <PieChart />
            </InnerContainer>
        </StyledContainer>
    )
}

export default Chart;
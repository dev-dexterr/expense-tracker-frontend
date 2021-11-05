import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Platform, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { VictoryPie } from "victory-native";
import SAMPLE_DATA from "../../utils/constants/sampleData.js";

import { useSelector } from "react-redux";
import { ChartContainer } from "./PieChartStyles.js";

const chartColor = [
    "tomato",
    "orange",
    "gold",
    "cyan",
    "navy",
    "Magenta",
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
]

const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

const RenderChart = () => {
    const TransactionData = useSelector((state) => state.transaction);

    function setSelectTransactionByName(name) {
        let transaction = TransactionData.filter((a) => a.name == name)
        setSelectedTransaction(transaction[0])
    }

    const processData = () => {

        let chartData = TransactionData.map((item) => {
            // let randomColor = Math.floor(Math.random() * 16777215).toString(16); 
            let randomColor = random_hex_color_code();
            let total = Number(item.amount);
            return {
                name: item.name,
                y: total,
                color: randomColor,
                id: item.id
            }
        })
        // filter out categories with no data/expenses
        let filterChartData = chartData.filter(item => item.y > 0)

        // Calculate the total expenses
        let totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0)

        // Calculate percentage and repopulate chart data
        let finalChartData = filterChartData.map((item) => {
            let percentage = (item.y / totalExpense * 100).toFixed(0)
            return {
                label: `${percentage}%`,
                y: item.y,
                color: item.color,
                name: item.name,
                id: item.id
            }
        })
        return finalChartData;
    }

    const RenderExpenseSummary = () => {
        let data = processData();

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity>
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            )
        }

        return (
            <SafeAreaView>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </SafeAreaView>
        )
    }

    const [SelectedTransaction, setSelectedTransaction] = React.useState(null)
    let chartData = processData();
    let colorScales = chartColor
    return (
        <>
            <ChartContainer>
                <VictoryPie
                    data={chartData}
                    label={(item) => `${item.y}`}
                    colorScale={colorScales}
                    radius={({ datum }) => (SelectedTransaction && SelectedTransaction.name == datum.name) ? 450 * 0.4 : 450 * 0.4 - 10}
                    innerRadius={80}
                    labelRadius={({ innerRadius }) => (450 * 0.4 + innerRadius) / 2.5}
                    style={{
                        labels: { fill: "black" }
                    }}
                    events={[{
                        target: "data",
                        eventHandlers: {
                            onPress: () => {
                                return [{
                                    target: "labels",
                                    mutation: (props) => {
                                        let TransactionName = chartData[props.index].name
                                        setSelectTransactionByName(TransactionName)
                                    }
                                }]
                            }
                        }
                    }]}
                />
            </ChartContainer>
            <RenderExpenseSummary />
        </>
    )
}


export default RenderChart;
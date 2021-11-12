import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Platform, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { VictoryPie } from "victory-native";
import COLOR from '../../utils/colors.js';
import { useSelector } from "react-redux";
import { ChartContainer, ListTouch, ListBoxView, ListCategoryView, ListCategoryText, ListCalView, Caltext, IEListTextContainer, IEListText } from "./PieChartStyles.js";
import NoTransaction from "../../components/notransaction/NoTransaction.js";
import chartColor from "../../utils/constants/chartColor.js"

const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

const RenderChart = () => {
    const TransactionData = useSelector((state) => state.transaction);
    const FilterIncome = TransactionData.filter((item) => item.type == "Income");
    const FilterExpense = TransactionData.filter((item) => item.type == "Expense");
    const IETab = ["Income", "Expense"];
    const [selectedTab, setselectedTab] = useState(0);

    function setSelectTransactionByName(name) {
        let transaction = TransactionData.filter((a) => a.name == name)
        setSelectedTransaction(transaction[0])
    }

    const processData = (transactiondata) => {
        let chartData = transactiondata.map((item, index) => {
            let total = Number(item.amount);
            return {
                name: item.name,
                y: total,
                color: chartColor[index],
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

    const RenderExpenseSummary = ({item}) => {
        let data = processData(item);
        const renderItem = ({ item }) => {
            return (
                <ListTouch style={{ backgroundColor: (SelectedTransaction && SelectedTransaction.name == item.name) ? item.color : COLOR.primary }} onPress={
                    () => {
                        let transactionName = item.name
                        setSelectTransactionByName(transactionName)
                    }
                }>
                    <ListCategoryView>
                        <ListBoxView style={{ backgroundColor: (SelectedTransaction && SelectedTransaction.name == item.name) ? item.color : item.color }}></ListBoxView>
                        <ListCategoryText style={{ color: (SelectedTransaction && SelectedTransaction.name == item.name) ? COLOR.primary : COLOR.secondary }}>{item.name}</ListCategoryText>
                    </ListCategoryView>
                    <ListCalView>
                        <Caltext style={{ color: (SelectedTransaction && SelectedTransaction.name == item.name) ? COLOR.primary : COLOR.secondary }}>{item.y} USD - {item.label}</Caltext>
                    </ListCalView>
                </ListTouch>
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

    const PieChart = ({item}) => {
        const [chartData , setchartData] = useState([])
        useEffect(() => {
            if(item){
                setchartData(processData(item))  
            }
        },[item])
        let colorScales = chartData.map((item) => item.color)
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
                        labels: { fill: "white", fontSize: 14, fontWeight: "bold" }
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
            <RenderExpenseSummary item={item}/>
            </>
        )
    }

    const [SelectedTransaction, setSelectedTransaction] = useState(null)
    const arr = [{id: ""}]
    return (
        <>
            <IEListTextContainer>
                {IETab.map((ie, index) => (
                    <TouchableOpacity TouchableOpacity key={index} onPress={() => setselectedTab(index)}>
                        <IEListText style={[index == selectedTab && style.activeIEText]}>
                            {ie}
                        </IEListText>
                    </TouchableOpacity>
                ))}
            </IEListTextContainer>
            {selectedTab == 0 && (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    data={arr}
                    ListEmptyComponent={
                        <NoTransaction />
                    }
                    renderItem={({item}) => {
                        return(
                            <PieChart item={FilterIncome}/>
                        )
                    }}
                />
            )}
            {selectedTab == 1 && (
                <FlatList 
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    data={arr}
                    ListEmptyComponent={
                        <NoTransaction />
                    }
                    renderItem={({item}) => {
                        return(
                            <PieChart item={FilterExpense}/>
                        )
                    }}
                />
            )}
        </>
    )
}

const style = StyleSheet.create({
    activeIEText: {
        color: COLOR.quinary,
    },
    income: {
        color: COLOR.income,
    },
    expense: {
        color: COLOR.expense,
    },
});

export default RenderChart;
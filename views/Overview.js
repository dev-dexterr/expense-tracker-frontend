import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet, FlatList, Text } from "react-native";
import COLOR from "../utils/colors.js";
import { StyledContainer, InnerContainer, IEListTextContainer, IEListText, TransactionContainer, NoTransactionView, OverviewItemWrapper, OverviewLeftWrapper, OverviewRightWrapper } from "../components/OverviewStyles.js";

import { useSelector } from "react-redux";
import { listTransaction } from "../api/generalAPI.js";

import DateInput from "../components/dateinput/DateInputSearch.js";
import NoTransaction from "../components/notransaction/NoTransaction.js";
import TransactionCard from "../components/TransactionListCard/TransactionCard.js";
import moment from "moment";

const Overview = ({ navigation }) => {
    const transaction = useSelector((state) => state.transaction);
    const [FilterIncome, setFilterIncome] = useState(transaction.filter((item) => item.type == "Income"))
    const [FilterExpense, setFilterExpense] = useState(transaction.filter((item) => item.type == "Expense"))
    const [selectedTab, setselectedTab] = useState(0);
    const IETab = ["Income", "Expense"];
    const [FilterDate, setFilterDate] = useState("")

    useEffect(() => {
        if(FilterDate){
            var income = FilterIncome.filter((item) => {
                if(moment(item.datetime).format("YYYY / MMM / DD") == moment(FilterDate).format("YYYY / MMM / DD")){
                    return item
                }
            })
            setFilterIncome(income);
            var expense = FilterExpense.filter((item) => {
                if(moment(item.datetime).format("YYYY / MMM / DD") == moment(FilterDate).format("YYYY / MMM / DD")){
                    return item
                }
            })
            setFilterExpense(expense)
        }
    }, [FilterDate])

    return (
        <StyledContainer>
            <InnerContainer>
                <DateInput setFilterDate={setFilterDate} setFilterIncome={setFilterIncome} setFilterExpense={setFilterExpense} FilterDate={FilterDate}/>
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
                    <TransactionContainer>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id}
                            data={FilterIncome}
                            ListEmptyComponent={
                                <NoTransaction />
                            }
                            renderItem={({ item }) => {
                                return (
                                    <TransactionCard item={item} />
                                )
                            }}
                        />
                    </TransactionContainer>
                )}
                {selectedTab == 1 && (
                    <TransactionContainer>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id}
                            data={FilterExpense}
                            ListEmptyComponent={
                                <NoTransaction />
                            }
                            renderItem={({ item }) => {
                                return (
                                    <TransactionCard item={item} />
                                )
                            }}
                        />
                    </TransactionContainer>
                )}
            </InnerContainer>
        </StyledContainer >
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

export default Overview;
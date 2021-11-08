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

    // const FilterIncome = transaction.filter((item) => item.type == "Income");
    // const FilterExpense = transaction.filter((item) => item.type == "Expense");
    const [selectedTab, setselectedTab] = useState(0);
    const IETab = ["Income", "Expense"];
    // const { filterDate, userId } = useSelector((state) => state);
    const [FilterDate, setFilterDate] = useState("")

    const listTransactions = () => {
        listTransaction({ userprofile: userId, filterDate: filterDate })
            .then((res) => {
                if (res.meta == 2001) {
                    if (res.datas.length == 0) {
                        console.log("No Data Found!!!");
                        return true;
                    }
                    console.log(res);
                }
            })
    }

    useEffect(() => {
        console.log('FilterDate',FilterDate);
        if(FilterDate){
            var income = FilterIncome.filter((item) => {
                console.log("adadasd", item.datetime, " ", FilterDate);
                if(moment(item.datetime).format("YYYY / MMM / DD") == moment(FilterDate).format("YYYY / MMM / DD")){
                    console.log("In");
                    return item
                }
            })
            setFilterIncome(income);
            var expense = FilterExpense.filter((item) => new Date(item.date) == new Date(FilterDate))
            setFilterExpense(expense)
        }
        
    }, [FilterDate])

    return (
        <StyledContainer>
            <InnerContainer>
                <DateInput setFilterDate={setFilterDate}/>
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
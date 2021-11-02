import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet, FlatList, Text } from "react-native";
import COLOR from "../utils/colors.js";
import { StyledContainer, InnerContainer, IEListTextContainer, IEListText, TransactionContainer, NoTransactionView } from "../components/OverviewStyles.js";
//SAMPLE DATA TESTING
import sampledata from "../utils/constants/sampleData.js";
import DateInput from "../components/dateinput/DateInputSearch.js";

const Overview = ({ navigation }) => {
    const [selectedTab, setselectedTab] = useState(0);
    const IETab = ["Income", "Expense"];
    return (
        <StyledContainer>
            <InnerContainer>
                {/* <IEListTextContainer>
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
                            data={sampledata}
                            ListEmptyComponent={
                                <NoTransactionView>
                                    <Text>TEST/TEST</Text>
                                </NoTransactionView>
                            }
                            renderItem={({ item }) => {
                                return (
                                    <View>
                                        <Text>{item.name}</Text>
                                    </View>
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
                            data={sampledata}
                            ListEmptyComponent={
                                <NoTransactionView>
                                    <Text>TEST/TEST</Text>
                                </NoTransactionView>
                            }
                            renderItem={({ item }) => {
                                return (
                                    <View>
                                        <Text>{item.name}</Text>
                                    </View>
                                )
                            }}
                        />
                    </TransactionContainer>
                )} */}
                <DateInput/> 
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
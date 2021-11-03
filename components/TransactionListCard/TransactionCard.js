import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { CardContainer, DateText, DateView, MainContainer, IEIcon, IEIconBackground, IEAmountBackground, TransactionAmount, BalanceText2, TransactionNameView, TransactionText, RemarkView, RemarkText, DetailContainer } from "./TransactionCardStyles.js";
import moment from "moment";
import COLOR from "../../utils/colors.js";

const TransactionCard = ({ item }) => {
    return (
        <SafeAreaView>
            <CardContainer>
                <MainContainer>
                    <IEIconBackground>
                        <IEIcon source={item.iconName} />
                    </IEIconBackground>
                    <TransactionNameView>
                        <TransactionText>{item.name}</TransactionText>
                    </TransactionNameView>
                    <IEAmountBackground>
                        {item.type == "Income" && (
                            <TransactionAmount style={style.income}>
                                <BalanceText2 style={style.income}>$ </BalanceText2>
                                {item.amount}
                            </TransactionAmount>
                        )}
                        {item.type == "Expense" && (
                            <TransactionAmount style={style.expense}>
                                <BalanceText2 style={style.expense}>$ </BalanceText2>
                                {item.amount}
                            </TransactionAmount>
                        )}

                    </IEAmountBackground>
                </MainContainer>
                <DetailContainer>
                    <RemarkView>
                        <RemarkText>Remark:  {item.remark}</RemarkText>
                    </RemarkView>
                    <DateView>
                        <DateText>{moment(item.datetime).startOf('day').fromNow()}</DateText>
                    </DateView>
                </DetailContainer>
            </CardContainer>
        </SafeAreaView>
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

export default TransactionCard
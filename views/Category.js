import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import {
    StyledContainer,
    InnerContainer,
    ProfileDetailTitle,
    IEListTextContainer,
    IEListText,
    IEContainerCategory,
    IEContainerWrapper,
    IEIconBackground,
    IEIcon,
    IEText,
    Divider,
    Divider2
} from "../components/CategoryStyles.js";

//Icon
import { categoryExpense, categoryIncome } from "../utils/constants/categoryList.js";

//Navigation
import { useNavigation } from "@react-navigation/native";

const Category = () => {
    const [selectedTab, setselectedTab] = useState(0);
    const IE = ["Expense", "Income"]
    return (
        <StyledContainer>
            <InnerContainer>
                <ProfileDetailTitle>Category</ProfileDetailTitle>
                <IEListTextContainer>
                    {
                        IE.map((ie, index) => (
                            <Pressable key={index} onPress={() => setselectedTab(index)}>
                                <IEListText style={[index == selectedTab && style.activeIEText]}>
                                    {ie}
                                </IEListText>
                            </Pressable>
                        ))
                    }
                </IEListTextContainer>
                {selectedTab == 0 &&
                    <IEContainerCategory>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id}
                            data={categoryExpense}
                            renderItem={({ item }) => (
                                <IEContainerList type="Expense" name={item.name} iconName={item.iconName} />
                            )}
                        />
                    </IEContainerCategory>
                }
                {selectedTab == 1 &&
                    <IEContainerCategory>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id}
                            data={categoryIncome}
                            renderItem={({ item }) => (
                                <IEContainerList type="Income" name={item.name} iconName={item.iconName} />
                            )}
                        />
                    </IEContainerCategory>
                }
            </InnerContainer>
        </StyledContainer>
    )
}

const IEContainerList = ({ name, iconName, type }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('AddTransaction', {name:name , iconName: iconName , type: type})}>
            <IEContainerWrapper>
                <View>
                    <IEIconBackground>
                        <IEIcon source={iconName} />
                    </IEIconBackground>
                </View>
                <View>
                    <IEText>{name}</IEText>
                </View>
            </IEContainerWrapper>
            <Divider />
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({
    activeIEText: {
        color: "black",
    },
});

export default Category;
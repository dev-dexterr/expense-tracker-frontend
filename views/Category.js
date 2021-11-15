import React, { useState, useEffect } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import COLOR from "../utils/colors.js";
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
  Divider2,
} from "../components/CategoryStyles.js";

//Icon
import {
  categoryExpense,
  categoryIncome,
} from "../utils/constants/categoryList.js";

//Redux
import { useSelector } from "react-redux";

import CustomHeader from "../components/customheader/CustomHeader";

//Navigation
import { useNavigation } from "@react-navigation/native";

const Category = ({ navigation }) => {
  const [selectedTab, setselectedTab] = useState(0);
  const IE = ["Expense", "Income"];
  return (
    <StyledContainer>
      <InnerContainer>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CustomHeader label="Category" />
        </TouchableOpacity>
        <IEListTextContainer>
          {IE.map((ie, index) => (
            <Pressable key={index} onPress={() => setselectedTab(index)}>
              <IEListText style={[index == selectedTab && style.activeIEText]}>
                {ie}
              </IEListText>
            </Pressable>
          ))}
        </IEListTextContainer>
        {selectedTab == 0 && (
          <IEContainerCategory>
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              data={categoryExpense}
              renderItem={({ item }) => (
                <IEContainerList
                  type="Expense"
                  name={item.name}
                  iconName={item.iconName}
                />
              )}
            />
          </IEContainerCategory>
        )}
        {selectedTab == 1 && (
          <IEContainerCategory>
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              data={categoryIncome}
              renderItem={({ item }) => (
                <IEContainerList
                  type="Income"
                  name={item.name}
                  iconName={item.iconName}
                />
              )}
            />
          </IEContainerCategory>
        )}
      </InnerContainer>
    </StyledContainer>
  );
};

const IEContainerList = ({ name, iconName, type }) => {
  const navigation = useNavigation();
  const { route } = useSelector((state) => state);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(route, {
          name: name,
          iconName: iconName,
          type: type,
        })
      }
    >
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
  );
};

const style = StyleSheet.create({
  activeIEText: {
    color: COLOR.quinary,
  },
});

export default Category;

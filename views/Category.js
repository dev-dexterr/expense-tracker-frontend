import React, {useState} from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import {
    StyledContainer,
    InnerContainer,
    ProfileDetailTitle,
    IEListTextContainer,
    IEListText
} from "../components/CategoryStyles.js";

const Category = () => {
    const [selectedTab, setselectedTab] = useState(0);
    const IE = ["Income","Expense"]
    return(
        <StyledContainer>
            <InnerContainer>
                <ProfileDetailTitle>Category</ProfileDetailTitle>
                <IEListTextContainer>
                    {
                        IE.map((ie,index)=> (
                            <Pressable key={index} onPress={()=> setselectedTab(index)}>
                                <IEListText style={[index == selectedTab && style.activeIEText]}>
                                    {ie}
                                </IEListText>   
                            </Pressable>
                        ))
                    }
                </IEListTextContainer>
                {selectedTab == 0 &&
                    <FlatList>
                        
                    </FlatList>
                }
                {selectedTab == 1 &&
                    <FlatList>
                        
                    </FlatList>
                }
            </InnerContainer>
        </StyledContainer>
    )
}

const style = StyleSheet.create({
    activeIEText: {
      color: "black",
    },
  });

export default Category;
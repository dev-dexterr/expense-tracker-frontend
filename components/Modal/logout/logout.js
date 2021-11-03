import React from 'react';
import {Modal, Text, View} from "react-native";
import {CenteredModalView,ModalView,StyledButton,StyledButtonText} from "./LogoutStyles.js";
import { setterToken } from "../../../utils/auth.js";
import { useNavigation } from "@react-navigation/native";

const LogoutModal = ({ modalVisible, setModalVisible}) => {
    const navigation = useNavigation();
    const IsLogout = () => {
        setterToken("");
        navigation.navigate("Login")
        setModalVisible(false);
    }
    return(
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >   
            <CenteredModalView>
                <ModalView>
                    <StyledButton logout onPress={IsLogout}>
                        <StyledButtonText>Logout</StyledButtonText>
                    </StyledButton>
                    <StyledButton onPress={()=> setModalVisible(false)}>
                        <StyledButtonText>Cancel</StyledButtonText>
                    </StyledButton>
                </ModalView>
            </CenteredModalView>
        </Modal>    
    )
}

export default LogoutModal;
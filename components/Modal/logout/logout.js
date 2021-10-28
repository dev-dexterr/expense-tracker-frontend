import React from 'react';
import {Modal, Text, View} from "react-native";
import {CenteredModalView,ModalView,StyledButton,StyledButtonText} from "./LogoutStyles.js";

const LogoutModal = ({ modalVisible, setModalVisible}) => {
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
                    <StyledButton logout>
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
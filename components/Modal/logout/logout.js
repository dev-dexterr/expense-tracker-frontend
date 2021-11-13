import React from 'react';
import {Modal, Text, View} from "react-native";
import {CenteredModalView,ModalView,StyledButton,StyledButtonText} from "./LogoutStyles.js";
import { setterToken } from "../../../utils/auth.js";
//Redux
import { useDispatch } from "react-redux";
import {setToken, setUsername , setEmail , setTID , setTransaction} from "../../../utils/redux/actions.js";



const LogoutModal = ({ modalVisible, setModalVisible}) => {
    const dispatch = useDispatch();
    const IsLogout = () => {
        setterToken("");
        dispatch(setToken(null))
        dispatch(setUsername(null))
        dispatch(setEmail(null))
        dispatch(setTID(null))
        dispatch(setTransaction([]))
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
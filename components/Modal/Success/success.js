import React from 'react';
import {Modal, Text, View} from "react-native";
import LottieView from "lottie-react-native";

import {CenteredModalView , ModalView} from "./SuccessStyles.js"

const SuccessModal = ({ modalVisible, setModalVisible}) => {
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
                    <LottieView
                        style={{ justifyContent: 'center' ,alignContent: 'center' , width: "75%", aspectRatio: 1 }}
                        source={require("../../../assets/icons/69380-success-check.json")}
                        autoPlay
                    />
                </ModalView>
            </CenteredModalView>
        </Modal>
    )
}

export default SuccessModal;
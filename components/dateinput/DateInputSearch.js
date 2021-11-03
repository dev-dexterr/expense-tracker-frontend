import React, { useState, useEffect } from "react";
import { View, Modal, Platform, TouchableOpacity, Touchable } from "react-native";
import { StyledTextInput, RightIcon, CenteredModalView, ModalView, StyledButton, StyledButtonText, ModalBackgroundButton } from "./DateInputStyles.js";
import DateTimePicker from '@react-native-community/datetimepicker';
//Icons
import { Feather, Ionicons } from "@expo/vector-icons";

const DateInput = () => {
    const [date, setdate] = useState(new Date())
    const [modalVisible, setModalVisible] = useState(false);
    const onChange = (e, newDate) => {
        setdate(newDate);
    };
    return (
        <View>
            <StyledTextInput editable={false} value="Overall" />
            <RightIcon onPress={() => setModalVisible(true)}>
                <Ionicons size={30} name="calendar" />
            </RightIcon>
            <DateModalPick modalVisible={modalVisible} setModalVisible={setModalVisible} date={date} onChange={onChange} />
        </View>
    )
}

const DateModalPick = ({ modalVisible, setModalVisible, date, onChange }) => {
    return (
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
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <ModalBackgroundButton>
                            <Feather name="x-circle" size={20} />
                        </ModalBackgroundButton>
                    </TouchableOpacity>
                    <DateTimePicker
                        value={date}
                        mode="date"
                        is24Hour={true}
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={onChange}
                        style={{ width: 330 }}
                    />
                    <StyledButton logout>
                        <StyledButtonText>Confirm</StyledButtonText>
                    </StyledButton>
                </ModalView>
            </CenteredModalView>
        </Modal>
    )
}

export default DateInput;
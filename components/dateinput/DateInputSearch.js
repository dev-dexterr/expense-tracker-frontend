import React, { useState, useEffect } from "react";
import { View, Modal, Platform, TouchableOpacity, Touchable } from "react-native";
import moment from "moment";
//Redux
import { useSelector } from "react-redux";
import { StyledTextInput, RightIcon, CenteredModalView, ModalView, StyledButton, StyledButtonText, RightIcon2, ModalBackgroundButton, SearchContainer } from "./DateInputStyles.js";
import DateTimePicker from '@react-native-community/datetimepicker';
//Icons
import { Feather, Ionicons } from "@expo/vector-icons";

const DateInput = ({setFilterDate , setFilterExpense, setFilterIncome, FilterDate}) => {
    const transaction = useSelector((state) => state.transaction);
    const [date, setdate] = useState(new Date())
    const [modalVisible, setModalVisible] = useState(false);
    const onChange = (e, newDate) => {
        setdate(newDate);
    };

    return (
        <View>
            <SearchContainer>
                <StyledTextInput editable={false} value={FilterDate ? moment(FilterDate).format("YYYY / MMM / DD") : "Overall"} />
                <RightIcon onPress={() => setModalVisible(true)}>
                    <Ionicons size={30} name="calendar" />
                </RightIcon>
                <RightIcon2>
                    <TouchableOpacity onPress={()=> {
                        var income = transaction.filter((item) => item.type == "Income")
                        var expense = transaction.filter((item) => item.type == "Expense")
                        setFilterExpense(expense)
                        setFilterIncome(income)
                        setFilterDate("")
                    }}>
                        <Feather name="refresh-ccw" size={30} color="black" />
                    </TouchableOpacity>
                </RightIcon2>
            </SearchContainer>
            <DateModalPick modalVisible={modalVisible} setModalVisible={setModalVisible} date={date} onChange={onChange} setFilterDate={setFilterDate}/>
        </View>
    )
}

const DateModalPick = ({ modalVisible, setModalVisible, date, onChange, setFilterDate }) => {
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
                        textColor="black"
                    />
                    <StyledButton logout onPress={() => {
                        setModalVisible(!modalVisible);
                        setFilterDate(date)
                    }}>
                        <StyledButtonText>Confirm</StyledButtonText>
                    </StyledButton>
                </ModalView>
            </CenteredModalView>
        </Modal>
    )
}

export default DateInput;
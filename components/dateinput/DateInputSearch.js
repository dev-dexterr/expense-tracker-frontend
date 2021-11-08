import React, { useState, useEffect } from "react";
import { View, Modal, Platform, TouchableOpacity, Touchable } from "react-native";
import moment from "moment";
//Redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFilterDate } from "../../utils/redux/actions.js";
import { StyledTextInput, RightIcon, CenteredModalView, ModalView, StyledButton, StyledButtonText, RightIcon2, ModalBackgroundButton, SearchContainer } from "./DateInputStyles.js";
import DateTimePicker from '@react-native-community/datetimepicker';
//Icons
import { Feather, Ionicons } from "@expo/vector-icons";

const DateInput = ({setFilterDate}) => {
    const filterDate = useSelector((state) => state.filterDate);
    const transaction = useSelector((state) => state.transaction);
    const [date, setdate] = useState(new Date())
    const [modalVisible, setModalVisible] = useState(false);
    const onChange = (e, newDate) => {
        setdate(newDate);
    };
    useEffect(() => {
        console.log(date);
    }, [])
    return (
        <View>
            <SearchContainer>
                <StyledTextInput editable={false} value={filterDate ? moment(filterDate).format("YYYY / MMM / DD") : "Overall"} />
                <RightIcon onPress={() => setModalVisible(true)}>
                    <Ionicons size={30} name="calendar" />
                </RightIcon>
                <RightIcon2>
                    <TouchableOpacity>
                        <Feather name="search" size={30} color="black" />
                    </TouchableOpacity>
                </RightIcon2>
                <RightIcon2>
                    <TouchableOpacity>
                        <Feather name="refresh-ccw" size={30} color="black" />
                    </TouchableOpacity>
                </RightIcon2>
            </SearchContainer>
            <DateModalPick modalVisible={modalVisible} setModalVisible={setModalVisible} date={date} onChange={onChange} setFilterDate={setFilterDate}/>
        </View>
    )
}

const DateModalPick = ({ modalVisible, setModalVisible, date, onChange, setFilterDate }) => {
    const dispatch = useDispatch();
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
                    <StyledButton logout onPress={() => {
                        setModalVisible(!modalVisible);
                        //dispatch(setFilterDate(date))
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
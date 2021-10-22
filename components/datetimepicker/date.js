import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyledDateLabel} from "./DateStyles.js";

const datepicker = ({ label, value,onChange}) => {
    return (
        <View>
            <StyledDateLabel>{label}</StyledDateLabel>
            <DateTimePicker
                value={value}
                mode="date"
                is24Hour={true}
                display={Platform.OS === 'ios' ? 'default' : 'default'}
                onChange={onChange}
                style={{ paddingTop: 10, paddingBottom: 70, display: 'flex', width: 150, justifyContent: 'center', alignItems: 'flex-start'}}
            />
        </View>
    )
}

export default datepicker
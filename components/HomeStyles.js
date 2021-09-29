import styled from "styled-components";
import { View, Text, TextInput, TouchableOpacity} from "react-native";
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight

//colors
export const colors = {
    primary: '#ffffff',
    secondary: '#000000',
    tertiary: '#E5E6E8',
}

const {primary , secondary , tertiary} = colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary}
    padding-bottom: 120px;
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
`

export const PageTitle = styled.Text`
    font-size: 40px;
    text-align: left;
    font-weight: bold;
    color: ${secondary};
    padding: 10px;
    margin-bottom: -20px;
    letter-spacing: 1.5px;

`
export const PageTitleName = styled.Text`
    font-size: 50px;
    text-align: left;
    color: ${secondary};
    padding: 10px;
    letter-spacing: 1px;
    font-weight: bold
`

export const SubTitle = styled.Text`
    font-size: 16px;
    margin-bottom: 120px;
    letter-spacing: 1.5px;
    font-weight: bold;
    color: ${secondary};
`

export const StyledFormArea = styled.View`
    width: 100%;
`

export const StyledTextInput = styled.TextInput`
    background-color: ${tertiary};
    padding: 15px;
    padding-left: 22px;
    padding-right: 22px;
    border-radius: 8px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 50px;
    color: ${secondary};
`
export const StyledInputLabel = styled.Text`
    color: ${secondary};
    font-size: 16px;
    text-align: left;
    letter-spacing: 1.5px;
    margin-bottom: 10px;
    font-weight: bold;
`

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${secondary};
    justify-content: center;
    border-radius: 10px;
    margin-vertical: 40px;
    height: 60px;
`;

export const StyledButtonText = styled.Text`
    color: ${primary};
    font-size: 20px;
    text-align: center;
    font-weight: bold;
`

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 45px;
    position: absolute;
    z-index: 1;
`

export const ForgetView = styled.View`
    justify-content: flex-end;
    flex-direction: row;
    align-items: flex-end;
    padding: 10px;
    margin-top: -35px
`
export const ForgetText = styled.Text`
    justify-content: flex-end;
    color: ${secondary}
    align-items: flex-end;
    font-size: 16px;
    text-decoration-line: underline; 
`

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`

export const ExtraText = styled.Text`
    justify-content: center;
    color: ${secondary}
    align-items: center;
    font-size: 16px;
    margin: 5px;
    margin-top: 10px;
`

export const ExtraTextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`

export const ExtraLinkContent = styled.Text`
    color: ${secondary}
    font-size: 16px;
    margin: 5px;
    margin-top: 10px;
    font-weight: bold;
`


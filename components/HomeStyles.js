import styled from "styled-components/native";
import { View, Text, TextInput, TouchableOpacity} from "react-native";
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight

//colors
export const colors = {
    primary: '#ffffff',
    secondary: '#000000',
    tertiary: '#E5E6E8',
    quaternary: '#F5F7FA',
    quinary: 'black',
    senary: 'grey'
}

const {primary , secondary , tertiary, quaternary, quinary, senary} = colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 20px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary}
    padding-bottom: 120px;
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
`

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: left;
    font-weight: bold;
    color: ${secondary};
    padding: 10px;
    margin-bottom: -20px;
    letter-spacing: 1.5px;
    fontFamily: 'Roboto-Light'
`
export const PageTitleName = styled.Text`
    font-size: 40px;
    text-align: left;
    color: ${secondary};
    padding: 10px;
    margin-bottom: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    fontFamily: 'Ubuntu-Bold'
`

export const SubTitle = styled.Text`
    font-size: 16px;
    margin-bottom: 120px;
    letter-spacing: 1.5px;
    font-weight: bold;
    color: ${secondary};
`

export const BalanceBackground = styled.View`
    background-color: ${quaternary}
    height: 130px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.06) 2px 2px 2.6px;
`
export const BalanceText = styled.Text`
    font-weight: bold;
    font-size: 40px;
    color: ${quinary};
    text-align: center;
    top: 60px;
    left: 60px;
    fontFamily: 'Ubuntu-Bold'
` 
export const BalanceText2 = styled.Text`
    font-weight: bold;
    font-size: 18px;
    color: ${senary};
    fontFamily: 'Ubuntu-Bold'
` 
export const BalanceText3 = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: ${secondary};
    text-align: center;
    right: 90px
    top: -25px
    fontFamily: 'Roboto-Light'
` 
export const BalanceText4 = styled.Text`
    font-size: 15px;
    color: ${secondary};
    text-align: center;
    right: 130px
    top: 5px
    font-weight: bold;
    fontFamily: 'Roboto-Light'
` 
export const IEContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 25px;
    justify-content: space-between;
`

export const IEBackground = styled.View`
    background-color: ${quaternary}
    height: 100px;
    border-radius: 20px;
    width: 47%;
    box-shadow: rgba(0, 0, 0, 0.06) 2px 2px 2.6px;
`
export const IEText1 = styled.Text`
    text-align: center; 
    top: 15px;
    font-weight: bold;
    font-size: 35px;
    padding: 1px;
    fontFamily: 'Ubuntu-Bold'
`
export const IEText2 = styled.Text`
    text-align: center; 
    top: 15px;
    font-weight: bold;
    font-size: 15px;
    color: ${secondary};
    fontFamily: 'Roboto-Light'
`

export const IEListTextContainer = styled.View`
    margin-top: -25px;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 5px;
    padding-left: 5px;
`

export const IEListText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${senary};
    fontFamily: 'Ubuntu-Bold'
`;

export const TransactionContainer = styled.View`
    background-color: ${quaternary}
    height: 150%;
    margin-top: 8%;
    width: 100%
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.06) 2px 2px 2.6px;
`
export const TransactionTouch = styled.TouchableOpacity`
`

export const TransactionItemWrapper = styled.View`
    padding: 20px 25px 5px 25px;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;
`
export const TransactionLeftWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`

export const TransactionRightWrapper = styled.View`
    align-items: flex-end;    
`

export const TransactionTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${senary};
    fontFamily: 'Roboto-Light';
    padding: 20px;
`

export const TransactionText1 = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${secondary};
    fontFamily: 'Ubuntu-Bold';
    padding-bottom: 5px;
`
export const TransactionText2 = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: ${senary};
    fontFamily: 'Roboto-Light';
    
`

export const TransactionAmount = styled.Text`
    font-size: 26px;
    font-weight: bold;
    color: ${secondary};
    fontFamily: 'Ubuntu-Bold';
    
`




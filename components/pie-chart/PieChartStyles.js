import styled from "styled-components/native";
import COLOR from '../../utils/colors.js';

export const ChartContainer = styled.View`
    justify-content: center;
    align-items: center
    padding-bottom: 25px
`

export const ListTouch = styled.TouchableOpacity`
    flex: 1
    flex-direction: row;
    border-radius: 10px;
    height: 60px;
    padding: 0px 10px 0px 10px
`

export const ListCategoryView = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
`
export const ListBoxView = styled.View`
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background-color: white
`

export const ListCategoryText = styled.Text`
    font-size: 15px;
    margin-left: 10px;
    fontFamily: 'Ubuntu-Bold'
`

export const ListCalView = styled.View`
    justify-content: center
`

export const Caltext = styled.Text`
    font-size: 15px;
    fontFamily: 'Ubuntu-Bold'
    margin-right: 10px;
`
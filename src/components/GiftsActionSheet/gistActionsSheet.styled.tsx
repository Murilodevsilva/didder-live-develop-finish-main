import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`

`;

export const Header  = styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: 8px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`

export const HeaderRight = styled.View``
export const HeaderLeft = styled.View``
export const HeaderCenter = styled.View`
  flex: 1;
`

export const Content = styled.View`

`


export const Footer = styled.View`
  background-color: #212121;
  height: 55px;
  padding: 0 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const TotalWrapper = styled.View`
  flex-direction: row;
`
export const TotalText = styled.Text`
  color: white ;
  margin-right: 5px;
`
export const TotalValue = styled.Text`
  color: white;
  margin-left: 5px;
  font-weight: bold;
`

export const Text = styled.Text`
  color: white;
`
export const ButtonLink = styled(TouchableOpacity)``
export const TextButton = styled.Text`
  color: white;
  font-weight: bold;
`

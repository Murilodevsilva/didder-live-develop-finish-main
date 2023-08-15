import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px 17px;
  justify-content: center;
  flex: 1;
`
export const SideMenuItemStyled : React.FC<TouchableOpacityProps> = styled(TouchableOpacity)`
  flex-direction: row;
  margin-bottom: 24px;
`
export const SideMenuItemIconStyled = styled.View``
export const SideMenuItemTitleStyled = styled.Text`
  margin-left: 10.5px;
  font-size: 14px;
  color: #fff;
`

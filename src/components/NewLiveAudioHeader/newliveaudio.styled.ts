import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Close } from 'src/assets/svg';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  padding: 40px 17px;
  justify-content: flex-end;
  align-items: center;
`

export const ChangeCameraButtonContainer = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`
export const ChangeCameraText = styled(Text)`
  margin-left: 14px;
  font-size: 14px;
`
export const CloseIcon = styled(Close)`
  width: 26px;
  height: 26px;
`
export const CloseButtonContainer = styled(TouchableOpacity)``

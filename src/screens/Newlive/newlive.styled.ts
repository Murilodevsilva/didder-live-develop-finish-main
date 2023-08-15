import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.isCameraEnabled ? 'transparent': props.color};
`;

export const Footer = styled.View`
  padding-top: 20px;
  padding-bottom: 40px;
  padding-left: 17px;
  padding-right: 17px;
`

export const FooterActionArea = styled.View`
  padding-bottom: 20px;
`
export const FooterNavigating  = styled.View`

`
export const Body = styled.View`
  flex: 1;
`

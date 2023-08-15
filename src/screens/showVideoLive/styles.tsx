import { StyleSheet, Dimensions } from 'react-native'
import styled from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('window')

export const Container = styled.View`
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  overflow: hidden;
`;



export const Header = styled.View``
export const Footer = styled.View`
`
export const ContentStyled = styled.View`
  position: absolute;
  z-index:1;
  height: ${props => props.availableHeight}px;
  padding-bottom: ${props => props.insets.bottom}px;
  width: ${width}px;
  flex-direction: column;
`
export const Body = styled.View`
  flex: 1
`

export const NickBallon = styled.View`
flex-direction:row;
`;


export const Content = ({ children }) => {
  const insets = useSafeAreaInsets();
  const availableHeight = Dimensions.get('window').height - (insets.top + insets.bottom);

  return <ContentStyled insets={insets} availableHeight={availableHeight}>{children}</ContentStyled>;
}

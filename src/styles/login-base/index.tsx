import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const { width, height } = Dimensions.get('window')

export const ImageBackgroundStyled = styled.ImageBackground`
  width: ${width}px;
  height: ${height + 100}px;
`
export const Header = styled.View`
  display: flex;
  margin-top: 7%;
  flex-direction: row;
  align-items: center;
`
export const HeaderText = styled.Text`
  color: #fff;
  font-family: 'Poppins';
  margin-left: 7%;
`
export const Body = styled.View`
  margin-top: 5%;
`
export const BodyTitle = styled.Text`
  color: #fff;
  font-size: 24px;
  margin-top: 8px;
`
export const BodyInputs = styled.View`
  margin-top: 7%;
  display: flex;
  flex-direction: column;
`
export const Label = styled.Text`
  color: #fff;
  font-family: 'Poppins';
`
export const LabelLight = styled.Text`
  color: #fff;
  font-family: 'Poppins-400';
`
export const ViewMarginTopVerySmall = styled.View`
  margin-top: 3%;
`
export const ViewMarginTopSmall = styled.View`
  margin-top: 4%;
`
export const ViewMarginBottomSmall = styled.View`
  margin-bottom: 4%;
`
export const InputsLogin = styled.TextInput`
  margin-top: 3%;
  background-color: transparent;
  color: #fff;
  outline-style: none;
  padding: 10px;
  padding-left: 30px;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;
  font-family: 'Poppins';
  font-size: 14px;
  line-height: 20px;
`
export const InputsLoginNumber = styled.TextInput`
  margin-top: 3%;
  background-color: transparent;
  color: #fff;
  outline-style: none;
  padding: 10px;
  margin-left: 70px;

  border-bottom-color: #e0e0e0;
  font-family: 'Poppins';

`
export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 12px 32px 12px 32px;
  elevation: 3;
  background-color: #fff;
  border-radius: 90px;
`
export const ButtonText = styled.Text`
  font-size: 16px;
  letter-spacing: 0.25px;
  color: #212121;
  font-family: 'Poppins';
`
export const SubButtonArea = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin-top: 5%;
`
export const TextLight = styled.Text`
  color: #fff;
  font-family: 'PoppinsLight';
`
export const ForgotPasswordText = styled.Text`
  color: #f5f5f5;
  font-size: 14px;
  line-height: 19.6px;
  font-family: 'Poppins';
`
export const SeparatorArea = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`
export const SeparatorBar = styled.View`
  border-bottom-width: 1px;
  border-color: #f5f5f5;
  width: 40%;
  opacity: 0.31;
`
export const SeparatorText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-family: 'Poppins';
  margin-left: 20px;
  margin-right: 20px;
`
export const BrandArea = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 25%;
  align-items: flex-end;
`
export const BrandBackground = styled.Pressable`
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 1px;
`

export const CountryView = styled.View`
  margin-top: -7%;
  position: relative;
  border-top-width: 0;
  border-right-width: 0;
  border-left-width: 0;
  border-bottom-width: 1px;
  border-bottom-color: #E0E0E0;
`
export const CountryFlagView = styled.Pressable`
  flex-direction: row;
  width: 60px;
  height: 60px;
  position: absolute;
  top: 4px;
  left: 10px;
  justify-content: flex-start;
  align-items: center;
`

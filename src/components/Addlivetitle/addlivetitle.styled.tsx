import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { fromCSS } from '@bacons/css-to-expo-linear-gradient'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  TextInputProps,
} from 'react-native'
import Tags from 'src/assets/svg/Tags'
import { ArrowRight } from 'src/assets/svg'
import GradientBackground from 'src/components/GradientBackground/GradienteBackground'

export const Container = styled(View)`
  padding: 17px;
`
export const GradientStyled = styled(View)`
  padding: 8px;
  border-radius: 4px;
  flex-direction: row;
`

export const LinerGradientWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <GradientBackground>
      <GradientStyled>{children}</GradientStyled>
    </GradientBackground>
  )
}

export const ChangeCoverContainer = styled(TouchableOpacity)`
  width: 91px;
  height: 91px;
  border-radius: 4px;
  background-color: #eee;
  position: relative;
  overflow: hidden;
  margin-right: 20px;
`
export const ChangeCoverImage = styled(Image)`
  width: 91px;
  height: 91px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
`
export const ChangeCoverButton = styled(View)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`
export const ChangeCoverText = styled(Text)`
  text-align: center;
  background: rgba(158, 158, 158, 0.8);
  padding: 5px 2px;
  width: 100%;
`
export const BodyContainer = styled(View)`
  flex-direction: column;
  flex: 1;
  justify-content: center;
`
export const InputTitleContainer = styled(View)``
export const InputTitleStyled: React.FC<TextInputProps> = styled(TextInput)`
  color: #ffff;
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 10px;
`
export const Spacer = styled.View`
  height: 1px;
  width: 100%;
  background-color: #fff;
`
export const AddTagsContainer = styled(TouchableOpacity)`
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 5px;
  align-items: center;
`

export const IconTags = styled(Tags)`
  margin-right: 5px;
`
export const AddTagsText = styled.Text`
  margin-right: 5px;
  color: #fff;
`
export const IconChevron = styled(ArrowRight)`

`
export const OptionsContainer = styled.View`
  flex-direction: row;
`
export const AddColorContainer = styled.View`
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 5px;
  align-items: center;
`

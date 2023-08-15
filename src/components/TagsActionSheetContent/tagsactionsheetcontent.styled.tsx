import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native'
import MaskedView from '@react-native-masked-view/masked-view'
import { LinearGradient } from 'expo-linear-gradient'
import { fromCSS } from '@bacons/css-to-expo-linear-gradient'
import GradientText from 'src/components/GradientText/GradientText'
import { useState } from 'react'
import GradientBackground from 'src/components/GradientBackground/GradienteBackground'
import { Tag as TagType, useLiveContext } from 'src/contexts/LiveContextProvider'

export const Container = styled.View`
  height: auto;
`

export const Footer = styled.View`
  padding: 20px 0;
`
export const Header = styled.View``
export const Body = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`

export const TitleStyled = styled.Text`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  margin: 20px 0;
`
export const Title = ({ children }) => {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  console.log("🚀 ~ file: tagsactionsheetcontent.styled.tsx:31 ~ Title ~ containerSize:", containerSize)

  const handleLayout = (event: any) => {
    setContainerSize({
      width: event.nativeEvent.layout.width,
      height: event.nativeEvent.layout.height,
    })
  }

  return (
    <View style={{ height: 60, width: '100%', justifyContent: 'center' }} onLayout={handleLayout}>
      <GradientText
        containerHeight={containerSize.height}
        containerWidth={containerSize.width}
        text={children}
        fontSize={22}
        textAlign='center'
        fontStyle="bold"
      />
    </View>
  )
}

export const DescriptionContainer = styled.View`
  padding-bottom: 22px;
`
export const Description = styled.Text`
  word-wrap: break-word;
  margin-right: 12px;
`

export const TagStyled = styled(TouchableOpacity)`
  border-radius: 23px;
  overflow: hidden;
  margin: 4px;
  background-color: #555;
`
const TagStyledContainer = styled(View)<{ selected: boolean }>`
  padding: 5px 12px;
  background-color: ${(props) => (props.selected ? 'transparent' : '#fff')};
  margin: 1px;
  border-radius: 23px;
`
type Props = {
  tag: TagType,
  children: React.ReactNode,
  selected: boolean
}

export const Tag : React.FC<Props> = ({ children, tag, selected }) => {
  const { handleAddTag } = useLiveContext()

  return (
    <TagStyled onPress={() => handleAddTag(tag)}>
      <GradientBackground type="type1">
        <TagStyledContainer selected={selected}>{children}</TagStyledContainer>
      </GradientBackground>
    </TagStyled>
  )
}

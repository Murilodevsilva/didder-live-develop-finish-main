import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native';
import { NumberOfPersons } from 'src/contexts/LiveContextProvider'
const TwoBlocks = require('src/assets/images/blocks/2.png')
const ThreeBlocks = require('src/assets/images/blocks/3.png')
const FourBlocks = require('src/assets/images/blocks/4.png')
const SixBlocks = require('src/assets/images/blocks/6.png')
const EightBlocks = require('src/assets/images/blocks/8.png')
const NineBlocks = require('src/assets/images/blocks/9.png')
const SixteenBlocks = require('src/assets/images/blocks/16.png')

const getBlockImage = (number: number) => {
  const blockImages = {
    2: TwoBlocks,
    3: ThreeBlocks,
    4: FourBlocks,
    6: SixBlocks,
    8: EightBlocks,
    9: NineBlocks,
    16: SixteenBlocks,
  }

  return blockImages[number]
}

type Props = {
  blocks: NumberOfPersons
  isSelected?: boolean
  onPress?: () => void
}

const ImageStyled = styled(Image)`
  opacity: ${props => props.isSelected ? 1 : 0.8};
`;

const LegendText = styled.Text`
  color: #fff;
  text-align:  center;
  margin-top: 8px;
`

const ElementContainer = styled(TouchableOpacity)`
  flex-direction: column;
  align-items: center;
`

const BlockSelector: React.FC<Props> = ({ blocks, isSelected, onPress }) => {
  const image = getBlockImage(blocks)
  return (
    <ElementContainer onPress={onPress}>
      <ImageStyled isSelected={isSelected} source={image} />
      <LegendText> {blocks} pessoas</LegendText>
    </ElementContainer>
  )
}

export default BlockSelector

import React from 'react'
import {
  CloseButtonContainer,
  CloseIcon,
  Container,
} from './newliveaudio.styled'
import { useNavigation } from '@react-navigation/native'

export interface NewVideoLiveProps {
  close?: () => void
}

const CloseButton = ( {onPress} ) => (
  <CloseButtonContainer onPress={onPress}>
    <CloseIcon width={30} height={30} />
  </CloseButtonContainer>
)

const NewLiveAudioHeader: React.FC<NewVideoLiveProps> = () => {
  const { navigate } = useNavigation()
  const handleClose = () => {
    // @ts-ignore
    navigate("Home");
  }
  return (
    <Container>
      <CloseButton onPress={handleClose} />
    </Container>
  )
}

export default NewLiveAudioHeader

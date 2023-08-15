import React, { useState } from 'react'
import {
  ChangeCameraButtonContainer,
  ChangeCameraText,
  CloseButtonContainer,
  CloseIcon,
  Container,
} from './newvideoliveheader.styled'
import CameraSwitch from 'src/assets/svg/camera/CameraSwitch'
import { useCamera } from 'src/components/Camera/CameraContext'
import { useNavigation } from '@react-navigation/native';
import { NAVIGATORS } from 'src/router/navigators';

export interface NewVideoLiveProps {
  handleChangeCamera?: () => void
}

const ChangeCameraButton = ({toggleCameraType}) => (
  <ChangeCameraButtonContainer onPress={toggleCameraType}>
    <CameraSwitch />
    <ChangeCameraText>Trocar camera</ChangeCameraText>
  </ChangeCameraButtonContainer>
)

const CloseButton = ( { onPress }) => (
  <CloseButtonContainer onPress={onPress}>
    <CloseIcon width={30} height={30} />
  </CloseButtonContainer>
)

const NewVideoliveHeader: React.FC<NewVideoLiveProps> = () => {

  const { navigate } = useNavigation()
  const handleClose = () => {
    // @ts-ignore
    navigate("Home");
  }

  const { toggleCameraType } = useCamera()
  return (
    <Container>
      <ChangeCameraButton toggleCameraType={toggleCameraType}/>
      <CloseButton onPress={handleClose} />
    </Container>
  )
}

export default NewVideoliveHeader

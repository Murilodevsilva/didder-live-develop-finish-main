import React ,{useState} from 'react'
import { TouchableOpacity,Modal ,TouchableWithoutFeedback,View,Text,StyleSheet} from 'react-native'
import { ButtonWithImage, Container, FooterButton, RightGroupButtons } from './livefooter.styled'
import ChatGradientIcon from 'src/assets/svg/ChatGradientIcon'
import GameIconGradient from 'src/assets/svg/GameIconGradient'
import InfoIconGradient from 'src/assets/svg/InfoIconGradient'
import MenuIconGradient from 'src/assets/svg/MenuIconGradient'
import { NAVIGATORS } from 'src/router/navigators'
import { ArrowLeft } from 'src/assets/svg'
import { useNavigation } from '@react-navigation/native'

import {
  ModalContent,
  Footer,
  FooterButtonText,
  ButtonText
} from '../../screens/modalFollow/style'
interface LiveFooterProps {
  onOpenChat: () => void
  handleShowEvent: () => void
  handleOpenGiftsActionSheet: () => void
  handleOpenUserOptionsActionSheet: () => void
}



const LiveFooter: React.FC<LiveFooterProps> = ({ onOpenChat, handleShowEvent, handleOpenGiftsActionSheet, handleOpenUserOptionsActionSheet }) => {
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  
  const navigation = useNavigation();
  const toggleComponentVisibility = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const ModalOptions = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <ModalContent>
          <TouchableOpacity onPress={closeModal}>
            <ArrowLeft style={{ position: 'absolute', top: 24, left: 16 }} />
          </TouchableOpacity>
          <ButtonText>Opções “pEDRUX”</ButtonText>
          <Footer>
            <TouchableOpacity  onPress={() => {
              // @ts-ignore
              navigation.navigate(NAVIGATORS.FINISH_USER)
            }}>
              <FooterButtonText>Fechar video</FooterButtonText>
            </TouchableOpacity>
            <FooterButtonText>Bloquear áudio</FooterButtonText>
            <FooterButtonText>Bloquear vídeo e áudio</FooterButtonText>
          </Footer>
        </ModalContent>
      </TouchableWithoutFeedback>
    </Modal>
  );

 
  return (
    <Container>
      <FooterButton onPress={onOpenChat}>
        <ChatGradientIcon />
      </FooterButton>
      <RightGroupButtons>
        <FooterButton onPress={handleOpenGiftsActionSheet}>
          <ButtonWithImage source={require('src/assets/images/buttons/giftButon.png')} />
        </FooterButton>
        <FooterButton onPress={handleOpenUserOptionsActionSheet}>
          <GameIconGradient />
        </FooterButton>
        <FooterButton>
          <InfoIconGradient />
        </FooterButton>
        <FooterButton onPress={handleShowEvent}>
          <InfoIconGradient />
        </FooterButton>
        <FooterButton onPress={toggleComponentVisibility}>
          <MenuIconGradient />
        </FooterButton>
        {modalVisible && <ModalOptions />}
      </RightGroupButtons>
    </Container>
  )
}

export default LiveFooter

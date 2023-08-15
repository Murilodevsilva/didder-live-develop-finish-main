import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text, View, TouchableOpacity, Image, Modal, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { ArrowLeft} from 'src/assets/svg';
import { NAVIGATORS } from 'src/router/navigators';


const ModalContent = styled.View`
  width: 100%;
  background-color: #030303;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  height: 240px;
  bottom: 0
  position: absolute;
`;

const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 999;
`;

const Background = styled(LinearGradient)`
  width: 77px;
  height: 77px;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  top: -40px;
  left: 30px;
`;

const ProfileImage = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 40px;
`;

const ProfileContainer = styled.View`
  margin-bottom: 30px;
  margin-left: 30px;
  flex-direction: column;
  margin-top: -20px;
`;

const Username = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: bold;
  margin-left: 17px;
`;

const Description = styled.Text`
  font-size: 12px;
  color: #9e9e9e;
  text-align: left;
  margin-horizontal: 10px;
  margin-top: 10px;
`;

const WarningButton = styled.TouchableOpacity`
  background-color: #212121;
  width: 28px;
  height: 28px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  position: absolute;
  right: 0;
`;

const FollowButton = styled.TouchableOpacity`
  background-color: #673ab3;
  width: 70px;
  height: 32px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const FollowButtonText = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: bold;
  text-align:center;
  padding-top:24px;
  padding-bottom:16px;
`;

const Footer = styled.View`
  justify-content: space-around;
  
`;

const FooterButton = styled.View`
  align-items: center;
`;

const FooterButtonText = styled.Text`
  font-size: 14px;
  color: white;
  border-top-width: 0.5px;
  border-color: #e0e0e0;
  padding: 16px;
  text-align:center;
  font-weight:400;
`;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  followButton: {
    backgroundColor: '#673AB3',
    width: 70,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  warningButton: {
    backgroundColor: '#212121',
    width: 28,
    height: 28,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    position: 'absolute',
    right: 0,
  },
});

export const ModalOptions = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
          
        }}
      >
       
          <ModalContent>
             <TouchableOpacity onPress={()=>setModalVisible(false)} >
             <ArrowLeft style={{position:'absolute',top:24,left:16}}/> 
             </TouchableOpacity>
             <FollowButtonText>Opções “pEDRUX”</FollowButtonText>
             <Footer>
                <TouchableOpacity onPress={()=>NAVIGATORS.FINISH_USER}>
                <FooterButtonText>Fechar video</FooterButtonText>
                </TouchableOpacity>
             <FooterButtonText>Bloquear áudio</FooterButtonText>
             <FooterButtonText>Bloquear vídeo e áudio</FooterButtonText>
             
             </Footer>
            </ModalContent>
         
        
      </Modal>
  );
};
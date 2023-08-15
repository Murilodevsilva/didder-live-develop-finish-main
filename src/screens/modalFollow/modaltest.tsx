import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text, View, TouchableOpacity, Image, Modal, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SimpleLineIcons, FontAwesome5, AntDesign, Octicons, Foundation, Ionicons } from '@expo/vector-icons';
import { HeartFlames } from 'src/assets/svg/family/heart-flames';
import { BiGenderMale } from 'src/assets/svg';
import { IcoMedal } from 'src/assets/svg/icon-live-medal';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Touchable = styled.TouchableOpacity``;

const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

const ModalContent = styled.View`
  width: 100%;
  background-color: #030303;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  height: 340px;
  bottom: 0;
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
  font-size: 12px;
  color: white;
  font-weight: bold;
`;

const Footer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  border-top-width: 0.5px;
  border-color: #e0e0e0;
  padding-top: 24px;
`;

const FooterButton = styled.View`
  align-items: center;
`;

const FooterButtonText = styled.Text`
  font-size: 20px;
  color: white;
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

export const ModalProfile = () => {
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
        <ModalContainer>
          <TouchableOpacity
            style={styles.modalContainer}
            activeOpacity={1}
            onPress={() => setModalVisible(false)}
          >
            <ModalContent>
              <Background colors={['#4568DC', '#B06AB3']}>
                <ProfileImage
                  source={{
                    uri:
                      'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
                  }}
                />
              </Background>
              <View style={{ position: 'absolute', right: 50, paddingHorizontal: 40, top: 24 }}>
                <FollowButton onPress={()=>setModalVisible(false)}>
                  <FollowButtonText>Seguir</FollowButtonText>
                </FollowButton>
                <TouchableOpacity style={styles.warningButton}>
                  <AntDesign name="warning" size={12} color="white" />
                </TouchableOpacity>
              </View>
              <ProfileContainer>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginTop: 8 }}>
                    <IcoMedal />
                  </Text>
                  <View style={{ width: 12, height: 12, alignItems: 'center', justifyContent: 'center' }}>
                    <HeartFlames />
                  </View>
                  <Text style={{ color: '#3C4E97', fontSize: 8, fontWeight: '700' }}>(MNRV)</Text>
                  <Username>sugeknight</Username>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 12 }}>
                  <View
                    style={{
                      backgroundColor: '#3C4E97',
                      width: 44,
                      height: 22,
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: 8,
                      borderRadius: 16,
                      flexDirection: 'row',
                    }}
                  >
                    <BiGenderMale />
                    <Text style={{ color: 'white', textAlign: 'center', borderRadius: 16, fontSize: 10, marginLeft: 5 }}>
                      22
                    </Text>
                  </View>
                  <Text
                    style={{
                      backgroundColor: '#566FD7',
                      color: 'white',
                      width: 37,
                      height: 22,
                      textAlign: 'center',
                      margin: 8,
                      borderRadius: 16,
                      fontSize: 10,
                      padding: 4,
                    }}
                  >
                    Lv.2
                  </Text>
                  <Text
                    style={{
                      backgroundColor: '#673AB3',
                      color: 'white',
                      width: 46,
                      height: 22,
                      textAlign: 'center',
                      margin: 8,
                      borderRadius: 16,
                      fontSize: 10,
                      padding: 4,
                    }}
                  >
                    Nv.94
                  </Text>
                </View>
                <Description>
                  Faço lives de segunda a segunda e meu foco principal é fazer você sorrir.
                </Description>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24, paddingRight: 20 }}>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: '700',
                      fontSize: 14,
                      textAlign: 'center',
                      width: 50,
                      height: 25,
                    }}
                  >
                    10K
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: '700',
                      fontSize: 14,
                      textAlign: 'center',
                      width: 50,
                      height: 25,
                    }}
                  >
                    9999
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: '700',
                      fontSize: 14,
                      textAlign: 'center',
                      width: 50,
                      height: 25,
                    }}
                  >
                    10K
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 20 }}>
                  <Text style={{ color: '#9E9E9E', fontSize: 12, fontWeight: '400', textAlign: 'center', width: 50, height: 15 }}>
                    Seguidores
                  </Text>
                  <Text style={{ color: '#9E9E9E', fontSize: 12, fontWeight: '400', textAlign: 'center', width: 50, height: 15 }}>
                    Super Fãs
                  </Text>
                  <Text style={{ color: '#9E9E9E', fontSize: 12, fontWeight: '400', textAlign: 'center', width: 50, height: 15 }}>
                    Segue
                  </Text>
                </View>
              </ProfileContainer>
              <Footer>
                <Ionicons name="at-sharp" size={26} color="white" />
                <SimpleLineIcons name="present" size={20} color="white" />
                <Octicons name="mail" size={22} color="white" />
              </Footer>
            </ModalContent>
          </TouchableOpacity>
        </ModalContainer>
      </Modal>
  );
};
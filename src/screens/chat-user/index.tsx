import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Text, View, TouchableOpacity, Modal, FlatList, TextInput, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import * as ImagePicker from 'expo-image-picker';
import MicGradient from './mic-icon-gradient'
import CamGradient from './cam-icon-gradient';
import SmileIcon from './smile-icon-gradient';
import { HeartFlames } from 'src/assets/svg/family/heart-flames';
import { IcoMedal } from 'src/assets/svg/icon-live-medal';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft } from 'src/assets/svg';
import { ArrowLeftBlack } from 'src/assets/svg/arrow-left-black';
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Username = styled.Text`
  font-size: 12px;
  color: black;
  font-weight: bold;
  margin-left: 10px;

`;

const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ChatContainer = styled.View`
  height:460px;
  background-color: white;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 16px;
`;

const ChatHeader = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;

const ChatTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const ProfileImage = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 40px;
`;
const Background = styled(LinearGradient)`
  width: 47px;
  height: 47px;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  top:-8;
  left:10;
`;


const MessageContainer = styled.View`
  flex: 1;
  padding-bottom: 16px;
`;

const MessageItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

const MessageSenderPhoto = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  margin-right: 8px;
`;

const MessageSenderNickname = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-right: 4px;
`;

const MessageBubble = styled.View`
  background-color: #e6e6e6;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
`;

const MessageText = styled.Text`
  font-size: 16px;
`;

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

const TextInputStyled = styled.TextInput`
  width:215px;
  margin-right: 8px;
  margin-left:8px;
`;

const ViewInputStyled = styled.View`
  flex-direction:row;
  height:44px;
  width:280px;
  border-width:1px;
  border-color:#ccc
  border-radius: 30px;
  padding: 8px;
  margin-right: 8px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content:center;
  padding-top:15px;
  justify-content: flex-start;
`;

const Button = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
`;

const ChatUser = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [recording, setRecording] = useState(null);
  const [cameraImage, setCameraImage] = useState(null);
  const userPhoto = ()=>{
    return (
        <Image source={{uri:('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')}} />
    )
  }
  useEffect(() => {
    getAudioPermission();
    getImagePickerPermission();
  }, []);

  const getAudioPermission = async () => {
    const { status } = await Audio.requestPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access audio denied');
    }
  };

  const getImagePickerPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access media library denied');
    }
  };

  const startRecording = async () => {
    try {
      const { recording } = await Audio.Recording.createAsync();
      setRecording(recording);
      await recording.startAsync();
    } catch (error) {
      console.log('Error starting audio recording', error);
    }
  };

  const stopRecording = async () => {
    try {
      await recording.stopAndUnloadAsync();
      const { uri } = await recording.getStatusAsync();

      setMessages((prevMessages) => [...prevMessages, { type: 'audio', uri }]);
    } catch (error) {
      console.log('Error stopping audio recording', error);
    } finally {
      setRecording(null);
    }
  };

  const openCamera = async () => {
    try {
      const { cancelled, uri } = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!cancelled) {
        setCameraImage(uri);
        setMessages((prevMessages) => [...prevMessages, { type: 'image', uri }]);
      }
    } catch (error) {
      console.log('Error opening camera', error);
    }
  };

  const openImagePicker = async () => {
    try {
      const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!cancelled) {
        setCameraImage(uri);
        setMessages((prevMessages) => [...prevMessages, { type: 'image', uri }]);
      }
    } catch (error) {
      console.log('Error opening image picker', error);
    }
  };

  const sendMessage = () => {
    if (message.trim() !== '') {
      setMessages((prevMessages) => [...prevMessages, message]);
      setMessage('');
    }
  };

  const renderMessageItem = ({ item }) => {
    if (item.type === 'audio') {
      return (
        <MessageItem>
          <MessageSenderPhoto source={{uri:('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')}} />
          <MessageSenderNickname>You</MessageSenderNickname>
          <MessageBubble>
            <Text>Audio Message</Text>
          </MessageBubble>
        </MessageItem>
      );
    } else if (item.type === 'image') {
      return (
        <MessageItem>
          <MessageSenderPhoto source={{uri:('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')}} />
          <MessageSenderNickname>bla</MessageSenderNickname>
          <MessageBubble>
            <Image source={{ uri: item.uri }} style={{ width: 200, height: 200 }} />
          </MessageBubble>
        </MessageItem>
      );
    } else {
      return (
        <MessageItem>
          <MessageSenderPhoto source={{uri:('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')}} />
          <MessageSenderNickname></MessageSenderNickname>
          <MessageBubble>
            <MessageText>{item}</MessageText>
          </MessageBubble>
        </MessageItem>
      );
    }
  };

  return (
    <Container>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
     <Text>Open</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <ModalContainer>
          <ChatContainer>
            <ChatHeader>
              <TouchableOpacity style={{padding:5}} onPress={()=> setModalVisible(false)}>
              <ArrowLeftBlack/>
              </TouchableOpacity>
             
            <Background colors={['#4568DC', '#B06AB3']}>
                <ProfileImage
                  source={{
                    uri:
                      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
                  }}
                />
              </Background>
            <View style={{ flexDirection: 'row', alignItems: 'center',top:-20,left:20 }}>
                  <Text style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginTop: 8 }}>
                    <IcoMedal />
                  </Text>
                  <View style={{ width: 12, height: 12, alignItems: 'center', justifyContent: 'center' }}>
                    <HeartFlames />
                  </View>
                  <Text style={{ color: '#3C4E97', fontSize: 8, fontWeight: '700' }}>(MNRV)</Text>
                  <Username>sugeknight</Username>
                </View>
                <Text style={{position:'absolute',left:'27%',top:15}}>ID: 456764575 </Text>
                <View style={{borderWidth:1,borderColor:'#000',borderRadius:25,right:0,position:'absolute',padding:5,width:26,height:26 ,alignItems:'center'}}>
                <Image style={{width:20,height:20,borderRadius:10}} source={{uri:'https://cdn-icons-png.flaticon.com/512/51/51256.png?w=740&t=st=1689458057~exp=1689458657~hmac=b632aa36e5d45fd3bef34f49f46bada88d33a9d77ab2cfd0703be51be9a05a9c'}}/>
                </View>
                </ChatHeader>

            <MessageContainer>
              <FlatList
                data={messages}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderMessageItem}
              />
            </MessageContainer>
              <View style={{flexDirection:'row'}}>
              <ButtonContainer>
              

              <Button onPress={openCamera}>
                <CamGradient />
              </Button>
              <Button onPress={startRecording}>
                
                <MicGradient/>
              
              </Button>

            </ButtonContainer>
            <InputContainer>
             <ViewInputStyled>
              <TextInputStyled
                placeholder="Digite algo..."
                value={message}
                onChangeText={(text) => setMessage(text)}
                onSubmitEditing={sendMessage}
              />
              <SmileIcon/>
              </ViewInputStyled>
              <TouchableOpacity onPress={sendMessage}>
                <Image style={{width:34,height:34, backgroundColor:'none'}} source={require('./gift-box.jpg')}/>
              </TouchableOpacity>
            </InputContainer>
            </View>
          </ChatContainer>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default ChatUser;

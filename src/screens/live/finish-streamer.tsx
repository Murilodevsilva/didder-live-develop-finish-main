import React from 'react'
import { FlatList, TouchableOpacity, View,Text, Modal ,Image} from 'react-native'
import { Flame } from 'src/assets/svg/family/flame'
import { IconOptions } from 'src/assets/svg/icon-live-iwwa_option'
import { Mic } from 'src/assets/svg/icon-live-mic'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialIcons } from '@expo/vector-icons';
import  Headphone  from 'src/assets/svg/support/head-phone-icon'


import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { NAVIGATORS } from 'src/router/navigators'
import { Center } from 'src/styles/feed'

const data = [
  {
    id: '1',
    text: 'Item 1',
    name: 'PedroGames',
    userInLive: 10000,
    uri: 'https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=600',
    message: 'Deepy_Cash',
  },
  {
    id: '2',
    text: 'Item 2',
    name: 'AndrezaG.',
    userInLive: 385677777777,
    uri: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=600',
    message: 'Donna.Lupi',
  },
  {
    id: '3',
    text: 'Item 3',
    name: 'Lory.Epson',
    userInLive: 3851,
    uri: 'https://images.pexels.com/photos/3214747/pexels-photo-3214747.jpeg?auto=compress&cs=tinysrgb&w=600',
    message: 'Capri_sun',
  },
  {
    id: '4',
    text: 'Didder Coins',
    name: 'BlueGirl',
    userInLive: 38522,
    uri: 'https://images.pexels.com/photos/7516318/pexels-photo-7516318.jpeg?auto=compress&cs=tinysrgb&w=600',
    message: 'Danny.boi',
  }
]

export const ContainerImage = styled.ImageBackground`
  width: 160px;
  height: 160px;
  border-radius: 8px;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
`
export const ContainerInfo = styled.View`
  width: 100%;
  justify-content: flex-end;
  flex-direction: column;
  height: 100%;
`
export const ContainerInfo2 = styled.View`
  width: 90%;
  height: 25px;
  justify-content: space-around;
  align-items: center;
  align-self: center;
  flex-direction: row;
`
export const Background = styled.View`
  width: 100%;
  height: 25px;
`
export const ContainerTop = styled.View`
  flex-direction: row;
  align-items: center;
`

export const TextTop = styled.Text`
  color: white;
  font-size: 12px;
  font-family: 'Poppins';
  font-weight: 500;
`
export const ContainerFill = styled.View`
    width:51px;
    height:24px;
  margin-left: 8px;
  flex-direction: row;
  align-items: center;
`
export const TextFill = styled.Text`
  color: white;
  font-size: 18px;
  font-family: 'Poppins';
  font-weight: 400;
  padding-horizontal:35px;
  margin-bottom:6px;
  margin-top:16px;
  align-items:center;
  justify-content:center;
  text-align:center;
`
export const ContainerBotton = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 118%;
`

export const CardBotton = styled.View`
  width: 100%;
  margin-bottom: 10px;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
`

export const TextMessage = styled.Text`
  color: white;
  font-size: 12px;
  font-family: 'Poppins';
  font-weight:bold;
  right:-185;
  top:-28
  width:130px;
  position:absolute;
`
export const TextDescr = styled.Text`
  color: white;
  font-size: 12px;
  font-family: 'Poppins';
  margin-left:10px;
  margin-right:10px;
  width:89px;
  height:36px;
  text-align:center;
`
export const Card = styled.View`
  flex: 1;
  align-self:center;
  position:absolute;
  bottom:30
`

export const CardText = styled.Text`
  color: '#01174A';
  font-size: 18px;
  margin-left: 5px;
  font-family: 'Poppins';
  font-weight: 600;
  color:#FFF;
  left:-170;
  top:-35
  position:absolute;
`

interface Props {
  title: string
  iconOptions: boolean
  mic: boolean
}

const Item = ({ item, mic, iconOptions, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ margin: 8 }}>
      <ContainerImage source={{ uri: item.uri }}>
        <ContainerInfo>
          <View
            style={{
              width: 51,
              backgroundColor: 'rgba(176, 106, 179, 1)',
              borderRadius:20,
              position:'absolute',
              right:10,
              top:10,
            }}
          >
            <ContainerInfo2>              
              <ContainerFill>
                <View style={{width:8,height:8,borderRadius:5,backgroundColor:"#FFF"}}></View>
                <TextFill>
                 Ao vivo
                </TextFill>
              </ContainerFill>
            </ContainerInfo2>
          </View>
          <CardBotton>
           
            <TextMessage>
              {item.message.length > 10
                ? item.message.substring(0, 10) + '...'
                : item.message}
            </TextMessage>
            <TouchableOpacity style={{
                borderColor:'#FFF',
                borderWidth:1,
                borderRadius:15,
                width:48,height:24,
                justifyContent:'center',
                alignItems:'center',
                position:'absolute',right:10,bottom:1}}>
                <Text style={{color:"#FFF",textAlign:'center',fontSize:10}}>Seguir</Text>
                </TouchableOpacity>
            {iconOptions === true ? <IconOptions /> : <View />}
          </CardBotton>
        </ContainerInfo>
      </ContainerImage>
    </TouchableOpacity>
  )
}

export const FinishLiveStream = (props: Props) => {
  const navigation = useNavigation()
  return (
    
    
    <Modal
    transparent={true}
    >
        
        <View style={{width:'100%',height:'100%',backgroundColor:'#1F2740',alignItems:'center',justifyContent:'flex-start'}}>
              <Image source={{uri:'https://i.ibb.co/sF6pGx6/didder-icon.png'}} blurRadius={35} style={{height:300,width:400,opacity:0.6,position:'absolute',bottom:280}} />
                <Image source={{uri:'https://i.ibb.co/sKvTV2L/Close-Circle.png'}} style={{width:40,height:40,position:'absolute',right:26,top:52}}/>
                <View style={{width:'100%',height:80,alignItems:'flex-start',marginTop:130}}>
                    <TextFill>Live encerrada</TextFill>
                    <Text style={{color:'#fff',fontSize:12,left:35}}>Tempo de live: 30 minutos</Text>
                    <LinearGradient  start={{x: 0, y: 1}} end={{x: 0.8, y: 1}} colors={['#4568DC', '#B06AB3']} style={{width:144,height:34,alignItems:'center',justifyContent:'center',borderRadius:15,position:'absolute',right:35,top:25}}>
                        <LinearGradient style={{width:142,height:32,backgroundColor:'#232A4A',borderRadius:15,flexDirection:'row',justifyContent:'center',alignItems:'center'}} start={{x: -0.5, y: 0}} end={{x: 0, y: 0}} colors={['#3B4781','#232A4A']}>
                            <TouchableOpacity style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                <Text style={{color:'#fff',fontSize:12,marginRight:15}}>Central do host </Text>
                                <MaterialIcons name="navigate-next" size={24} color="white" />
                                </TouchableOpacity>
                                </LinearGradient>
                                </LinearGradient>
                </View>
       
       
       <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4568DC', '#3B4781']} style={{width:380,height:284,justifyContent:'center',alignItems:'center',borderRadius:8,marginTop:32}}>
       <View style={{flexDirection:'row',justifyContent:'center'}}>
        <CardText>Dados da live</CardText>
        <TextMessage>Mais informações </TextMessage> 
        <TouchableOpacity style={{position:'absolute',right:-180,top:-32}}><MaterialIcons  name="navigate-next" size={24} color="white" /></TouchableOpacity>
       </View>
       <View style={{flexDirection:'row',alignSelf:'center',justifyContent:'center'}}>
        <TextFill>1000</TextFill>
        <TextFill>1000</TextFill>
        <TextFill>1000</TextFill>
       </View>
       <View style={{flexDirection:'row'}}>
        <TextDescr>Novos seguidores</TextDescr>
        <TextDescr>Total de visualizações</TextDescr>
        <TextDescr>Total de curtidas</TextDescr>
       </View>
       <View style={{flexDirection:'row',justifyContent:'center'}}>
        <TextFill>500</TextFill>
        <TextFill>1000</TextFill>
        <TextFill>1000</TextFill>
       </View>
       <View style={{flexDirection:'row',justifyContent:'center'}}>
        <TextDescr>Didder Coins</TextDescr>
        <TextDescr>Presentes ganhos</TextDescr>
        <TextDescr>Mensagens</TextDescr>
       </View>
       <View style={{borderColor:'#D9D9D9',borderWidth:0.7,width:'90%',opacity:0.5,marginTop:10}}></View>
       <View style={{position:'absolute',bottom:15,left:25}}><TextTop>Instruções de live </TextTop></View>
       <TouchableOpacity style={{position:'absolute',bottom:15,right:10}}><MaterialIcons name="navigate-next" size={24} color="white" /></TouchableOpacity>
       </LinearGradient>
       <View style={{width:282,height:65, alignItems:'center',justifyContent:'center',position:'absolute',bottom:25}}>
    <Image style={{width:32,height:32}} source={{uri:'https://i.ibb.co/SnfYVPZ/Headphone-3.png'}} />
    <Text style={{color:'#FFF'}}>Problemas durante a live? Fale conosco.</Text></View>
    
   </View>
  </Modal>
    
  )
}

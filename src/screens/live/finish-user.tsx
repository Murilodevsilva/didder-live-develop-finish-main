import React from 'react'
import { FlatList, TouchableOpacity, View,Text, Modal ,Image} from 'react-native'
import { Flame } from 'src/assets/svg/family/flame'
import { IconOptions } from 'src/assets/svg/icon-live-iwwa_option'
import { Mic } from 'src/assets/svg/icon-live-mic'
import { LinearGradient } from 'expo-linear-gradient'
import Modalize from 'src/screens/modalFollow'

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
    text: 'Item 4',
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
  margin-left: 4px;
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
  font-size: 8px;
  font-family: 'Poppins';
  font-weight: 400;
  margin-left: 8px;
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
  left:-10px;
`

export const Card = styled.View`
  flex: 1;
  align-self:center;
  position:absolute;
  bottom:60
`

export const CardText = styled.Text`
  color: '#01174A';
  font-size: 18px;
  margin-top: 14px;
  margin-left: 5px;
  font-family: 'Poppins';
  font-weight: 600;
  margin-bottom: 8px;
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

export const FinishLive = (props: Props) => {
  const navigation = useNavigation()
  function handleClick(){
    return 
  }
  return (
    
    
    <Modal
    transparent={true}
    >
        <View style={{width:'100%',height:'100%',backgroundColor:'#1F2740',alignItems:'center',justifyContent:'flex-start'}}>
             <Image source={{uri:'https://i.postimg.cc/W4ccw0B0/Ellipse-245.png'}} style={{width:100,height:100,marginBottom:30,marginTop:74}} />
            <TouchableOpacity onPress={handleClick} style={{position:'absolute'}}> 
              <Image source={{uri:'https://i.ibb.co/sKvTV2L/Close-Circle.png'}} style={{width:40,height:40,position:'absolute',right:16,top:32}}/>
              </TouchableOpacity>
             <Text style={{color:'#FFF',width:172,height:40,marginTop:10,marginBottom:24,textAlign:'center'}}>Obrigado por assistir a live de @sugeknight</Text>
             <LinearGradient style={{width:232,height:44,justifyContent:'center',borderRadius:40,marginBottom:16}} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4568DC', '#B06AB3']}>
                <Text style={{color:'#FFF',fontWeight:'600', fontFamily:'Poppins',textAlign:'center'}}>Seguir usuário</Text>
                </LinearGradient>
            <TouchableOpacity style={{width:100,height:50,justifyContent:'center'}}><Text style={{textAlign:'center',color:'#FFF',fontFamily:'Poppins',marginBottom:24}}>Fechar</Text></TouchableOpacity>
        <Image source={{uri:'https://i.ibb.co/sF6pGx6/didder-icon.png'}} blurRadius={35} style={{height:300,width:400,opacity:0.6,justifyContent:'center',top:-100}} />
       
    <View style={{position:'absolute',flexDirection:'row',bottom:460}}>
        <Image source={{uri:'https://i.ibb.co/QjfdCwn/Show.png'}} style={{width:32,height:32,position:'absolute',left:-35,bottom:-8 }}/>
        <Text style={{color:'#FFF',fontWeight:'700',fontSize:14,marginLeft:8}}>2.000 pessoas assistiram a live</Text>
        </View>
        <View style={{position:'absolute',left:51,bottom:425}}>
        <Text style={{color:'#FFF',fontWeight:'500',fontSize:14}} >Recomendamos para você</Text>
        </View>
        </View>
    <Card>
      <CardText>{props.title}</CardText>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Item
            onPress={() => {
              // @ts-ignore
              navigation.navigate(NAVIGATORS.SHOW_VIDEO_LIVE, { params: item })
            }}
            item={item}
            {...props}
          />
        )}
      />
    </Card>
    </Modal>
    
  )
}

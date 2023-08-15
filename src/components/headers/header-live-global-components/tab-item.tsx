import React from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { Flame } from 'src/assets/svg/family/flame'
import { Fill } from '../../../../src/assets/svg/icon-live-fill'
import { IconOptions } from 'src/assets/svg/icon-live-iwwa_option'
import { Mic } from 'src/assets/svg/icon-live-mic'
import { Movie } from 'src/assets/svg/icon-live-movie'

import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { NAVIGATORS } from 'src/router/navigators'


const data = [
  {
    id: '1',
    text: 'Item 1',
    name: 'PedroGames',
    userInLive: 10000,
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHthxY5DcXdpklBZeji_s6maVQnbzlauS8GA&usqp=CAU',
    message: 'Vem me veeeeeeer',
  },
  {
    id: '2',
    text: 'Item 2',
    name: 'AndrezaG.',
    userInLive: 385677777777,
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OPBibmFcA0jgIPbN-6wPiy37vbmfQN7SAg&usqp=CAU',
    message: 'Audio Live da terça',
    onPress: ()=>{
      (NAVIGATORS.FINISH_LIVE)
    }
  },
  {
    id: '3',
    text: 'Item 3',
    name: 'Lory.Epson',
    userInLive: 3851,
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt0kNoViG6BVHwA8RiNmoK_NdBJc9STDnsrA&usqp=CAU',
    message: 'Converse comigo',
  },
  {
    id: '4',
    text: 'Item 4',
    name: 'BlueGirl',
    userInLive: 38522,
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt0kNoViG6BVHwA8RiNmoK_NdBJc9STDnsrA&usqp=CAU',
    message: 'Vem conversar :D',
  },
  {
    id: '5',
    text: 'Item 5',
    name: 'Lory.Epson',
    userInLive: 3855555555555555555555555555,
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm8ErlMlPdnS5zbhJ2KL339H-cCsjrxjMl8A&usqp=CAU',
    message: 'Audio Liveee',
  },
  {
    id: '6',
    text: 'Item 6',
    name: 'AntonioRab',
    userInLive: 3855555555555,
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRid34nt3lbbho6p3dbPMAFt_s_z9RKsHKMHA&usqp=CAU',
    message: 'Vem me veeeeeeer',
  },
  {
    id: '7',
    text: 'Item 7',
    name: 'ArlerQuinaxx',
    userInLive: 385444,
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRid34nt3lbbho6p3dbPMAFt_s_z9RKsHKMHA&usqp=CAU',
    message: 'testando quantidade de letrassss estouro em layout',
  },
  {
    id: '8',
    text: 'Item 8',
    name: 'Seligaaem',
    userInLive: 3853334,
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB2ysrPvhIBLoo22vh1IW1cPRT4YEaSA52Rg&usqp=CAU',
    message: 'testando quantidade de letrassss estouro em layout',
  },
  {
    id: '9',
    text: 'Item 9',
    name: 'JennyWitch',
    userInLive: 385488,
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNFBBaKpdo7-wYNrgzpKVr1Jpp52aZs-ejJw&usqp=CAU',
    message: 'testando quantidade de letrassss estouro em layssssssssssssssout',
  },
  {
    id: '10',
    text: 'Item 10',
    name: 'Vanessa.Lopes',
    userInLive: 3858888,
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt0kNoViG6BVHwA8RiNmoK_NdBJc9STDnsrA&usqp=CAU',
    message: 'testando quantidade de letrassss estouro em layout',
  },
]

export const ContainerImage = styled.ImageBackground`
  width: 164px;
  height: 214px;
  border-radius: 8px;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
`
export const ContainerInfo = styled.View`
  width: 100%;
  justify-content: space-between;
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
  margin-left: 18px;
  flex-direction: row;
  align-items: center;
`
export const TextFill = styled.Text`
  color: white;
  font-size: 12px;
  font-family: 'Poppins';
  font-weight: 400;
  margin-left: 2px;
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
  right: 15px;
`

export const Card = styled.View`
  flex: 1;
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
              width: '100%',
              backgroundColor: 'rgba(24, 26, 32, 0.449)',
            }}
          >
            <ContainerInfo2>
              <Flame />
              <View>
                <TextTop>
                  {item.name.length > 8
                    ? item.name.substring(0, 8) + '...'
                    : item.name}
                </TextTop>
              </View>
              <ContainerFill>
                <Fill />
                <TextFill>
                  {item.userInLive.toString().length > 3
                    ? item.userInLive.toString().substring(0, 3) + '..'
                    : item.userInLive}
                </TextFill>
              </ContainerFill>
            </ContainerInfo2>
          </View>
          <CardBotton>
            {mic === true ? <Mic /> : <Movie />}
            <TextMessage>
              {item.message.length > 10
                ? item.message.substring(0, 10) + '...'
                : item.message}
            </TextMessage>
            {iconOptions === true ? <IconOptions /> : <View />}
          </CardBotton>
        </ContainerInfo>
      </ContainerImage>
    </TouchableOpacity>
  )
}


export const TabItem = (props: Props) => {
  const navigation = useNavigation()
  return (
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
  )
}

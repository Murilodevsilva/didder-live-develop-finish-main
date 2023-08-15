import { LinearGradient } from 'expo-linear-gradient'
import { useTranslation } from 'react-i18next'
import { Pressable, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { memo } from 'react'
import { Home } from '../assets/svg/home'
import { Heart } from '../assets/svg/heart'
import { Video } from '../assets/svg/video'
import { Message } from '../assets/svg/message'
import { Profile } from '../assets/svg/profile'
import styled from 'styled-components/native'
import { ChatNormalFooter } from '../assets/svg/chat-normal-footer'
import { ProfileSelected } from '../assets/svg/profile-selected'
import { HomeSelected } from '../assets/svg/home-selected'
import { HeartSelected } from '../assets/svg/heart-selected'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { NEW_LIVE_SCREENS } from 'src/router/navigators/NewliveNavigator'
import { NAVIGATORS } from 'src/router/navigators'

const FooterStyled = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 24px;
  width: 100%;
  background-color: #fff;
  height: 80px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`
const IconButton = styled.Pressable`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 37px;
  height: 50px;
`
const IconText = styled.Text`
  color: #616161;
  font-size: 12px;
  width: 40px;
  text-align: center;
`
const Footer = ({ route }) => {
  const navigation: NativeStackNavigationProp<any, any> = useNavigation()

  const { t, i18n } = useTranslation();

  return (
    <FooterStyled style={styles.footerShadow}>
      <IconButton onPress={() => navigation.navigate('Home')}>
        {route === 'Home' ? <HomeSelected /> : <Home />}

        <IconText
          style={{
            color: `${route === 'Home' ? '#566FD7' : '#616161'}`,
            fontFamily: `${route === 'Home' ? 'Poppins' : 'PoppinsLight'}`,
          }}
        >
          {t('footer-home')}
        </IconText>
      </IconButton>
      <IconButton onPress={() => navigation.navigate('Follow')}>
        {route === 'Follow' ? <HeartSelected /> : <Heart />}

        <IconText
          style={{
            color: `${route === 'Follow' ? '#566FD7' : '#616161'}`,
            fontFamily: `${route === 'Follow' ? 'Poppins' : 'PoppinsLight'}`,
          }}
        >
          {t('footer-follow')}
        </IconText>
      </IconButton>
      <Pressable onPress={() => navigation.navigate(NAVIGATORS.NEW_LIVE)}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#4568DC', '#3B4781']}
          style={styles.videoBackgroundIcon}
        >
          <Video />
        </LinearGradient>
      </Pressable>
      <IconButton onPress={() => navigation.navigate('Chat')}>
        {route === 'Chat' ? <Message /> : <ChatNormalFooter />}

        <IconText
          style={{
            color: `${route === 'Chat' ? '#566FD7' : '#616161'}`,
            fontFamily: `${route === 'Chat' ? 'Poppins' : 'PoppinsLight'}`,
          }}
        >
          {t('footer-chat')}
        </IconText>
      </IconButton>
      <IconButton onPress={() => navigation.navigate('Profile')}>
        {route === 'Profile' || route === 'Profile-View' ? (
          <ProfileSelected />
        ) : (
          <Profile />
        )}
        <IconText
          style={{
            color: `${
              route === 'Profile' || route === 'Profile-View'
                ? '#566FD7'
                : '#616161'
            }`,
            fontFamily: `${
              route === 'Profile' || route === 'Profile-View'
                ? 'Poppins'
                : 'PoppinsLight'
            }`,
          }}
        >
          {t('footer-profile')}
        </IconText>
      </IconButton>
    </FooterStyled>
  )
}

export default memo(Footer)

const styles = StyleSheet.create({
  footerShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  videoBackgroundIcon: {
    width: 48,
    height: 48,
    borderRadius: 5456,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

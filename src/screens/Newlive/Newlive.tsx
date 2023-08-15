import React from 'react'
import { StatusBar } from 'expo-status-bar'
import withReadyStatus from 'src/hocs/withReadyStatus'
import { BusyIndicator, Button } from 'src/styles'
import {
  Body,
  Container,
  Footer,
  FooterActionArea,
  FooterNavigating,
} from './newlive.styled'
import NewVideoLive from './screens/NewVideoLive/Newvideolive'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import NewAudioLive from './screens/NewAudioLive/NewAudioLive'
import NewLiveWithGuests from './screens/NewLiveWithGuests/NewLiveWithGuests'
import FooterNavBar from './components/FooterNavBar/FooterNavBar'
import { useCamera } from 'src/components/Camera/CameraContext'
import { WithCameraBackgroundHOC } from 'src/components/Camera/withCameraBackgroundHOC'
import { useLiveContext } from 'src/contexts/LiveContextProvider'

const Tab = createBottomTabNavigator()
const typesOflive = {
  NewAudioLive: 'audio',
  NewVideoLive: 'video',
  NewLiveWithGuests: 'video-with-guests'
}

const NewLiveScreen = ({ ready }) => {
  const { isCameraEnabled, toggleCameraEnabled } = useCamera()
  const { setLiveType, color, liveType } = useLiveContext()

  const handleChangeScreen = (screenName: string) => {
  console.log("🚀 ~ file: Newlive.tsx:36 ~ handleChangeScreen ~ screenName:", screenName)

    setLiveType(typesOflive[screenName])

    if (screenName === 'NewAudioLive' && isCameraEnabled) {
      toggleCameraEnabled()
      return
    }

    if (!isCameraEnabled) {
      toggleCameraEnabled()
    }
  }

  if (!ready) {
    return (
      <Container>
        <BusyIndicator />
      </Container>
    )
  }
  return (
    <>
      <Container isCameraEnabled={isCameraEnabled} color={color}>
        <Body>
          <Tab.Navigator
            sceneContainerStyle={{ backgroundColor: 'transparent' }}
            initialRouteName="NewVideoLive"
            tabBar={(props) => {
              return (
                <Footer>
                  <FooterNavigating>
                    <FooterNavBar {...props} />
                  </FooterNavigating>
                </Footer>
              )
            }}
          >
            <Tab.Screen
              listeners={{ focus: () => handleChangeScreen('NewVideoLive') }}
              name="NewVideoLive"
              options={{ tabBarLabel: 'Live', headerShown: false }}
              component={NewVideoLive}
            />
            <Tab.Screen
              listeners={{ focus: () => handleChangeScreen('NewAudioLive') }}
              name="NewAudioLive"
              options={{ tabBarLabel: 'Audio Live', headerShown: false }}
              component={NewAudioLive}
            />
            <Tab.Screen
              listeners={{
                focus: () => handleChangeScreen('NewLiveWithGuests'),
              }}
              name="NewLiveWithGuests"
              options={{
                tabBarLabel: 'Live com convidados',
                headerShown: false,
              }}
              component={NewLiveWithGuests}
            />
          </Tab.Navigator>
        </Body>
      </Container>
    </>
  )
}

const NewLiveWithCamera = WithCameraBackgroundHOC(NewLiveScreen)
const NewliveWithStatus = withReadyStatus(NewLiveWithCamera)
const NewLive = NewliveWithStatus
export default NewLive

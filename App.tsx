import { LogBox, Platform, StatusBar } from 'react-native'
import {SheetProvider} from 'react-native-actions-sheet';
import { useFonts } from 'expo-font'
import { ContentCenter } from './src/styles/basic'
import { Routes } from './src/router'
import { ApolloProvider } from '@apollo/client'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import client from './src/service/'
import './src/locales/i18n'
import { RouterContext } from './src/contexts/RouterContext'
import {FinishLive} from 'src/screens/live/finish-user';
import { NavigationContainer } from '@react-navigation/native';





LogBox.ignoreAllLogs()

export default function App() {
  const [routeName, setRouteName] = useState('')

  const IOSBackgroundHeader = () => {
    if (
      ['Home', 'Follow', 'Video', 'Profile', 'Profile-View'].includes(routeName)
    ) {
      StatusBar.setBarStyle('dark-content')
      return ['#FFF', '#FFF']
    } else {
      StatusBar.setBarStyle('light-content')
      return ['#4568DC', '#3B4781']
    }
  }

  const [fontsLoaded] = useFonts({
    Poppins: require('./src/assets/fonts/poppins.ttf'),
    PoppinsLight: require('./src/assets/fonts/Poppins-Light.ttf'),
    Poppins400: require('./src/assets/fonts/poppins-400.ttf'),
    Poppins600: require('./src/assets/fonts/Poppins-Medium.ttf'),
    PoppinsBold: require('./src/assets/fonts/Poppins-Bold.ttf'),
    Roboto: require('./src/assets/fonts/Roboto-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return <ContentCenter style={{ backgroundColor: '#232a4a' }} />
  }

  return (
    <ApolloProvider client={client}>
      <RouterContext.Provider value={{ routeName, setRouteName }}>
        {Platform.OS === 'ios' && (
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ height: '5.5%' }}
            colors={IOSBackgroundHeader()}
          >
            <StatusBar translucent barStyle="light-content" />
          </LinearGradient>
        )}
        <SheetProvider>
           <Routes />
        </SheetProvider>
      </RouterContext.Provider>
    </ApolloProvider>
  )
}

// https://transform.tools/svg-to-react-native https://react-svgr.com/playground/
// https://www.figma.com/file/T3LY6iqsPCXA7ZqVX8bpgu/Didder-2.0?node-id=1%3A8534&t=sg1Lm6oit29UDHtP-0 velho
// https://www.figma.com/file/G8KTMdzfnGQeLjsTZmBITW/Entrega-Didder?node-id=0%3A1&t=jUUUCLyhWSpTF74d-1 novo

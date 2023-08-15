import React, { createContext, useContext } from "react"
import Footer from "src/components/footer"
import "src/locales/i18n"

import { Platform, StatusBar } from "react-native"
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native"
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack"
import { Home, Intro } from "src/screens"
import { FinishLive } from "src/screens/live/finish-user"
import { FinishLiveStream } from "src/screens/live/finish-streamer"
import { Feedback } from "src/screens/feedback/index"
import { ModalProfile } from "src/screens/modalFollow/modaltest"
import UserProfileModal from "src/screens/modalFollow/index"
import { ModalOptions } from "src/screens/modalFollow/modalOptions"
import ChatUser from "../screens/chat-user/"
import SearchUser from "../screens/search-users"
import ModalTitleLive from "../screens/modal-title-live"
import SwitchScreen from "../components/switch-modal"
import ModalWithAnimation from "../screens/config-live"
import UserOptions from "src/components/UserOptions"

import { NAVIGATORS, NewLiveNavigator } from "./navigators"
import { RouterContext } from "src/contexts/RouterContext"
import VideoLiveNavigator from "./navigators/VideoLiveNavigator"
import InviteModal from "src/screens/inviteModal"
import Mention from "../screens/mention"

const Stack = createStackNavigator()
export const navigationRef = createNavigationContainerRef()

const transtionAndroid = {
  cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
}

const transtionOther = {
  cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
}

export const Routes = () => {
  const { routeName, setRouteName } = useContext(RouterContext)

  const AllowedFooters = () => {
    const alloweds = [
      "Home",
      "Chat",
      "Follow",
      "Video",
      "Profile",
      "Profile-View",
      "FinishLive",
      "ModalProfile",
      "ModalOptions",
      "UserOptions",
    ]
    for (const routes of alloweds) {
      if (routes === routeName) return <Footer route={routeName} />
    }
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        setRouteName(navigationRef.getCurrentRoute().name)
      }}
      onStateChange={async () => {
        const currentRouteName = navigationRef.getCurrentRoute().name
        setRouteName(currentRouteName)
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        initialRouteName="home"
      >
        <Stack.Screen
          options={transtionAndroid}
          name="Intro"
          component={Intro}
        />
        <Stack.Screen name={NAVIGATORS.HOME} component={Home} />
        <Stack.Screen name={NAVIGATORS.NEW_LIVE} component={NewLiveNavigator} />
        <Stack.Screen
          name={NAVIGATORS.SHOW_VIDEO_LIVE}
          component={VideoLiveNavigator}
        />
        <Stack.Screen name={NAVIGATORS.FINISH_USER} component={FinishLive} />
        <Stack.Screen name="UserOptions" component={UserOptions} />
        <Stack.Screen name="FinishLiveStream" component={FinishLiveStream} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="UserProfileModal" component={UserProfileModal} />
        <Stack.Screen name="ModalProfile" component={ModalProfile} />
        <Stack.Screen name="ChatUser" component={ChatUser} />
        <Stack.Screen name="InviteModal" component={InviteModal} />
        <Stack.Screen name="SearchUser" component={SearchUser} />
        <Stack.Screen name="ModalTitleLive" component={ModalTitleLive} />
        <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
        <Stack.Screen
          name="ModalWithAnimation"
          component={ModalWithAnimation}
        />
        <Stack.Screen name="ModalOptions" component={ModalOptions} />
        <Stack.Screen name="Mention" component={Mention} />
      </Stack.Navigator>
      <AllowedFooters />
      {Platform.OS === "android" && (
        <StatusBar
          backgroundColor={
            routeName === "Profile" || routeName === "Profile-View"
              ? "black"
              : "transparent"
          }
          barStyle="dark-content"
          translucent
          hidden={false}
        />
      )}
    </NavigationContainer>
  )
}

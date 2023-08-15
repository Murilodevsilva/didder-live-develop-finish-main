import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import ShowVideoLiveProvider from 'src/contexts/ShowVideoLiveContext'
import ShowVideoLive from 'src/screens/showVideoLive'

export const VIDEO_LIVE_SCREENS = {
  SHOW_VIDEO_LIVE: 'ShowVideoLive',
}

const VideoLiveNavigator = () => {
  const Stack = createStackNavigator()
  return (
    <ShowVideoLiveProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerBackgroundContainerStyle: {
          backgroundColor: 'transparent',
        }
        }}
        initialRouteName={VIDEO_LIVE_SCREENS.SHOW_VIDEO_LIVE}
      >
        <Stack.Screen name={VIDEO_LIVE_SCREENS.SHOW_VIDEO_LIVE} component={ShowVideoLive} />
      </Stack.Navigator>
    </ShowVideoLiveProvider>
  )
}

export default VideoLiveNavigator

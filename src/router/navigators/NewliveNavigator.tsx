import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import LiveContextProvider from 'src/contexts/LiveContextProvider'
import Newlive from 'src/screens/Newlive'

export const NEW_LIVE_SCREENS = {
  NEW_LIVE: 'StartNewLive',
}

const NewLiveNavigator = () => {
  const Stack = createStackNavigator()
  return (
    <LiveContextProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        initialRouteName={NEW_LIVE_SCREENS.NEW_LIVE}
      >
        <Stack.Screen name={NEW_LIVE_SCREENS.NEW_LIVE} component={Newlive} />
      </Stack.Navigator>
    </LiveContextProvider>
  )
}

export default NewLiveNavigator

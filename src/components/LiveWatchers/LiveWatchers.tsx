import React, { useEffect, useRef, useState } from 'react'
import {
  FlatList,
  ImageStyle,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { OnlineUser } from 'src/contexts/ShowVideoLiveContext'
import UserAvatar from '../UserAvatar/UserAvatar'
import BlurBackground from '../BlurBackground/BlurBackground'
import { useNavigation } from '@react-navigation/native'
import { NAVIGATORS } from 'src/router/navigators'
import PersonIcon from 'src/assets/svg/personIcon'

interface LiveWatchersProps {
  onlineUsers: Array<OnlineUser>
  styles?: {
    containerStyle?: ViewStyle
    usersButtonStyle?: TextStyle
    closeButtonStyle?: TextStyle
    avatarContainerStyle?: ImageStyle
  }
  hideCloseButton?: boolean
  hideInfoButton?: boolean
}

const LiveWatchers: React.FC<LiveWatchersProps> = ({
  onlineUsers,
  styles,
  hideCloseButton,
  hideInfoButton,
}) => {
  const [avatarCount, setAvatarCount] = useState<number>(0)
  const containerRef = useRef<View>(null)

  useEffect(() => {
    calculateAvatarCount()
  }, [])

  const calculateAvatarCount = () => {
    containerRef.current?.measure((x, y, width) => {
      const availableWidth = width - (hideCloseButton ? 0: 60) // 60 is the combined width of users and close buttons
      const maxAvatars = Math.floor(availableWidth / 50) // 50 is the width of each avatar
      setAvatarCount(Math.min(maxAvatars, onlineUsers.length))
    })
  }

  const renderItem = ({ item, index }: { item: OnlineUser; index: number }) => (
    <UserAvatar
      imageUrl={item.image}
      name={item.username}
      type={index === 0 ? 'badge' : 'primary'}
      styles={{
        containerStyle: styles?.avatarContainerStyle,
      }}
    />
  )
  const navigation = useNavigation();
  return (
    <View
      ref={containerRef}
      style={[defaultStyles.container, styles?.containerStyle]}
      onLayout={calculateAvatarCount}
    >
      <FlatList
        horizontal
        data={onlineUsers.slice(0, 4)}
        renderItem={renderItem}
        keyExtractor={(item, index) => `avatar_${index}`}
        showsHorizontalScrollIndicator={false}
      />
      {!hideInfoButton && (
          <TouchableOpacity
          onPress={() => {
            // @ts-ignore
            navigation.navigate(NAVIGATORS.INVITE)
          }}
            style={[defaultStyles.usersButton, styles?.usersButtonStyle]}
          >
            <PersonIcon style={{position:'absolute',bottom:-5}}/>
          </TouchableOpacity>
        
      )}

      {!hideCloseButton && (
        <TouchableOpacity
          style={[defaultStyles.closeButton, styles?.closeButtonStyle]}
        >
          <Text>x</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

const defaultStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // width: Dimensions.get('window').width,
    paddingHorizontal: 16,
  },
  usersButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: 22,
    height: 22,
  },
  closeButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
})

export default LiveWatchers
;``

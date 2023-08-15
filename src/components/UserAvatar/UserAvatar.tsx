import React from 'react'
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
  ImageStyle,
  Text,
  ImageBackground,
} from 'react-native'

interface PersonAvatarProps {
  imageUrl: string
  name: string
  type: 'badge' | 'primary'
  onPress?: () => void
  styles?: {
    containerStyle?: ViewStyle
    imageStyle?: ImageStyle
  }
}

const RenderBadge = ({ children, type }) => {
  console.log(typeof children)
  if (type === 'badge') {
    return (
      <View style={defaultStyles.withBadgeContainer}>
        <ImageBackground
          style={defaultStyles.badgeImage}
          source={require('src/assets/images/coins/gold_crown_coin.png')}
        >
          {children}
        </ImageBackground>
      </View>
    )
  }

  return children
}

const UserAvatar: React.FC<PersonAvatarProps> = ({
  imageUrl,
  name,
  type,
  onPress,
  styles,
}) => {
  const containerStyle =
    type === 'primary'
      ? [defaultStyles.container, styles?.containerStyle, defaultStyles.primary]
      : [defaultStyles.container, styles?.containerStyle]
  const imageStyle =
    type === 'badge'
      ? [defaultStyles.image, styles?.imageStyle, defaultStyles.badge]
      : [defaultStyles.image, styles?.imageStyle]

  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      <RenderBadge type={type}>
        <View style={containerStyle}>
          <Image
            source={{ uri: imageUrl }}
            style={[imageStyle, type === 'badge' && defaultStyles.badgeContent]}
            accessibilityLabel={name}
          />
        </View>
      </RenderBadge>
    </TouchableOpacity>
  )
}

const defaultStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 32,
    marginRight: 4,
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 32,
  },
  primary: {
    borderWidth: 1,
    borderColor: 'gold',
  },
  badge: {
    backgroundColor: '#eecb00',
    padding: 4,
  },
  withBadgeContainer: {
    width: 36,
    height: 36,
    borderRadius: 36,
    marginRight: 4,
  },
  badgeImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
  },
  badgeContent: {
    width: 30,
    height: 30,
    borderRadius: 36,
    backgroundColor: '#ccc',
    zIndex:1
  },
})

export default UserAvatar

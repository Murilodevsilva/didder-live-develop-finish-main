import React, { ReactNode } from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  View
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export interface GradientButtonProps {
  onPress: () => void
  children?: string
  gradientType?: 'type1' | 'type2' | 'type3'
  textColor?: 'white' | 'black'
  bold?: boolean
  fullWidth?: boolean
  style?: Partial<{
    containerStyles: StyleProp<ViewStyle>,
    gradientStyles: StyleProp<ViewStyle>,
    textStyle: StyleProp<TextStyle>
  }>
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const GradientButton: React.FC<GradientButtonProps> = ({
  onPress,
  children,
  gradientType = 'type1',
  textColor = 'white',
  bold = false,
  fullWidth = false,
  style,
  leftIcon,
  rightIcon,
}) => {
  const gradients = {
    type1: ['#4568DC', '#B06AB3'],
    type2: ['#12c2e9', '#c471ed', '#f64f59'],
    type3: ['#4568DC', '#B06AB3'],
  }

  const selectedGradient = gradients[gradientType]

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[fullWidth ? styles.fullWidth : null, style?.containerStyles]}
    >
      <LinearGradient
        colors={selectedGradient}
        start={[0, 0]}
        end={[1, 0]}
        style={[styles.gradient, style?.gradientStyles]}
      >
        {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
        {children && (
          <Text
            style={[
              styles.buttonText,
              textColor === 'white' ? styles.textWhite : styles.textBlack,
              bold ? styles.boldText : null,
              style?.textStyle
            ]}
          >
            {children}
          </Text>
        )}
        {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  gradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
    padding: 17,
    paddingHorizontal: 16,
  },
  buttonText: {
    fontSize: 22,
  },
  textWhite: {
    color: 'white',
  },
  textBlack: {
    color: 'black',
  },
  boldText: {
    fontWeight: 'bold',
  },
  fullWidth: {
    width: '100%',
  },
  icon: {
    marginHorizontal: 8,
  },
})

export default GradientButton

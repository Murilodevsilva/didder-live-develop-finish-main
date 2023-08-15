import { FC, memo, useEffect, useRef, useState } from 'react'
import { Animated } from 'react-native'
import { LabelInformation } from 'src/screens/profile/host/more-information/styles'

type Props = {
  number: number | string
  style?: any
}

const AnimatedNumber: FC<Props> = ({ number, style }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start()
  }, [fadeAnim])

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}
    >
      <LabelInformation style={{ ...style }}>{number}</LabelInformation>
    </Animated.View>
  )
}

export default memo(AnimatedNumber)

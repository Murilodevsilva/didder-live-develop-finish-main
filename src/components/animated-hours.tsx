import { FC, memo, useEffect, useRef } from 'react'
import { Animated } from 'react-native'
import AnimatedNumber from './animated-number'
import { LabelInformation } from 'src/screens/profile/host/more-information/styles'
import { Row } from 'src/styles'

type Props = {
  a: number | string
  b: number | string
  c: number | string
  style?: any
}

const AnimatedHours: FC<Props> = ({ a, b, c, style }) => {
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
      <Row>
        <AnimatedNumber style={{ ...style }} number={a} />
        <LabelInformation style={{ ...style }}>:</LabelInformation>
        <AnimatedNumber style={{ ...style }} number={b} />
        <LabelInformation style={{ ...style }}>:</LabelInformation>
        <AnimatedNumber style={{ ...style }} number={c} />
      </Row>
    </Animated.View>
  )
}

export default memo(AnimatedHours)

import * as React from 'react'
import Svg, {

  Path,
  Defs,
  LinearGradient,
  Stop,

} from 'react-native-svg'

export const Brown = (props) => (
  <Svg
      width={6}
      height={7}
      viewBox="0 0 6 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6 3.5c0 .423-.21.797-.531 1.023a1.249 1.249 0 01-1.446 1.446 1.248 1.248 0 01-2.046 0A1.249 1.249 0 01.531 4.523a1.248 1.248 0 010-2.046 1.248 1.248 0 011.446-1.446 1.249 1.249 0 012.046 0 1.249 1.249 0 011.446 1.446A1.248 1.248 0 016 3.5z"
        fill="url(#paint0_linear_394_693)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_394_693"
          x1={3.05052}
          y1={7.77826}
          x2={11.3315}
          y2={-0.339122}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
        </LinearGradient>
      </Defs>
    </Svg>
)

import * as React from 'react'
import Svg, {

  Path,
  Defs,
  LinearGradient,
  Stop,

} from 'react-native-svg'

export const PurpleLight = (props) => (
  <Svg
      width={6}
      height={7}
      viewBox="0 0 6 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M0 .5v6h6v-6H0zm2 2h2v2H2v-2z" fill="#000" />
      <Path
        d="M0 .5v6h6v-6H0zm2 2h2v2H2v-2z"
        fill="url(#paint0_linear_394_927)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_394_927"
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

import * as React from 'react'
import Svg, {

  Path,
  Defs,
  LinearGradient,
  Stop,

} from 'react-native-svg'

export const Red = (props) => (
  <Svg
      width={6}
      height={6}
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 0l-.9 2.94L0 5.19l3-.69 3 .72-2.1-2.25L3 0z" fill="#000" />
      <Path
        d="M3 0l-.9 2.94L0 5.19l3-.69 3 .72-2.1-2.25L3 0z"
        fill="url(#paint0_linear_394_696)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_394_696"
          x1={3.05052}
          y1={6.33208}
          x2={10.2054}
          y2={-1.72946}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
        </LinearGradient>
      </Defs>
    </Svg>
)

import * as React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

export const PurpleSoft = (props) => (
  <Svg
    width={6}
    height={7}
    viewBox="0 0 6 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 4.578l2 1.11 2-1.11V2.42L3 1.31 1 2.421v2.157zM3 .166L0 1.833v3.333l3 1.667 3-1.667V1.833L3 .166z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 4.578l2 1.11 2-1.11V2.42L3 1.31 1 2.421v2.157zM3 .166L0 1.833v3.333l3 1.667 3-1.667V1.833L3 .166z"
      fill="url(#paint0_linear_394_1253)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_394_1253"
        x1={3.05052}
        y1={8.25297}
        x2={12.1816}
        y2={0.197305}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
    </Defs>
  </Svg>
)

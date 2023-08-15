import * as React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

export const ProfileGradient = (props) => (
  <Svg
    width={12}
    height={14}
    viewBox="0 0 12 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6 6.25a3 3 0 100-6 3 3 0 000 6zm0-4.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 6A5.25 5.25 0 00.75 13a.75.75 0 101.5 0 3.75 3.75 0 117.5 0 .75.75 0 101.5 0A5.25 5.25 0 006 7.75z"
      fill="url(#paint0_linear_402_7392)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_402_7392"
        x1={-20.7036}
        y1={9.00995}
        x2={20.7732}
        y2={9.00995}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
    </Defs>
  </Svg>
)

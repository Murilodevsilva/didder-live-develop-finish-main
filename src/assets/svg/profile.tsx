import * as React from 'react'
import Svg, { Path, G, Defs, LinearGradient, Stop } from 'react-native-svg'

export const Profile = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_b_18_6611)">
      <Path
        d="M12 1.8a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zM9 12.8a4.75 4.75 0 000 9.5h6a4.75 4.75 0 100-9.5H9z"
        fill="#CC9ECE"
      />
      <Path
        d="M12 1.3a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zm-3 11a5.25 5.25 0 100 10.5h6a5.25 5.25 0 100-10.5H9z"
        stroke="url(#paint0_linear_18_6611)"
        strokeLinecap="round"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_18_6611"
        x1={4.25}
        y1={1.7998}
        x2={23.9786}
        y2={16.7014}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
)

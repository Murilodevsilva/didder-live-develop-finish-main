import * as React from 'react'
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg'

export const PurpleLightStreamer = (props) => (
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
        d="M4.348.937a.281.281 0 01.396.044 4.031 4.031 0 01-.007 5.039.281.281 0 11-.438-.352 3.469 3.469 0 00.005-4.336.281.281 0 01.044-.395zM2.908 2.05a.281.281 0 01.393.063 2.355 2.355 0 010 2.767.281.281 0 11-.455-.33 1.793 1.793 0 000-2.107.281.281 0 01.063-.393zm-1.783 2.2a.75.75 0 100-1.5.75.75 0 000 1.5z"
        fill="url(#paint0_linear_351_42672)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_351_42672"
          x1={3}
          y1={0.875031}
          x2={3}
          y2={6.12516}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
        </LinearGradient>
      </Defs>
    </Svg>
)

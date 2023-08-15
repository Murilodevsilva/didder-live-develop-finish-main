import * as React from 'react'
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg'

export const YellowDarkStreamer = (props) => (
  <Svg
      width={6}
      height={5}
      viewBox="0 0 6 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.5 2.12V1c0-.275-.225-.5-.5-.5H1C.725.5.5.725.5 1v3c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5V2.88l.787.783c.078.08.213.022.213-.088v-2.15c0-.11-.135-.167-.213-.088L4.5 2.12zM1.4 3.3l.345-.458a.124.124 0 01.2 0l.305.408.558-.743a.124.124 0 01.2 0l.595.793a.125.125 0 01-.1.2H1.5a.125.125 0 01-.1-.2z"
        fill="url(#paint0_linear_351_42792)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_351_42792"
          x1={3}
          y1={0.5}
          x2={3}
          y2={4.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
        </LinearGradient>
      </Defs>
    </Svg>
)

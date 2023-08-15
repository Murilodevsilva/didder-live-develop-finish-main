import * as React from 'react'
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg'

export const PurpleSoftStreamer = (props) => (
  <Svg
      width={6}
      height={5}
      viewBox="0 0 6 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 1H.5v3.5A.5.5 0 001 5h3.5v-.5H1V1zm4-1H2a.5.5 0 00-.5.5v3A.5.5 0 002 4h3a.5.5 0 00.5-.5v-3A.5.5 0 005 0zM3 3.125V.875L4.5 2 3 3.125z"
        fill="url(#paint0_linear_351_42912)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_351_42912"
          x1={3}
          y1={0}
          x2={3}
          y2={5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
        </LinearGradient>
      </Defs>
    </Svg>
)

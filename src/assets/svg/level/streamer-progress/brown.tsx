import * as React from 'react'
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg'

export const BrownStreamer = (props) => (
  <Svg
      width={6}
      height={5}
      viewBox="0 0 6 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3 .063a2.437 2.437 0 100 4.874A2.437 2.437 0 003 .062zm0 4.5A2.062 2.062 0 113 .438a2.062 2.062 0 010 4.125zM4.688 2.5a1.687 1.687 0 11-3.375 0 1.687 1.687 0 013.375 0z"
        fill="url(#paint0_linear_351_42442)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_351_42442"
          x1={3}
          y1={0.0625}
          x2={3}
          y2={4.9375}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
        </LinearGradient>
      </Defs>
    </Svg>
)

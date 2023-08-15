import * as React from 'react'
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg'

export const BlueStreamer = (props) => (
  <Svg
      width={6}
      height={5}
      viewBox="0 0 6 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.5 1.75a.5.5 0 00-.5-.5h-.358L3.037.243A.502.502 0 002.608 0H1.25v.5h1.358l.45.75H1a.5.5 0 00-.5.5V4a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-.75l1 .5V2l-1 .5v-.75zm-1.75 2h-1.5v-.5h1.5v.5z"
        fill="url(#paint0_linear_351_42603)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_351_42603"
          x1={3}
          y1={0}
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

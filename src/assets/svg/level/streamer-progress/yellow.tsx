import * as React from 'react'
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg'

export const YellowStreamer = (props) => (
  <Svg
      width={6}
      height={5}
      viewBox="0 0 6 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3 5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-.625-3.5h1.25A.375.375 0 014 1.875v1.25a.375.375 0 01-.375.375h-1.25A.375.375 0 012 3.125v-1.25a.375.375 0 01.375-.375z"
        fill="url(#paint0_linear_351_42473)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_351_42473"
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

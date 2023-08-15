import * as React from 'react'
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg'

export const RedStreamer = (props) => (
  <Svg
      width={6}
      height={5}
      viewBox="0 0 6 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.25.25H.75c-.278 0-.5.222-.5.5v3a.5.5 0 00.5.5H2v.5h2v-.5h1.25a.5.5 0 00.497-.5l.003-3a.5.5 0 00-.5-.5zm0 3.5H.75v-3h4.5v3z"
        fill="url(#paint0_linear_351_42732)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_351_42732"
          x1={3}
          y1={0.25}
          x2={3}
          y2={4.75}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
        </LinearGradient>
      </Defs>
    </Svg>
)

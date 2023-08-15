import * as React from 'react'
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg'

export const CameraStreamer = (props) => (
  <Svg
      width={6}
      height={5}
      viewBox="0 0 6 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5 .5h-.793l-.31-.338A.498.498 0 003.53 0H2.47c-.14 0-.275.06-.37.163L1.792.5H1C.725.5.5.725.5 1v3c0 .275.225.5.5.5h4c.275 0 .5-.225.5-.5V1c0-.275-.225-.5-.5-.5zM3 3.75a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
        fill="url(#paint0_linear_351_42973)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_351_42973"
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

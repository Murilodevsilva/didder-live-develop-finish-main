import * as React from 'react'
import Svg, {

  Path,
  Defs,
  LinearGradient,
  Stop,

} from 'react-native-svg'

export const YellowDark = (props) => (
  <Svg
      width={6}
      height={6}
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3 0l-.818 2.182L0 3l2.182.818L3 6l.818-2.182L6 3l-2.182-.818L3 0z"
        fill="#000"
      />
      <Path
        d="M3 0l-.818 2.182L0 3l2.182.818L3 6l.818-2.182L6 3l-2.182-.818L3 0z"
        fill="url(#paint0_linear_394_1122)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_394_1122"
          x1={3.05052}
          y1={7.27826}
          x2={11.3315}
          y2={-0.839122}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
        </LinearGradient>
      </Defs>
    </Svg>
)

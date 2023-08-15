import * as React from 'react'
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg'

export const PurpleStreamer = (props) => (
  <Svg
      width={6}
      height={5}
      viewBox="0 0 6 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.375 1.831V3.17c0 .096.044.168.131.219.088.05.173.045.257-.013L3.8 2.712c.08-.05.119-.12.119-.212a.238.238 0 00-.119-.212l-1.037-.663a.223.223 0 00-.257-.012.238.238 0 00-.131.218zM3 5c-.346 0-.67-.066-.975-.197a2.523 2.523 0 01-.794-.534 2.523 2.523 0 01-.534-.794A2.433 2.433 0 01.5 2.5c0-.346.066-.67.197-.975.131-.304.31-.569.534-.794.225-.225.49-.403.794-.534C2.329.066 2.655 0 3 0c.346 0 .67.066.975.197.304.131.569.31.794.534.225.225.403.49.534.794.131.304.197.63.197.975 0 .346-.066.67-.197.975-.131.304-.31.569-.534.794-.225.225-.49.403-.794.534C3.671 4.934 3.345 5 3 5z"
        fill="url(#paint0_linear_351_42542)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_351_42542"
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

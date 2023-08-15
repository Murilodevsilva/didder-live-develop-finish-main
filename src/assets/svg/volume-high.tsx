import * as React from 'react'
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export const VolumeHigh = (props) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_b_250_2341)">
        <Circle
          cx={11.9984}
          cy={12.0004}
          r={11.1}
          fill="url(#paint0_linear_250_2341)"
        />
        <Circle
          cx={11.9984}
          cy={12.0004}
          r={11.25}
          stroke="url(#paint1_linear_250_2341)"
          strokeWidth={0.3}
          strokeLinecap="round"
        />
      </G>
      <G filter="url(#filter1_d_250_2341)">
        <Path
          d="M12.645 5.704c-.63-.184-1.236.068-1.816.434-.584.368-1.292.952-2.178 1.682l-.785.647c-.15.124-.211.174-.272.22-.51.38-1.123.6-1.76.631a7.586 7.586 0 01-.349.004h-.031c-.168 0-.298 0-.414.013a2.076 2.076 0 00-1.832 1.832c-.013.116-.013.245-.013.414v.928c0 .168 0 .298.013.413a2.076 2.076 0 001.832 1.832c.116.014.246.014.414.013h.031c.195 0 .274 0 .35.004.636.031 1.248.251 1.76.632.06.045.12.095.271.22l.785.646c.886.73 1.594 1.314 2.178 1.682.58.366 1.186.618 1.816.434.21-.06.408-.154.588-.277.542-.37.733-.997.82-1.678.087-.684.087-1.602.087-2.75v-3.27c0-1.149 0-2.066-.087-2.75-.087-.682-.278-1.31-.82-1.679a2.075 2.075 0 00-.588-.277z"
          fill="url(#paint2_linear_250_2341)"
        />
        <Path
          d="M17.748 6.36a.566.566 0 10-.8.801l.528.529c.46.46.663.663.815.846a5.472 5.472 0 010 7.018c-.152.182-.355.386-.815.846l-.528.528a.566.566 0 10.8.8l.556-.555c.425-.425.667-.667.856-.893a6.605 6.605 0 000-8.47c-.19-.227-.43-.469-.856-.894l-.555-.555z"
          fill="url(#paint3_linear_250_2341)"
        />
        <Path
          d="M16.239 8.625a.566.566 0 10-.8.8l.301.303.081.081a3.208 3.208 0 010 4.471l-.08.082-.303.302a.566.566 0 10.8.8l.307-.306.088-.089a4.34 4.34 0 00-.088-6.138l-.306-.306z"
          fill="url(#paint4_linear_250_2341)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_250_2341"
          x1={0.898437}
          y1={17.6046}
          x2={28.2174}
          y2={16.9577}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#4568DC" />
          <Stop offset={1} stopColor="#B06AB3" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_250_2341"
          x1={0.898437}
          y1={0.900391}
          x2={23.1097}
          y2={23.0891}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" stopOpacity={0.25} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_250_2341"
          x1={12.0934}
          y1={21.1746}
          x2={29.0384}
          y2={-1.52917}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_250_2341"
          x1={12.0934}
          y1={21.1746}
          x2={29.0384}
          y2={-1.52917}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear_250_2341"
          x1={12.0934}
          y1={21.1746}
          x2={29.0384}
          y2={-1.52917}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

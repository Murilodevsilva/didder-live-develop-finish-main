import * as React from 'react'
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg'


export const ProfileAdd2 = (props) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_b_250_651)">
        <Circle
          cx={11.9984}
          cy={12.0004}
          r={11.1}
          fill="url(#paint0_linear_250_651)"
        />
        <Circle
          cx={11.9984}
          cy={12.0004}
          r={11.25}
          stroke="url(#paint1_linear_250_651)"
          strokeWidth={0.3}
          strokeLinecap="round"
        />
      </G>
      <G filter="url(#filter1_d_250_651)">
        <Path
          d="M17.686 13.932a.527.527 0 00-1.056 0v1.581h-1.584a.527.527 0 100 1.054h1.584v1.58a.527.527 0 001.056 0v-1.58h1.584a.527.527 0 100-1.054h-1.584v-1.58z"
          fill="url(#paint2_linear_250_651)"
        />
        <Path
          d="M8.71 8.137a3.34 3.34 0 013.344-3.336 3.34 3.34 0 013.344 3.336 3.34 3.34 0 01-3.344 3.337A3.34 3.34 0 018.71 8.137z"
          fill="url(#paint3_linear_250_651)"
        />
        <Path
          d="M6.598 15.864a3.34 3.34 0 013.344-3.336h4.224c.69 0 1.33.208 1.863.565a1.397 1.397 0 00-.28.84v.702h-.703c-.778 0-1.408.629-1.408 1.405s.63 1.405 1.408 1.405h.704v.702c0 .209.045.407.127.584-.5.298-1.086.47-1.711.47H9.942a3.34 3.34 0 01-3.344-3.337z"
          fill="url(#paint4_linear_250_651)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_250_651"
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
          id="paint1_linear_250_651"
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
          id="paint2_linear_250_651"
          x1={13.3088}
          y1={22.2686}
          x2={33.0739}
          y2={4.5085}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_250_651"
          x1={13.3088}
          y1={22.2686}
          x2={33.0739}
          y2={4.5085}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear_250_651"
          x1={13.3088}
          y1={22.2686}
          x2={33.0739}
          y2={4.5085}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

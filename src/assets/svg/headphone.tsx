import * as React from 'react'
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg'

export const Headphone = (props) => (
  <Svg
    width={35}
    height={35}
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_1114_12652)">
      <G filter="url(#filter0_b_1114_12652)">
        <Circle
          cx={12}
          cy={11.9999}
          r={11.1}
          fill="#29ACD6"
          fillOpacity={0.35}
        />
        <Circle cx={12} cy={11.9999} r={11.1} fill="#91A1E5" />
        <Circle
          cx={12}
          cy={11.9999}
          r={11.25}
          stroke="url(#paint0_linear_1114_12652)"
          strokeWidth={0.3}
          strokeLinecap="round"
        />
      </G>
      <G filter="url(#filter1_d_1114_12652)">
        <Path
          d="M10.936 6.171a6.06 6.06 0 012.128 0c3.162.565 5.295 3.491 4.819 6.61l-.006.035c-.963.05-1.728.832-1.728 1.79v1.303c0 .989.817 1.791 1.825 1.791 1.009 0 1.826-.802 1.826-1.791v-1.303c0-.678-.384-1.268-.95-1.572l.017-.108c.557-3.64-1.934-7.057-5.625-7.716a7.074 7.074 0 00-2.484 0c-3.691.659-6.182 4.075-5.625 7.716l.016.108c-.565.304-.949.893-.949 1.572v1.303c0 .989.817 1.791 1.826 1.791 1.008 0 1.825-.802 1.825-1.791v-1.303c0-.958-.765-1.74-1.728-1.79l-.006-.035c-.476-3.119 1.657-6.045 4.819-6.61z"
          fill="url(#paint1_linear_1114_12652)"
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_1114_12652"
        x1={0.899994}
        y1={0.899902}
        x2={23.1112}
        y2={23.0886}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1114_12652"
        x1={12.1314}
        y1={20.3844}
        x2={29.2038}
        y2={-0.335343}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <ClipPath id="clip0_1114_12652">
        <Path fill="#fff" d="M0 0H24V24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

import * as React from 'react'
import Svg, {
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from 'react-native-svg'

export const Heart = (props) => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_b_18_6593)" clipPath="url(#clip0_18_6593)">
      <G filter="url(#filter1_b_18_6593)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.9 4.146C9.225 3.084 6.522 2.08 4.188 4.46-1.352 10.11 8.149 21 12.5 21c4.35 0 13.852-10.889 8.311-16.54-2.334-2.38-5.037-1.376-6.71-.314-.946.6-2.256.6-3.202 0z"
          fill="#CC9ECE"
        />
        <Path
          d="M11.167 3.724c-.87-.553-2.046-1.116-3.339-1.21-1.317-.097-2.722.297-3.996 1.597C2.325 5.647 1.849 7.542 2.04 9.478c.19 1.92 1.035 3.888 2.176 5.644 1.142 1.759 2.602 3.338 4.063 4.482 1.438 1.127 2.96 1.896 4.221 1.896 1.26 0 2.783-.769 4.221-1.896 1.461-1.144 2.92-2.723 4.063-4.482 1.14-1.756 1.986-3.724 2.176-5.644.191-1.936-.285-3.83-1.791-5.367-1.275-1.3-2.68-1.694-3.997-1.597-1.293.095-2.468.657-3.34 1.21-.781.496-1.883.496-2.665 0z"
          stroke="url(#paint0_linear_18_6593)"
          strokeLinecap="round"
        />
      </G>
      <G filter="url(#filter2_d_18_6593)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.244 5.3A.75.75 0 1016.71 6.7a3.2 3.2 0 011.116.745c.481.477.786 1 .956 1.552a.75.75 0 001.434-.442 5.195 5.195 0 00-1.334-2.176 4.694 4.694 0 00-1.64-1.08z"
          fill="url(#paint1_linear_18_6593)"
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_18_6593"
        x1={2.5}
        y1={3}
        x2={20.4115}
        y2={22.8815}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_18_6593"
        x1={18.2726}
        y1={10.4383}
        x2={24.1574}
        y2={5.01274}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <ClipPath id="clip0_18_6593">
        <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

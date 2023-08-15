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

export const Group = (props) => (
  <Svg
    width={35}
    height={35}
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_1114_12626)">
      <G filter="url(#filter0_b_1114_12626)">
        <Circle cx={12} cy={12} r={12} fill="#91A1E5" />
        <Circle
          cx={12}
          cy={12}
          r={12.5}
          stroke="url(#paint0_linear_1114_12626)"
          strokeLinecap="round"
        />
      </G>
      <G filter="url(#filter1_d_1114_12626)">
        <Path
          d="M9.52 11.005a3.542 3.542 0 01-1.037-2.51c0-.982.397-1.87 1.037-2.511a2.75 2.75 0 00-1.222-.285A2.786 2.786 0 005.52 8.495a2.786 2.786 0 002.777 2.795 2.75 2.75 0 001.222-.284z"
          fill="url(#paint1_linear_1114_12626)"
        />
        <Path
          d="M9.223 8.495A2.786 2.786 0 0112 5.699a2.786 2.786 0 012.777 2.796A2.786 2.786 0 0112 11.29a2.786 2.786 0 01-2.777-2.795z"
          fill="url(#paint2_linear_1114_12626)"
        />
        <Path
          d="M14.48 5.984a3.542 3.542 0 011.037 2.51c0 .982-.396 1.87-1.037 2.511a2.75 2.75 0 001.222.285 2.786 2.786 0 002.777-2.795 2.786 2.786 0 00-2.777-2.796 2.75 2.75 0 00-1.222.285z"
          fill="url(#paint3_linear_1114_12626)"
        />
        <Path
          d="M7.002 15.204a2.786 2.786 0 012.777-2.796h4.442a2.786 2.786 0 012.777 2.796 2.786 2.786 0 01-2.777 2.795H9.78a2.786 2.786 0 01-2.777-2.795z"
          fill="url(#paint4_linear_1114_12626)"
        />
        <Path
          d="M3.3 14.458a2.786 2.786 0 012.777-2.795h3.702c-1.943 0-3.517 1.585-3.517 3.54 0 .765.24 1.472.649 2.05h-.834A2.786 2.786 0 013.3 14.459z"
          fill="url(#paint5_linear_1114_12626)"
        />
        <Path
          d="M17.738 15.204c0 .764-.24 1.471-.649 2.05h.835a2.786 2.786 0 002.776-2.796 2.786 2.786 0 00-2.776-2.795H14.22c1.943 0 3.517 1.585 3.517 3.54z"
          fill="url(#paint6_linear_1114_12626)"
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_1114_12626"
        x1={0.00000762939}
        y1={0}
        x2={24.0122}
        y2={23.9878}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1114_12626"
        x1={12.1466}
        y1={20.6196}
        x2={28.2573}
        y2={-1.72093}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_1114_12626"
        x1={12.1466}
        y1={20.6196}
        x2={28.2573}
        y2={-1.72093}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_1114_12626"
        x1={12.1466}
        y1={20.6196}
        x2={28.2573}
        y2={-1.72093}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="paint4_linear_1114_12626"
        x1={12.1466}
        y1={20.6196}
        x2={28.2573}
        y2={-1.72093}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="paint5_linear_1114_12626"
        x1={12.1466}
        y1={20.6196}
        x2={28.2573}
        y2={-1.72093}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="paint6_linear_1114_12626"
        x1={12.1466}
        y1={20.6196}
        x2={28.2573}
        y2={-1.72093}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <ClipPath id="clip0_1114_12626">
        <Path fill="#fff" d="M0 0H24V24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

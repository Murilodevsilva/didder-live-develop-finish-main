import * as React from 'react'
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg'

export const AddCircle = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_5_848)">
      <G filter="url(#filter0_b_5_848)" clipRule="evenodd">
        <Path
          fillRule="evenodd"
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
          fill="#91A1E5"
        />
        <Path
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
          stroke="url(#paint0_linear_5_848)"
        />
      </G>
      <G filter="url(#filter1_d_5_848)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
          fill="url(#paint1_linear_5_848)"
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_5_848"
        x1={2}
        y1={2}
        x2={22.0101}
        y2={21.9899}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_5_848"
        x1={12.0632}
        y1={17.3478}
        x2={22.4144}
        y2={7.2011}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <ClipPath id="clip0_5_848">
        <Path fill="#fff" d="M0 0H24V24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

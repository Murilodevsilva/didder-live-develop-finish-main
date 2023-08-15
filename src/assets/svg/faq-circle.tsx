import * as React from 'react'
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg'

export const FAQCircle = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_5_8812)">
      <G filter="url(#filter0_b_5_8812)" clipRule="evenodd">
        <Path
          fillRule="evenodd"
          d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
          fill="#91A1E5"
        />
        <Path
          d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
          stroke="url(#paint0_linear_5_8812)"
        />
      </G>
      <G filter="url(#filter1_d_5_8812)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.559 7.661c-.972-1.296-3-.967-3.512.57l-.335 1.006a.75.75 0 01-1.423-.474l.335-1.006c.895-2.685 4.437-3.26 6.135-.996a3.508 3.508 0 01-.167 4.416l-.919 1.05a3.73 3.73 0 00-.923 2.456V15a.75.75 0 01-1.5 0v-.317c0-1.267.46-2.49 1.294-3.444l.92-1.05a2.008 2.008 0 00.095-2.528zM12 19a1 1 0 100-2 1 1 0 000 2z"
          fill="url(#paint1_linear_5_8812)"
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_5_8812"
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
        id="paint1_linear_5_8812"
        x1={11.9159}
        y1={21.9066}
        x2={27.3005}
        y2={13.9363}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <ClipPath id="clip0_5_8812">
        <Path fill="#fff" d="M0 0H24V24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

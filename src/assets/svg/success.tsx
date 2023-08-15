import * as React from 'react'
import Svg, { Path, G, Defs, LinearGradient, Stop } from 'react-native-svg'

export const Success = (props) => (
  <Svg
    width={81}
    height={80}
    viewBox="0 0 81 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_b_291_5765)" clipRule="evenodd">
      <Path
        fillRule="evenodd"
        d="M40.5 73.333c18.41 0 33.333-14.924 33.333-33.333 0-18.41-14.923-33.334-33.333-33.334C22.09 6.666 7.167 21.59 7.167 40c0 18.41 14.924 33.333 33.333 33.333z"
        fill="url(#paint0_linear_291_5765)"
      />
      <Path
        d="M40.5 73.333c18.41 0 33.333-14.924 33.333-33.333 0-18.41-14.923-33.334-33.333-33.334C22.09 6.666 7.167 21.59 7.167 40c0 18.41 14.924 33.333 33.333 33.333z"
        stroke="url(#paint1_linear_291_5765)"
        strokeLinecap="round"
      />
    </G>
    <G filter="url(#filter1_d_291_5765)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M59.03 31.668a2.5 2.5 0 10-3.726-3.335l-11.23 12.543c-2.276 2.542-3.808 4.245-5.119 5.346-1.248 1.05-1.981 1.278-2.621 1.278-.64 0-1.374-.229-2.622-1.278-1.31-1.101-2.843-2.804-5.119-5.346l-2.897-3.236a2.5 2.5 0 00-3.725 3.335l3.021 3.375c2.12 2.367 3.887 4.342 5.503 5.7 1.708 1.436 3.552 2.45 5.838 2.45 2.287 0 4.13-1.014 5.84-2.45 1.615-1.358 3.383-3.333 5.502-5.7L59.03 31.668z"
        fill="url(#paint2_linear_291_5765)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_291_5765"
        x1={7.16675}
        y1={56.8294}
        x2={89.2056}
        y2={54.8866}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_291_5765"
        x1={7.16675}
        y1={6.6665}
        x2={73.8672}
        y2={73.2994}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_291_5765"
        x1={40.823}
        y1={57.8261}
        x2={72.6543}
        y2={9.98221}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
    </Defs>
  </Svg>
)

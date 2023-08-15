import * as React from 'react'
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg'

export const LockGradient = (props) => (
  <Svg
    width={16}
    height={19}
    viewBox="0 0 16 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.717 7.434a.68.68 0 01-.68-.68V4.808A3.45 3.45 0 007.59 1.362h-.015c-.918 0-1.779.353-2.429.998a3.416 3.416 0 00-1.02 2.432v1.962a.68.68 0 01-1.36 0V4.808A4.785 4.785 0 014.19 1.394C5.101.49 6.305-.033 7.593.002a4.811 4.811 0 014.804 4.806v1.946a.68.68 0 01-.68.68z"
      fill="url(#paint0_linear_402_7421)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.118 7.37a2.76 2.76 0 00-2.758 2.758v3.889a2.76 2.76 0 002.758 2.758h6.928a2.761 2.761 0 002.758-2.758v-3.889a2.761 2.761 0 00-2.758-2.758H4.118zm6.928 10.765H4.118A4.122 4.122 0 010 14.017v-3.89A4.122 4.122 0 014.118 6.01h6.928a4.122 4.122 0 014.118 4.118v3.889a4.122 4.122 0 01-4.118 4.118z"
      fill="url(#paint1_linear_402_7421)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.581 13.759a.68.68 0 01-.68-.68v-2.014a.68.68 0 011.36 0v2.014a.68.68 0 01-.68.68z"
      fill="url(#paint2_linear_402_7421)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_402_7421"
        x1={2.76733}
        y1={5.59395}
        x2={14.6128}
        y2={5.23058}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_402_7421"
        x1={-1.21176e-8}
        y1={15.1331}
        x2={18.6544}
        y2={14.5805}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_402_7421"
        x1={6.90125}
        y1={12.9238}
        x2={8.5756}
        y2={12.9078}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
    </Defs>
  </Svg>
)

import * as React from 'react'
import Svg, { Path, G, Defs, LinearGradient, Stop } from 'react-native-svg'

export const HomeSelected = (props) => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_b_1223_4488)" clipRule="evenodd">
      <Path
        fillRule="evenodd"
        d="M6.783 4.765c-2.666 1.938-4 2.907-4.524 4.338-.042.115-.08.23-.113.348-.417 1.466.092 3.033 1.11 6.168 1.02 3.136 1.529 4.703 2.728 5.643.096.076.195.148.296.216 1.265.85 2.913.85 6.21.85 3.296 0 4.944 0 6.21-.85.1-.068.2-.14.296-.216 1.199-.94 1.708-2.508 2.727-5.643 1.018-3.135 1.528-4.702 1.11-6.168a5.013 5.013 0 00-.113-.348c-.524-1.431-1.857-2.4-4.524-4.338-2.667-1.937-4-2.906-5.523-2.962a4.99 4.99 0 00-.367 0c-1.522.056-2.856 1.025-5.523 2.962z"
        fill="#566FD7"
      />
      <Path
        d="M6.783 4.765c-2.666 1.938-4 2.907-4.524 4.338-.042.115-.08.23-.113.348-.417 1.466.092 3.033 1.11 6.168 1.02 3.136 1.529 4.703 2.728 5.643.096.076.195.148.296.216 1.265.85 2.913.85 6.21.85 3.296 0 4.944 0 6.21-.85.1-.068.2-.14.296-.216 1.199-.94 1.708-2.508 2.727-5.643 1.018-3.135 1.528-4.702 1.11-6.168a5.013 5.013 0 00-.113-.348c-.524-1.431-1.857-2.4-4.524-4.338-2.667-1.937-4-2.906-5.523-2.962a4.99 4.99 0 00-.367 0c-1.522.056-2.856 1.025-5.523 2.962z"
        stroke="url(#paint0_linear_1223_4488)"
        strokeLinecap="round"
      />
    </G>
    <Path
      d="M15.74 22.273v-3.654a3.25 3.25 0 10-6.5 0v3.654c.873.054 1.929.054 3.25.054 1.32 0 2.377 0 3.25-.054z"
      fill="url(#paint1_linear_1223_4488)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1223_4488"
        x1={2}
        y1={1.7998}
        x2={22.5339}
        y2={22.7642}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1223_4488"
        x1={12.5445}
        y1={23.8097}
        x2={22.1127}
        y2={15.0482}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
    </Defs>
  </Svg>
)

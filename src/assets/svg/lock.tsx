import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const Lock = (props) => (
  <Svg
    width={16}
    height={20}
    viewBox="0 0 16 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.717 8.367a.68.68 0 01-.68-.68V5.74A3.45 3.45 0 007.59 2.294h-.015c-.918 0-1.779.354-2.429.998a3.416 3.416 0 00-1.02 2.433v1.962a.68.68 0 01-1.36 0V5.74A4.785 4.785 0 014.19 2.327C5.101 1.423 6.305.9 7.593.934a4.811 4.811 0 014.804 4.806v1.947a.68.68 0 01-.68.68z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.118 8.303A2.76 2.76 0 001.36 11.06v3.889a2.76 2.76 0 002.758 2.758h6.928a2.761 2.761 0 002.758-2.758v-3.89a2.761 2.761 0 00-2.758-2.757H4.118zm6.928 10.764H4.118A4.122 4.122 0 010 14.95v-3.888a4.122 4.122 0 014.118-4.118h6.928a4.122 4.122 0 014.118 4.118v3.888a4.122 4.122 0 01-4.118 4.118z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.581 14.692a.68.68 0 01-.68-.68v-2.014a.68.68 0 011.36 0v2.014a.68.68 0 01-.68.68z"
      fill="#fff"
    />
  </Svg>
)

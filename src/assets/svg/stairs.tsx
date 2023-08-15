import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const Stairs = (props) => (
  <Svg
    width={18}
    height={12}
    viewBox="0 0 18 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.667.667h-1a1 1 0 00-1 1v8.666a1 1 0 001 1h1a1 1 0 001-1V1.667a1 1 0 00-1-1zM11 3h1a1 1 0 011 1v6.333a1 1 0 01-1 1h-1a1 1 0 01-1-1V4a1 1 0 011-1zM7.334 5.333h-1a1 1 0 00-1 1v4a1 1 0 001 1h1a1 1 0 001-1v-4a1 1 0 00-1-1zm-4.667 2h-1a1 1 0 00-1 1v2a1 1 0 001 1h1a1 1 0 001-1v-2a1 1 0 00-1-1z"
      fill="#35383F"
    />
  </Svg>
)

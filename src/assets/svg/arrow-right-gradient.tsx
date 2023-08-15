import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const ArrowRightGradient = (props) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5.333 2.666l5.334 5.333-5.334 5.334"
      stroke="#91A1E5"
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

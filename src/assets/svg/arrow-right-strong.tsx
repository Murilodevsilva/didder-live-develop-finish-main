import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const ArrowRightStrong = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8 4l8 8-8 8"
      stroke="#757575"
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

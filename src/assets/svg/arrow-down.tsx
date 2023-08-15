import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const ArrowDown = (props) => (
  <Svg
    width={17}
    height={16}
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13.833 5.333L8.5 10.667 3.166 5.333"
      stroke="#757575"
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

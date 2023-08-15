import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const SearchIcon = (props) => (
  <Svg
    width={19}
    height={19}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17.497 17.5l-3.738-3.745m2.072-5.005a7.083 7.083 0 11-14.166 0 7.083 7.083 0 0114.166 0v0z"
      stroke="#757575"
      strokeWidth={1.66667}
      strokeLinecap="round"
    />
  </Svg>
)

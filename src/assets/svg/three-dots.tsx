import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const ThreeDots = (props) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8 18a2 2 0 100-4 2 2 0 000 4zM16 18a2 2 0 100-4 2 2 0 000 4zM24 18a2 2 0 100-4 2 2 0 000 4z"
      fill="#fff"
    />
  </Svg>
)

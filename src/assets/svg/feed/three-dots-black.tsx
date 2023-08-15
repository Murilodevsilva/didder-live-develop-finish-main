import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const ThreeDotsBlack = (props) => (
  <Svg
    width={16}
    height={4}
    viewBox="0 0 16 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8 4a2 2 0 100-4 2 2 0 000 4zM2 4a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z"
      fill="#616161"
    />
  </Svg>
)

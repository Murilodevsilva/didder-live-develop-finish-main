import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const Share = (props) => (
  <Svg
    width={17}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-2.5 1.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12c.155.49.155 1.015 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.498 2.498 0 0 1 11.5 2.5ZM3 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM14 12a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
      fill="#fff"
    />
  </Svg>
)

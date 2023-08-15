import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const IconArrow = (props) => {
  return (
    <Svg
      width={8}
      height={14}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.332 1.668l5.333 5.333-5.333 5.334"
        stroke="#616161"
        strokeWidth={1.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

import * as React from 'react'
import Svg, { G, Mask, Path } from 'react-native-svg'

export const Movie = (props) => (
    <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.014 5.66a.4.4 0 00-.612.34v4.12a.4.4 0 00.62.334l3.2-2.12a.4.4 0 00-.008-.672l-3.2-2.001zM3.602 2.4a2 2 0 00-2 2v7.2a2 2 0 002 2h8.8a2 2 0 002-2V4.4a2 2 0 00-2-2h-8.8zm-1.2 2a1.2 1.2 0 011.2-1.2h8.8a1.2 1.2 0 011.2 1.2v7.2a1.2 1.2 0 01-1.2 1.2h-8.8a1.2 1.2 0 01-1.2-1.2V4.4z"
      fill="#fff"
    />
  </Svg>
)

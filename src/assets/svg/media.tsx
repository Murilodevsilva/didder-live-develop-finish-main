import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const Media = (props) => {
  return (
    <Svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13 5.56H3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-10a2 2 0 00-2-2z"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <Path
        d="M5 5V3a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2h-2"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </Svg>
  )
}

import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const Copy = (props) => (
  <Svg
    width={19}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5.5 3v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6.242a2 2 0 0 0-.602-1.43L13.583 1.57A2 2 0 0 0 12.185 1H7.5a2 2 0 0 0-2 2v0Z"
      stroke="#566FD7"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.5 17v2a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"
      stroke="#566FD7"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

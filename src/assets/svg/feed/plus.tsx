import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const Plus = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M24 13.714H13.714V24h-3.428V13.714H0v-3.428h10.286V0h3.428v10.286H24v3.428z"
      fill="#fff"
    />
  </Svg>
)

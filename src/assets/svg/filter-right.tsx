import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const FilterRight = (props) => (
  <Svg
      width={18}
      height={11}
      viewBox="0 0 18 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18 9.75a.75.75 0 00-.75-.75h-4.5a.75.75 0 100 1.5h4.5a.75.75 0 00.75-.75zm0-4.5a.75.75 0 00-.75-.75H6.75a.75.75 0 000 1.5h10.5a.75.75 0 00.75-.75zm0-4.5a.75.75 0 00-.75-.75H.75a.75.75 0 000 1.5h16.5A.75.75 0 0018 .75z"
        fill="#757575"
      />
    </Svg>
)

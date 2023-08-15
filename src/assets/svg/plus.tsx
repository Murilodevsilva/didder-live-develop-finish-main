import * as React from 'react'
import Svg, { Path, Rect } from 'react-native-svg'

export const Plus = (props) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect y={0.000976562} width={32} height={32} rx={16} fill="#F3F5F6" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 9.001h-2v6H9v2h6v6h2v-6h6v-2h-6v-6z"
      fill="#000"
    />
  </Svg>
)

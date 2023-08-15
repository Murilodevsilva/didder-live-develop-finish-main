import * as React from 'react'
import Svg, { Path, Rect } from 'react-native-svg'

export const XmarkBackground = (props) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={32} height={32} rx={16} fill="#01174A" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.657 11.757l-1.414-1.414L16 14.586l-4.243-4.243-1.414 1.414L14.586 16l-4.243 4.243 1.414 1.414L16 17.414l4.243 4.243 1.414-1.414L17.414 16l4.243-4.243z"
      fill="#fff"
    />
  </Svg>
)

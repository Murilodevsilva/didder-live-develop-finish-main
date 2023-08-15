import * as React from 'react'
import Svg, {

  Path,

} from 'react-native-svg'

export const Puzzle = (props) => (
  <Svg
  width={40}
  height={40}
  viewBox="0 0 40 40"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <Path
    d="M4.584 20h30.833M33.751 4.583H6.25A1.667 1.667 0 004.584 6.25v27.5a1.667 1.667 0 001.667 1.667h27.5a1.667 1.667 0 001.666-1.667V6.25a1.667 1.667 0 00-1.666-1.667v0z"
    stroke="#7C4A7E"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <Path
    d="M20 20v6.59h.002a2.99 2.99 0 013.268-1.826 2.62 2.62 0 01-.006 5.233A2.989 2.989 0 0120 28.167v7.25m0-30.834v6.59h-.002a2.99 2.99 0 00-3.268-1.826 2.756 2.756 0 00-2.507 2.62 2.758 2.758 0 002.513 2.614A2.989 2.989 0 0020 12.75V20"
    stroke="#7C4A7E"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</Svg>
)

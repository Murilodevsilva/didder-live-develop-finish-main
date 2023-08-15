import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

export const IconJapan = (props) => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_49_57622)">
        <Path
          d="M10 19.375a9.375 9.375 0 100-18.75 9.375 9.375 0 100 18.75z"
          fill="#F5F5F5"
        />
        <Path
          d="M10 13.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
          fill="#ED4C5C"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_49_57622">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

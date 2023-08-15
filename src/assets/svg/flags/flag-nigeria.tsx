import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

export const IconNigeria = (props) => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_49_57572)">
        <Path
          d="M.625 10c0 4.094 2.625 7.563 6.25 8.844V1.156C3.25 2.438.625 5.906.625 10zm18.75 0a9.345 9.345 0 00-6.25-8.844v17.688A9.345 9.345 0 0019.375 10z"
          fill="#83BF4F"
        />
        <Path
          d="M6.875 18.844a9.374 9.374 0 003.125.531 9.374 9.374 0 003.125-.531V1.156A9.373 9.373 0 0010 .625a9.373 9.373 0 00-3.125.531v17.688z"
          fill="#F9F9F9"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_49_57572">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

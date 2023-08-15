import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

export const IconItaly = (props) => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_49_57635)">
        <Path
          d="M.531 10c0 4.094 2.625 7.563 6.25 8.844V1.156C3.156 2.438.531 5.906.531 10z"
          fill="#75A843"
        />
        <Path
          d="M19.281 10c0-4.094-2.625-7.563-6.25-8.844v17.688A9.344 9.344 0 0019.281 10z"
          fill="#ED4C5C"
        />
        <Path
          d="M6.781 18.844a9.374 9.374 0 003.125.531 9.374 9.374 0 003.125-.531V1.156A9.373 9.373 0 009.906.625a9.373 9.373 0 00-3.125.531v17.688z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_49_57635">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

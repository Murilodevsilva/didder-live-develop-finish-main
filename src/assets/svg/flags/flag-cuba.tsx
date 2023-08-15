import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

export const IconCuba = (props) => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_698_11163)">
        <Path
          d="M3.375 8.125h15.813a9.508 9.508 0 00-1.688-3.75H3.375v3.75zm0 3.75v3.75H17.5a9.508 9.508 0 001.688-3.75H3.374z"
          fill="#F9F9F9"
        />
        <Path
          d="M19.188 8.125H3.374v3.75h15.813A9.084 9.084 0 0019.375 10c0-.656-.063-1.281-.188-1.875M3.376 4.375H17.5a9.366 9.366 0 00-14.125-1v1zm0 11.25v1a9.366 9.366 0 0014.125-1H3.375z"
          fill="#428BC1"
        />
        <Path
          d="M3.375 3.375a9.353 9.353 0 000 13.25L10 10 3.375 3.375z"
          fill="#ED4C5C"
        />
        <Path
          d="M3.125 11.875L4.375 11l1.25.875-.469-1.438 1.25-.906H4.844l-.469-1.406-.469 1.406H2.344l1.25.906-.469 1.438z"
          fill="#F9F9F9"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_698_11163">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg'

export const Chat = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_273_5218)">
      <Path
        d="M1.5 10.5a9 9 0 0117.919-1.212 8.225 8.225 0 00-1.564-.266 7.503 7.503 0 10-13.806 5.306.75.75 0 01.076.59l-.763 2.67 2.487-.829a.75.75 0 01.639.078 7.451 7.451 0 002.535 1.018c.037.537.129 1.06.265 1.564a8.948 8.948 0 01-3.294-1.127l-3.507 1.17a.75.75 0 01-.958-.918l1.068-3.736A8.963 8.963 0 011.5 10.5zM24 17.25a6.75 6.75 0 11-13.5 0 6.75 6.75 0 0113.5 0zm-6-3a.75.75 0 10-1.5 0v2.25h-2.25a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0V18h2.25a.75.75 0 000-1.5H18v-2.25z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_273_5218">
        <Path fill="#fff" d="M0 0H24V24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

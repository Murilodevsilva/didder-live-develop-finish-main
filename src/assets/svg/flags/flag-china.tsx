import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

export const IconChina = (props) => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_698_11172)">
        <Path
          d="M10 19.375a9.375 9.375 0 100-18.75 9.375 9.375 0 100 18.75z"
          fill="#ED4C5C"
        />
        <Path
          d="M6.875 8.875l2.5 1.75-.938-2.875 2.5-1.813H7.845l-.969-2.812-.938 2.813H2.813l2.5 1.812-.937 2.875 2.5-1.75zm4.156 2.156l-.719.156.688.282v.719l.469-.532.687.25-.406-.594.438-.562-.72.156-.437-.594v.72zm1.063-2.125l-.531.469.718-.063.313.688.125-.719.719-.062-.626-.375.157-.719-.531.469-.626-.375.282.687zm.187-2.437l.219.718.219-.687h.719l-.563-.438.219-.718-.594.437-.563-.468.22.718-.595.407.72.03zm-1.25-2.5v.719l.438-.594.719.156-.438-.563.406-.593-.687.281L11 2.812v.72l-.688.28.72.157z"
          fill="#FFE62E"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_698_11172">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

export const IconJamaica = (props) => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_49_57525)">
        <Path
          d="M16.594 3.344c-3.657-3.625-9.563-3.625-13.219 0L10 8.438l6.594-5.094zM3.406 16.656c3.656 3.625 9.563 3.625 13.219 0L10 11.563l-6.594 5.093z"
          fill="#699635"
        />
        <Path
          d="M18.125 14.688a9.407 9.407 0 000-9.344L12.062 10l6.063 4.688zM1.875 5.312a9.465 9.465 0 000 9.375L7.969 10 1.875 5.312z"
          fill="#3E4347"
        />
        <Path
          d="M16.594 3.344L10 8.438 3.406 3.343c-.594.594-1.125 1.25-1.531 1.969L7.938 10l-6.063 4.688a8.545 8.545 0 001.531 1.968L10 11.563l6.594 5.093a10.403 10.403 0 001.531-1.968L12.062 10l6.063-4.688c-.406-.718-.938-1.375-1.531-1.968z"
          fill="#FFE62E"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_49_57525">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

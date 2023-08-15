import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

export const IconBarbados = (props) => {
  return (
    <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_49_57587)">
      <Path
        d="M.625 10a9.357 9.357 0 005 8.281V1.72a9.357 9.357 0 00-5 8.281zm18.75 0a9.357 9.357 0 00-5-8.281v16.593c2.969-1.593 5-4.718 5-8.312z"
        fill="#2A5F9E"
      />
      <Path
        d="M10 .625a9.356 9.356 0 00-4.375 1.094v16.593A9.356 9.356 0 0010 19.407a9.356 9.356 0 004.375-1.093V1.718A9.356 9.356 0 0010 .625z"
        fill="#FFCE31"
      />
      <Path
        d="M13.688 6.313l-.344-.344c-.063.062-1.438 1.625-1.594 4.718h-1.313V7.281H9.5v3.407H8.187c-.124-3.094-1.53-4.657-1.593-4.72l-.657.657s1.344 1.563 1.344 4.531v.5h2.25v3.375h.938v-3.375h2.25v-.5c0-3 1.312-4.531 1.344-4.531l-.376-.313z"
        fill="#3E4347"
      />
      <Path
        d="M10 4.969l-1 3h2l-1-3zm-3.375 1l2.031 2h-1.25l-.781-2zm6.75 0l-2.031 2h1.25l.781-2z"
        fill="#3E4347"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_49_57587">
        <Path fill="#fff" d="M0 0H20V20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
  )
}

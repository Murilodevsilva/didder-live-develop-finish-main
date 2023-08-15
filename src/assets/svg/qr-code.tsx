import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

export const QrCode = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_698_15100)" fill="#757575">
      <Path d="M0 .625A.625.625 0 01.625 0h3.75a.625.625 0 010 1.25H1.25v3.125a.625.625 0 01-1.25 0V.625zm15 0A.625.625 0 0115.625 0h3.75A.625.625 0 0120 .625v3.75a.625.625 0 11-1.25 0V1.25h-3.125A.625.625 0 0115 .625zM.625 15a.625.625 0 01.625.625v3.125h3.125a.625.625 0 110 1.25H.625A.625.625 0 010 19.375v-3.75A.625.625 0 01.625 15zm18.75 0a.624.624 0 01.625.625v3.75a.624.624 0 01-.625.625h-3.75a.624.624 0 110-1.25h3.125v-3.125a.624.624 0 01.625-.625zM5 5h1.25v1.25H5V5z" />
      <Path d="M8.75 2.5H2.5v6.25h6.25V2.5zm-5 1.25H7.5V7.5H3.75V3.75zm2.5 10H5V15h1.25v-1.25z" />
      <Path d="M8.75 11.25H2.5v6.25h6.25v-6.25zm-5 1.25H7.5v3.75H3.75V12.5zm10-7.5H15v1.25h-1.25V5z" />
      <Path d="M11.25 2.5h6.25v6.25h-6.25V2.5zm1.25 1.25V7.5h3.75V3.75H12.5zM10 10v2.5h1.25v1.25H10V15h2.5v-2.5h1.25V15H15v-1.25h2.5V12.5h-3.75V10H10zm2.5 2.5h-1.25v-1.25h1.25v1.25zm5 2.5h-1.25v1.25h-2.5v1.25h3.75V15zm-5 2.5v-1.25H10v1.25h2.5z" />
      <Path d="M15 11.25h2.5V10H15v1.25z" />
    </G>
    <Defs>
      <ClipPath id="clip0_698_15100">
        <Path fill="#fff" d="M0 0H20V20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

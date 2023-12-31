import * as React from 'react'
import Svg, { Path, G, Defs, LinearGradient, Stop } from 'react-native-svg'

export const EditPencil = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_b_1114_12585)">
      <Path
        d="M16.053 4.575l.09.053c.779.449 1.427.823 1.902 1.19.502.387.9.831 1.067 1.453.166.623.044 1.206-.197 1.792-.167.407-.413.864-.709 1.385l-.635-.378-.009-.004-6.925-3.999-.647-.381c.3-.512.57-.948.836-1.293.387-.501.831-.9 1.454-1.066.622-.167 1.205-.044 1.791.196.555.229 1.204.603 1.982 1.052zM9.238 6.984L5.76 13.008c-.298.515-.533.922-.62 1.385-.088.463-.016.927.074 1.515l.024.16c.166 1.09.303 1.99.51 2.672.216.714.548 1.331 1.201 1.708.653.378 1.354.357 2.08.187.694-.162 1.542-.493 2.57-.895l.15-.059c.554-.216.992-.386 1.35-.693.357-.308.591-.715.889-1.23l3.47-6.01-.65-.386-6.93-4-.64-.378z"
        fill="#91A1E5"
      />
      <Path
        d="M9.057 6.297l.435.256.638.376 6.928 4 .006.003h0l.649.386.424.252-.247.428-3.47 6.01-.022.039c-.279.484-.551.957-.974 1.32l-.326-.38.326.38c-.422.363-.931.561-1.451.764l-.043.016s0 0 0 0l-.149.059h0l-.033.012c-1.001.392-1.876.733-2.605.904l-.114-.487.114.487c-.782.182-1.632.228-2.444-.24-.811-.47-1.197-1.229-1.43-1.997-.217-.716-.358-1.645-.52-2.708l-.005-.034h0l-.025-.159s0 0 0 0l-.007-.045c-.084-.552-.167-1.091-.064-1.639.103-.548.377-1.02.657-1.503l.022-.04 3.73-6.46zm0 0l-.252.437-3.478 6.023 3.73-6.46zm8.894 4.58l.438.261.252-.443c.296-.522.556-1.003.737-1.442.261-.637.423-1.34.217-2.111-.207-.77-.698-1.299-1.244-1.72-.502-.387-1.175-.775-1.931-1.212l-.027-.016h0l-.09-.051h0l-.026-.016c-.757-.437-1.43-.825-2.016-1.066-.637-.262-1.34-.424-2.11-.217-.771.206-1.3.698-1.72 1.244-.288.372-.572.832-.873 1.344l-.252.43.43.254.647.382h0l.004.002 6.923 3.997.003.002.002.001.003.002.633.376z"
        stroke="url(#paint0_linear_1114_12585)"
        strokeLinecap="round"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_1114_12585"
        x1={5.09999}
        y1={3.25}
        x2={22.2026}
        y2={17.0034}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
)

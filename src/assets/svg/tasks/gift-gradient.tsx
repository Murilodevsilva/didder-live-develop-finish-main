import * as React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop, G } from 'react-native-svg'

export const GiftGradient = (props) => (
  <Svg
    {...props}
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M9.022.54 7.537 2.108c-.223.235-.46.546-.537.846-.077-.3-.204-.61-.428-.846L5.087.54a1.687 1.687 0 0 0-2.474 0c-.617.65-.652 1.69-.157 2.412H7 1.75C.784 2.953 0 3.779 0 4.798c0 .503.19.96.5 1.292h13c.31-.333.5-.789.5-1.292 0-1.019-.784-1.845-1.75-1.845h-.753.181c.496-.722.436-1.762-.18-2.412a1.687 1.687 0 0 0-2.476 0Z"
      fill="url(#a)"
    />
    <Path
      d="m.687 7.26-.002-.089h5.79V14H5.95c-1.63 0-2.446 0-3.09-.294-.857-.393-1.538-1.146-1.894-2.093C.7 10.903.7 10 .7 8.2c0-.395-.007-.691-.013-.94Z"
      fill="url(#b)"
    />
    <Path
      d="M11.14 13.706C10.495 14 9.68 14 8.05 14h-.525V7.171h5.771c.004.266.004.585.004 1.029 0 1.801 0 2.702-.266 3.413-.356.947-1.037 1.7-1.895 2.093Z"
      fill="url(#c)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={0}
        y1={10.534}
        x2={17.228}
        y2={10.126}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={0}
        y1={10.534}
        x2={17.228}
        y2={10.126}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={0}
        y1={10.534}
        x2={17.228}
        y2={10.126}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
    </Defs>
  </Svg>
)

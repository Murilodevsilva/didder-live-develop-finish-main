import * as React from 'react'
import Svg, {
  Path,
  G,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg'

export const PhoneGradient = (props) => (
  <Svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_402_7411)">
      <Path
        d="M7.916 4.68L5.378 1.751c-.292-.337-.828-.336-1.168.005l-2.087 2.09c-.62.622-.798 1.545-.44 2.285a21.906 21.906 0 0010.172 10.185c.74.36 1.662.182 2.283-.44l2.106-2.11c.34-.341.342-.88.001-1.173l-2.94-2.524c-.307-.263-.785-.229-1.093.08l-1.023 1.025a.347.347 0 01-.415.066 10.918 10.918 0 01-4.02-4.026.347.347 0 01.066-.415l1.02-1.021c.309-.31.343-.79.076-1.099v.001z"
        stroke="url(#paint0_linear_402_7411)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_402_7411"
        x1={-29.1483}
        y1={11.2331}
        x2={30.1047}
        y2={11.2331}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
      <ClipPath id="clip0_402_7411">
        <Path fill="#fff" d="M0 0H18V18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

import * as React from 'react'
import Svg, { Defs, Path, LinearGradient, Stop, G } from 'react-native-svg'

export const ChatFooter = (props) => (
  <Svg
    width={23}
    height={22}
    viewBox="0 0 23 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_b_6_6886)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.955 4.13C21.5 5.2 21.5 6.6 21.5 9.4v1.185c0 1.689 0 2.533-.202 3.222a5 5 0 01-3.391 3.391c-.69.202-1.534.202-3.223.202H14.07a5 5 0 00-2.848.913l-.053.038-2.61 1.865c-.895.639-2.072-.284-1.663-1.305a1.101 1.101 0 00-1.023-1.51h-.601A3.772 3.772 0 011.5 13.628V9.4c0-2.8 0-4.2.545-5.27A5 5 0 014.23 1.945C5.3 1.4 6.7 1.4 9.5 1.4h4c2.8 0 4.2 0 5.27.545a5 5 0 012.185 2.185z"
        fill="#566FD7"
      />
      <Path
        d="M22 9.4v-.023c0-1.38 0-2.447-.07-3.301-.07-.865-.215-1.556-.53-2.173A5.5 5.5 0 0018.998 1.5c-.617-.315-1.308-.46-2.172-.53C15.97.9 14.904.9 13.523.9H9.477C8.097.9 7.03.9 6.175.97c-.864.07-1.555.215-2.172.53a5.5 5.5 0 00-2.404 2.403c-.314.617-.459 1.308-.53 2.173C1 6.93 1 7.996 1 9.377v4.252A4.272 4.272 0 005.272 17.9h.601c.426 0 .717.43.559.825-.594 1.485 1.116 2.827 2.417 1.898l2.61-1.865h0l.051-.036h.001a4.5 4.5 0 012.561-.822H14.791c1.587 0 2.498 0 3.256-.222a5.5 5.5 0 003.73-3.73C22 13.19 22 12.278 22 10.69V9.4z"
        stroke="url(#paint0_linear_6_6886)"
        strokeLinecap="round"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_6_6886"
        x1={1.5}
        y1={1.40039}
        x2={20.5132}
        y2={21.3664}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
)

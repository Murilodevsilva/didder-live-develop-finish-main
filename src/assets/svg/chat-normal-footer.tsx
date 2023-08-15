import * as React from 'react'
import Svg, { Path, G, Defs, LinearGradient, Stop } from 'react-native-svg'

export const ChatNormalFooter = (props) => (
  <Svg
    width={24}
    height={23}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_b_1163_5384)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.955 4.13C21.5 5.2 21.5 6.6 21.5 9.4v1.184c0 1.69 0 2.534-.202 3.223a5 5 0 01-3.391 3.39c-.69.203-1.534.203-3.223.203H14.07a5 5 0 00-2.848.913l-.053.038-2.61 1.864c-.895.64-2.072-.284-1.663-1.305a1.101 1.101 0 00-1.023-1.51h-.601A3.772 3.772 0 011.5 13.628V9.4c0-2.8 0-4.2.545-5.27A5 5 0 014.23 1.945C5.3 1.4 6.7 1.4 9.5 1.4h4c2.8 0 4.2 0 5.27.545a5 5 0 012.185 2.185z"
        fill="#CC9ECE"
      />
      <Path
        d="M22 9.4v-.023c0-1.38 0-2.448-.07-3.302-.07-.864-.215-1.555-.53-2.172a5.5 5.5 0 00-2.403-2.404c-.617-.314-1.308-.459-2.172-.53C15.97.9 14.904.9 13.523.9H9.477C8.097.9 7.03.9 6.175.97c-.864.071-1.555.216-2.172.53a5.5 5.5 0 00-2.404 2.404c-.314.617-.459 1.308-.53 2.172C1 6.93 1 7.996 1 9.377V13.628A4.272 4.272 0 005.272 17.9h.601c.426 0 .717.43.559.825-.594 1.484 1.116 2.827 2.417 1.897l2.61-1.864h0l.051-.037h.001a4.5 4.5 0 012.561-.821H14.791c1.587 0 2.498 0 3.256-.222a5.5 5.5 0 003.73-3.73c.223-.759.223-1.67.223-3.258V9.4z"
        stroke="url(#paint0_linear_1163_5384)"
        strokeLinecap="round"
      />
    </G>
    <G filter="url(#filter1_d_1163_5384)">
      <Path
        d="M8.5 9.4a1 1 0 11-2 0 1 1 0 012 0z"
        fill="url(#paint1_linear_1163_5384)"
      />
      <Path
        d="M12.5 9.4a1 1 0 11-2 0 1 1 0 012 0z"
        fill="url(#paint2_linear_1163_5384)"
      />
      <Path
        d="M15.5 10.4a1 1 0 100-2 1 1 0 000 2z"
        fill="url(#paint3_linear_1163_5384)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_1163_5384"
        x1={1.5}
        y1={1.3999}
        x2={20.5132}
        y2={21.3659}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1163_5384"
        x1={11.5842}
        y1={10.826}
        x2={12.6657}
        y2={5.52493}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_1163_5384"
        x1={11.5842}
        y1={10.826}
        x2={12.6657}
        y2={5.52493}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_1163_5384"
        x1={11.5842}
        y1={10.826}
        x2={12.6657}
        y2={5.52493}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
    </Defs>
  </Svg>
)

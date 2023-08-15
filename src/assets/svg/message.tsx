import * as React from 'react'
import Svg, {
  Path,
  G,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg'

export const Message = (props) => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_15_6636)">
      <G filter="url(#filter0_b_15_6636)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.955 5.13c.545 1.07.545 2.47.545 5.27v1.185c0 1.689 0 2.533-.202 3.222a5 5 0 01-3.391 3.391c-.69.202-1.534.202-3.223.202H15.07a5 5 0 00-2.848.913l-.053.038-2.61 1.865c-.895.639-2.072-.284-1.663-1.305a1.101 1.101 0 00-1.023-1.51h-.601A3.772 3.772 0 012.5 14.628V10.4c0-2.8 0-4.2.545-5.27A5 5 0 015.23 2.945C6.3 2.4 7.7 2.4 10.5 2.4h4c2.8 0 4.2 0 5.27.545a5 5 0 012.185 2.185z"
          fill="#566FD7"
        />
        <Path
          d="M23 10.4v-.023c0-1.38 0-2.447-.07-3.301-.07-.865-.215-1.556-.53-2.173A5.5 5.5 0 0019.998 2.5c-.617-.315-1.308-.46-2.172-.53-.854-.07-1.921-.07-3.302-.07H10.477c-1.38 0-2.448 0-3.302.07-.864.07-1.555.215-2.172.53a5.5 5.5 0 00-2.404 2.403c-.314.617-.459 1.308-.53 2.173C2 7.93 2 8.996 2 10.377v4.252A4.272 4.272 0 006.272 18.9h.601c.426 0 .717.43.559.825-.594 1.485 1.116 2.827 2.417 1.898l2.61-1.865h0l.051-.036h.001a4.5 4.5 0 012.561-.822H15.791c1.587 0 2.498 0 3.256-.222a5.5 5.5 0 003.73-3.73C23 14.19 23 13.278 23 11.69V10.4z"
          stroke="url(#paint0_linear_15_6636)"
          strokeLinecap="round"
        />
      </G>
      <G filter="url(#filter1_d_15_6636)">
        <Path
          d="M9.5 10.4a1 1 0 11-2 0 1 1 0 012 0z"
          fill="url(#paint1_linear_15_6636)"
        />
        <Path
          d="M13.5 10.4a1 1 0 11-2 0 1 1 0 012 0z"
          fill="url(#paint2_linear_15_6636)"
        />
        <Path
          d="M16.5 11.4a1 1 0 100-2 1 1 0 000 2z"
          fill="url(#paint3_linear_15_6636)"
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_15_6636"
        x1={2.5}
        y1={2.40039}
        x2={21.5132}
        y2={22.3664}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_15_6636"
        x1={12.5842}
        y1={11.8265}
        x2={13.6658}
        y2={6.52541}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_15_6636"
        x1={12.5842}
        y1={11.8265}
        x2={13.6658}
        y2={6.52541}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_15_6636"
        x1={12.5842}
        y1={11.8265}
        x2={13.6658}
        y2={6.52541}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <ClipPath id="clip0_15_6636">
        <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

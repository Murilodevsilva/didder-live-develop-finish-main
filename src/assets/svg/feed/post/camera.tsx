import * as React from 'react'
import Svg, { Defs, G, LinearGradient, Path, Stop } from 'react-native-svg'

export const Camera = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_b_807_1740)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.335 1.2A3.333 3.333 0 009 4.533v.238c0 .605-.49 1.096-1.095 1.096a6.238 6.238 0 00-6.238 6.238v6.148c0 2.137 0 3.813.127 5.152.13 1.365.4 2.482 1.003 3.467a7.667 7.667 0 002.53 2.532c.986.603 2.103.872 3.468 1.002 1.339.127 3.015.127 5.153.127h4.105c2.138 0 3.814 0 5.152-.127 1.365-.13 2.483-.399 3.468-1.002a7.667 7.667 0 002.53-2.532c.604-.985.874-2.102 1.003-3.467.128-1.339.128-3.015.128-5.152v-6.148a6.238 6.238 0 00-6.239-6.238c-.604 0-1.095-.49-1.095-1.096v-.238A3.333 3.333 0 0019.668 1.2h-7.333z"
        fill="#566FD7"
      />
      <Path
        d="M12.335.7A3.833 3.833 0 008.5 4.533v.238a.595.595 0 01-.595.596 6.738 6.738 0 00-6.738 6.738v6.173c0 2.117 0 3.812.13 5.175.133 1.4.414 2.604 1.073 3.68a8.167 8.167 0 002.697 2.697l.26-.426-.26.426c1.076.66 2.28.94 3.68 1.074 1.363.13 3.059.13 5.176.13H18.079c2.117 0 3.812 0 5.175-.13 1.401-.133 2.604-.414 3.681-1.074a8.167 8.167 0 002.696-2.696c.66-1.077.94-2.28 1.074-3.681.13-1.363.13-3.058.13-5.175v-6.173a6.738 6.738 0 00-6.739-6.738.595.595 0 01-.595-.596v-.238A3.833 3.833 0 0019.668.7h-7.333z"
        stroke="url(#paint0_linear_807_1740)"
        strokeLinecap="round"
      />
    </G>
    <G filter="url(#filter1_d_807_1740)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.001 11.2a6.333 6.333 0 100 12.667 6.333 6.333 0 000-12.667zm0 2a4.333 4.333 0 100 8.667 4.333 4.333 0 000-8.667z"
        fill="url(#paint1_linear_807_1740)"
      />
      <Path
        d="M22.668 12.2a1.333 1.333 0 102.667 0 1.333 1.333 0 00-2.667 0z"
        fill="url(#paint2_linear_807_1740)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_807_1740"
        x1={1.66797}
        y1={1.20001}
        x2={31.0077}
        y2={29.8439}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_807_1740"
        x1={17.6332}
        y1={26.6363}
        x2={35.3326}
        y2={5.72762}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_807_1740"
        x1={17.6332}
        y1={26.6363}
        x2={35.3326}
        y2={5.72762}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
    </Defs>
  </Svg>
)

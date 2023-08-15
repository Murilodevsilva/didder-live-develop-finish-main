import * as React from 'react'
import Svg, { Defs, G, LinearGradient, Path, Stop } from 'react-native-svg'

export const Historic = (props) => (
  <Svg
    width={31}
    height={32}
    viewBox="0 0 31 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_b_5_5103)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.146 3.473C1 5.05 1 7.3 1 11.8v2.4c0 4.5 0 6.75 1.146 8.327a6 6 0 001.327 1.327C5.05 25 7.3 25 11.8 25s6.75 0 8.327-1.146a6 6 0 001.327-1.327C22.6 20.949 22.6 18.7 22.6 14.2v-2.4c0-4.5 0-6.75-1.146-8.327a6 6 0 00-1.327-1.327C18.549 1 16.3 1 11.8 1S5.05 1 3.473 2.146a6 6 0 00-1.327 1.327z"
        fill="#91A1E5"
      />
      <Path
        d="M20.42 1.741l-.293.405.294-.405c-.888-.645-1.943-.947-3.308-1.095C15.764.5 14.055.5 11.831.5h-.062C9.545.5 7.836.5 6.487.646c-1.365.148-2.42.45-3.308 1.095A6.5 6.5 0 001.741 3.18C1.096 4.067.794 5.122.646 6.487.5 7.836.5 9.545.5 11.769v2.462c0 2.224 0 3.933.146 5.282.148 1.365.45 2.42 1.095 3.308l.4-.291-.4.29A6.5 6.5 0 003.18 24.26c.888.645 1.943.947 3.308 1.095 1.349.146 3.058.146 5.282.146h.062c2.224 0 3.933 0 5.282-.146 1.365-.148 2.42-.45 3.308-1.095a6.5 6.5 0 001.438-1.438c.645-.888.947-1.943 1.095-3.308.146-1.349.146-3.058.146-5.282V11.77c0-2.224 0-3.933-.146-5.282-.148-1.365-.45-2.42-1.095-3.308a6.5 6.5 0 00-1.438-1.438z"
        stroke="url(#paint0_linear_5_5103)"
        strokeLinecap="round"
      />
    </G>
    <G filter="url(#filter1_d_5_5103)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 7.3a.9.9 0 100 1.8h9.6a.9.9 0 100-1.8H7zm2.4 4.8a.9.9 0 100 1.8h4.8a.9.9 0 000-1.8H9.4zM7 16.9a.9.9 0 100 1.8h9.6a.9.9 0 000-1.8H7z"
        fill="url(#paint1_linear_5_5103)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_5_5103"
        x1={1}
        y1={1}
        x2={24.877}
        y2={22.4675}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_5_5103"
        x1={11.8956}
        y1={21.1287}
        x2={27.6294}
        y2={5.70566}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
    </Defs>
  </Svg>
)

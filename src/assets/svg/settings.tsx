import * as React from 'react'
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg'

export const Settings = (props) => (
  <Svg
    width={35}
    height={35}
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_b_1114_12666)" clipRule="evenodd">
      <Path
        fillRule="evenodd"
        d="M8.585 3.232c.98-3.435 5.85-3.435 6.83 0a2.051 2.051 0 002.47 1.427c3.466-.869 5.9 3.348 3.415 5.914a2.051 2.051 0 000 2.854c2.485 2.566.051 6.783-3.414 5.914a2.051 2.051 0 00-2.471 1.427c-.98 3.435-5.85 3.435-6.83 0a2.051 2.051 0 00-2.47-1.427c-3.466.869-5.9-3.348-3.415-5.914.77-.796.77-2.058 0-2.854C.215 8.007 2.649 3.79 6.114 4.66a2.051 2.051 0 002.471-1.427z"
        fill="#91A1E5"
      />
      <Path
        d="M8.585 3.232c.98-3.435 5.85-3.435 6.83 0a2.051 2.051 0 002.47 1.427c3.466-.869 5.9 3.348 3.415 5.914a2.051 2.051 0 000 2.854c2.485 2.566.051 6.783-3.414 5.914a2.051 2.051 0 00-2.471 1.427c-.98 3.435-5.85 3.435-6.83 0a2.051 2.051 0 00-2.47-1.427c-3.466.869-5.9-3.348-3.415-5.914.77-.796.77-2.058 0-2.854C.215 8.007 2.649 3.79 6.114 4.66a2.051 2.051 0 002.471-1.427z"
        stroke="url(#paint0_linear_1114_12666)"
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
      fill="url(#paint1_linear_1114_12666)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1114_12666"
        x1={1.68359}
        y1={0.655762}
        x2={24.2794}
        y2={21.1834}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1114_12666"
        x1={12.0632}
        y1={17.3478}
        x2={22.4144}
        y2={7.2011}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
    </Defs>
  </Svg>
)

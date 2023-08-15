import * as React from "react"
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <G filter="url(#b)">
        <Path
          fill="url(#c)"
          fillRule="evenodd"
          d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
          clipRule="evenodd"
        />
        <Path
          stroke="url(#d)"
          strokeLinecap="round"
          d="M12 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5 1.5 6.201 1.5 12 6.201 22.5 12 22.5Z"
        />
      </G>
    </G>
    <Path
      fill="url(#e)"
      fillRule="evenodd"
      d="M6.655 13.334a.75.75 0 0 1 1.011.32c.27.52.829 1.18 1.606 1.708.77.524 1.709.888 2.728.888 1.02 0 1.958-.364 2.728-.888.777-.528 1.337-1.188 1.606-1.707a.75.75 0 1 1 1.332.69c-.398.767-1.138 1.607-2.094 2.257-.963.655-2.191 1.148-3.572 1.148-1.38 0-2.608-.493-3.572-1.148-.956-.65-1.696-1.49-2.094-2.257a.75.75 0 0 1 .32-1.01ZM9 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="c"
        x1={-38.864}
        x2={40.139}
        y1={14.978}
        y2={14.978}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={2}
        x2={22.01}
        y1={2}
        y2={21.99}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={12.097}
        x2={26.92}
        y1={20.04}
        y2={4.496}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default SvgComponent

import * as React from "react"
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <G filter="url(#b)">
        <Path
          stroke="url(#c)"
          d="M12.375 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
          clipRule="evenodd"
        />
      </G>
      <G filter="url(#d)">
        <Path
          fill="url(#e)"
          fillRule="evenodd"
          d="M15.027 10.651a.75.75 0 1 0-1.06-1.06l-1.592 1.59-1.59-1.59a.75.75 0 1 0-1.061 1.06l1.59 1.591-1.59 1.591a.75.75 0 0 0 1.06 1.061l1.591-1.59 1.591 1.59a.75.75 0 0 0 1.06-1.06l-1.59-1.592 1.59-1.59Z"
          clipRule="evenodd"
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="c"
        x1={2.375}
        x2={26.987}
        y1={17.049}
        y2={16.466}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={9.504}
        x2={16.571}
        y1={13.692}
        y2={13.525}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M.375 0h24v24h-24z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent

import * as React from "react"
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const PersonIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Circle
        cx={15.999}
        cy={15.999}
        r={14.8}
        fill="#3D3D3D"
        fillOpacity={0.23}
      />
    </G>
    <Path
      fill="url(#b)"
      d="M21.405 12.287C21.405 10.47 19.953 9 18.162 9s-3.243 1.472-3.243 3.287 1.452 3.286 3.243 3.286 3.243-1.471 3.243-3.286Z"
    />
    <Path
      fill="url(#c)"
      d="M15.265 9.335a4.178 4.178 0 0 0-1.21 2.952c0 1.153.462 2.198 1.21 2.952-.43.214-.915.334-1.427.334-1.791 0-3.243-1.471-3.243-3.286C10.595 10.47 12.047 9 13.838 9c.512 0 .997.12 1.427.335Z"
    />
    <Path
      fill="url(#d)"
      d="M24 20.175c0-1.815-1.452-3.287-3.243-3.287h-5.19c-1.79 0-3.243 1.472-3.243 3.287s1.452 3.287 3.244 3.287h5.189c1.791 0 3.243-1.472 3.243-3.287Z"
    />
    <Path
      fill="url(#e)"
      d="M11.46 20.175c0 .898.28 1.73.758 2.41h-.975C9.452 22.585 8 21.114 8 19.298c0-1.815 1.452-3.286 3.243-3.286h4.325c-2.27 0-4.108 1.864-4.108 4.163Z"
    />
    <Defs>
      <LinearGradient
        id="b"
        x1={15.865}
        x2={-4.032}
        y1={26.543}
        y2={4.963}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={15.865}
        x2={-4.032}
        y1={26.543}
        y2={4.963}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={15.865}
        x2={-4.032}
        y1={26.543}
        y2={4.963}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={15.865}
        x2={-4.032}
        y1={26.543}
        y2={4.963}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default PersonIcon;

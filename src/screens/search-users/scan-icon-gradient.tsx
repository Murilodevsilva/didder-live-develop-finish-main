import * as React from "react"
import Svg, {
  G,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={81}
    height={80}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Rect width={64} height={64} x={8.5} y={7} fill="url(#b)" rx={20} />
      <Rect
        width={65}
        height={65}
        x={8}
        y={6.5}
        stroke="url(#c)"
        strokeLinecap="round"
        rx={20.5}
      />
    </G>
    <G filter="url(#d)">
      <Path
        fill="url(#e)"
        d="M30.244 14C22.1 14 15.5 20.6 15.5 28.744v2.564a1.923 1.923 0 1 0 3.846 0v-2.564c0-6.019 4.88-10.898 10.898-10.898h2.564a1.923 1.923 0 1 0 0-3.846h-2.564Z"
      />
      <Path
        fill="url(#f)"
        d="M48.192 14a1.923 1.923 0 1 0 0 3.846h2.564c6.019 0 10.898 4.88 10.898 10.898v2.564a1.923 1.923 0 1 0 3.846 0v-2.564C65.5 20.6 58.9 14 50.756 14h-2.564Z"
      />
      <Path
        fill="url(#g)"
        d="M25.115 37.077a1.923 1.923 0 1 0 0 3.846h30.77a1.923 1.923 0 1 0 0-3.846h-30.77Z"
      />
      <Path
        fill="url(#h)"
        d="M19.346 46.692a1.923 1.923 0 1 0-3.846 0v2.564C15.5 57.4 22.1 64 30.244 64h2.564a1.923 1.923 0 1 0 0-3.846h-2.564c-6.019 0-10.898-4.88-10.898-10.898v-2.564Z"
      />
      <Path
        fill="url(#i)"
        d="M65.5 46.692a1.923 1.923 0 1 0-3.846 0v2.564c0 6.019-4.88 10.898-10.898 10.898h-2.564a1.923 1.923 0 1 0 0 3.846h2.564C58.9 64 65.5 57.4 65.5 49.256v-2.564Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={8.5}
        x2={87.257}
        y1={55.156}
        y2={53.291}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={8.5}
        x2={72.532}
        y1={7}
        y2={70.968}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={40.921}
        x2={109.929}
        y1={74.652}
        y2={7.007}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={40.921}
        x2={109.929}
        y1={74.652}
        y2={7.007}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={40.921}
        x2={109.929}
        y1={74.652}
        y2={7.007}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={40.921}
        x2={109.929}
        y1={74.652}
        y2={7.007}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={40.921}
        x2={109.929}
        y1={74.652}
        y2={7.007}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default SvgComponent

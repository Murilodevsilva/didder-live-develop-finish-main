import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#a)"
      d="M4.969 5.785a.468.468 0 0 0-.468.468v.028c0 .258.21.468.468.468h3.564A.468.468 0 0 0 9 6.28v-.028a.468.468 0 0 0-.468-.468H4.969Zm0 2.571a.468.468 0 0 0-.468.468v.028c0 .259.21.468.468.468h6.778a.468.468 0 0 0 .468-.468v-.028a.468.468 0 0 0-.468-.468H4.97Zm-.468 3.04c0-.259.21-.469.468-.469h4.85c.258 0 .467.21.467.469v.028a.468.468 0 0 1-.468.468h-4.85a.468.468 0 0 1-.467-.468v-.028ZM3.7 2.57a2.41 2.41 0 0 0-2.41 2.411v8.036a2.41 2.41 0 0 0 2.41 2.41h10.604a2.41 2.41 0 0 0 2.411-2.41V4.98a2.41 2.41 0 0 0-2.41-2.41H3.7ZM2.253 4.981A1.446 1.446 0 0 1 3.7 3.535h10.604a1.446 1.446 0 0 1 1.447 1.446v8.036a1.446 1.446 0 0 1-1.447 1.446H3.7a1.446 1.446 0 0 1-1.446-1.446V4.98Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={1.289}
        x2={20.267}
        y1={12.245}
        y2={11.705}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default SvgComponent

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
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <G filter="url(#b)">
        <Path
          fill="url(#c)"
          fillRule="evenodd"
          d="M9.25.898a2.5 2.5 0 0 0-2.5 2.5v.179a.821.821 0 0 1-.821.821A4.679 4.679 0 0 0 1.25 9.077v4.61c0 1.604 0 2.861.095 3.865.098 1.024.3 1.862.752 2.6a5.75 5.75 0 0 0 1.899 1.9c.738.452 1.577.654 2.6.751 1.004.095 2.261.095 3.865.095h3.078c1.604 0 2.86 0 3.865-.095 1.023-.097 1.861-.3 2.6-.752a5.75 5.75 0 0 0 1.899-1.898c.452-.739.654-1.577.752-2.6.095-1.005.095-2.262.095-3.865V9.077a4.679 4.679 0 0 0-4.679-4.679.821.821 0 0 1-.821-.821v-.179a2.5 2.5 0 0 0-2.5-2.5h-5.5Z"
          clipRule="evenodd"
        />
        <Path
          stroke="url(#d)"
          strokeLinecap="round"
          d="M9.25.398a3 3 0 0 0-3 3v.179a.321.321 0 0 1-.321.321A5.179 5.179 0 0 0 .75 9.077v4.636c0 1.582 0 2.859.098 3.887.1 1.06.314 1.983.823 2.814a6.25 6.25 0 0 0 2.063 2.063l.262-.426-.262.426c.83.51 1.755.723 2.815.824 1.028.098 2.304.097 3.887.097H13.564c1.583 0 2.86 0 3.887-.097 1.06-.101 1.984-.315 2.815-.824a6.25 6.25 0 0 0 2.063-2.063c.509-.83.723-1.754.823-2.814.098-1.028.098-2.305.098-3.887V9.077a5.179 5.179 0 0 0-5.179-5.179.321.321 0 0 1-.321-.321v-.179a3 3 0 0 0-3-3h-5.5Z"
        />
      </G>
      <G filter="url(#e)">
        <Path
          fill="url(#f)"
          fillRule="evenodd"
          d="M12 8.398a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z"
          clipRule="evenodd"
        />
        <Path fill="url(#g)" d="M17 9.148a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z" />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="c"
        x1={-42.679}
        x2={42.25}
        y1={15.174}
        y2={15.174}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={1.25}
        x2={23.255}
        y1={0.898}
        y2={22.381}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={13.224}
        x2={26.498}
        y1={19.976}
        y2={4.294}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={13.224}
        x2={26.498}
        y1={19.976}
        y2={4.294}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent

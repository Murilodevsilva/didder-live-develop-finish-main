import * as React from "react"
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <G clipRule="evenodd" filter="url(#b)">
        <Path
          fill="url(#c)"
          fillRule="evenodd"
          d="M12.375 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
        />
        <Path
          stroke="url(#d)"
          strokeLinecap="round"
          d="M12.375 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
        />
      </G>
      <G filter="url(#e)">
        <Path
          fill="url(#f)"
          fillRule="evenodd"
          d="M17.934 9.5a.75.75 0 1 0-1.118-1l-3.369 3.763c-.683.762-1.142 1.273-1.535 1.604-.375.314-.595.383-.787.383-.192 0-.412-.069-.787-.383-.393-.33-.852-.842-1.535-1.604l-.87-.97a.75.75 0 0 0-1.117 1l.907 1.012c.635.71 1.166 1.303 1.65 1.71.513.43 1.066.735 1.752.735.686 0 1.239-.304 1.752-.735.484-.407 1.015-1 1.65-1.71L17.934 9.5Z"
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
        id="d"
        x1={2.375}
        x2={22.385}
        y1={2}
        y2={21.99}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={12.472}
        x2={22.021}
        y1={17.348}
        y2={2.995}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M.375 0h24v24h-24z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent

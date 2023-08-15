import * as React from "react"
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function MenuIconGradient(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1_26912)">
        <G filter="url(#filter0_b_1_26912)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.273 5.416C4 7.168 4 9.668 4 14.668v2.667c0 5 0 7.5 1.273 9.252a6.666 6.666 0 001.475 1.474C8.501 29.335 11 29.335 16 29.335c5 0 7.5 0 9.252-1.274a6.665 6.665 0 001.475-1.474C28 24.834 28 22.334 28 17.334v-2.667c0-5 0-7.5-1.273-9.252a6.666 6.666 0 00-1.475-1.475C23.5 2.668 21 2.668 16 2.668c-5 0-7.5 0-9.252 1.273a6.667 6.667 0 00-1.475 1.475z"
            fill="url(#paint0_linear_1_26912)"
          />
          <Path
            d="M4.869 5.122c-.71.976-1.043 2.137-1.207 3.648-.162 1.496-.162 3.393-.162 5.867V17.365c0 2.474 0 4.371.162 5.867.164 1.512.498 2.673 1.207 3.648a7.166 7.166 0 001.585 1.586c.976.709 2.137 1.043 3.648 1.207 1.496.162 3.393.162 5.867.162h.062c2.474 0 4.37 0 5.867-.162 1.511-.164 2.672-.498 3.648-1.207a7.166 7.166 0 001.585-1.586c.71-.975 1.043-2.136 1.207-3.648.162-1.496.162-3.393.162-5.866v-2.729c0-2.474 0-4.37-.162-5.867-.164-1.511-.498-2.672-1.207-3.648a7.166 7.166 0 00-1.585-1.585c-.976-.71-2.137-1.043-3.648-1.207-1.496-.162-3.393-.162-5.867-.162h-.062c-2.474 0-4.37 0-5.867.162-1.511.164-2.672.498-3.648 1.207A7.167 7.167 0 004.87 5.122z"
            stroke="url(#paint1_linear_1_26912)"
            strokeLinecap="round"
          />
        </G>
        <G filter="url(#filter1_d_1_26912)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.668 9.668a1 1 0 000 2h10.667a1 1 0 100-2H10.668zm0 5.333a1 1 0 100 2h10.667a1 1 0 100-2H10.668zm6.667 5.334a1 1 0 000 2h4a1 1 0 100-2h-4z"
            fill="url(#paint2_linear_1_26912)"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1_26912"
          x1={4}
          y1={22.7331}
          x2={33.5371}
          y2={22.1036}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#4568DC" />
          <Stop offset={1} stopColor="#B06AB3" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_1_26912"
          x1={4}
          y1={2.66797}
          x2={30.53}
          y2={26.5207}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" stopOpacity={0.25} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_1_26912"
          x1={16.108}
          y1={25.0332}
          x2={33.59}
          y2={7.89649}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
        </LinearGradient>
        <ClipPath id="clip0_1_26912">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default MenuIconGradient

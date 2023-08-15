import * as React from "react"
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function InfoIconGradient(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_b_1_26909)" clipPath="url(#clip0_1_26909)">
        <Circle
          cx={15.9992}
          cy={15.9992}
          r={14.8}
          fill="url(#paint0_linear_1_26909)"
        />
        <Circle
          cx={15.9992}
          cy={15.9992}
          r={15}
          stroke="url(#paint1_linear_1_26909)"
          strokeWidth={0.4}
          strokeLinecap="round"
        />
      </G>
      <G clipPath="url(#clip1_1_26909)">
        <G filter="url(#filter1_b_1_26909)" clipRule="evenodd">
          <Path
            fillRule="evenodd"
            d="M24.335 16.001a8.333 8.333 0 11-16.667 0 8.333 8.333 0 0116.667 0z"
            fill="#29ACD6"
            fillOpacity={0.35}
          />
          <Path
            fillRule="evenodd"
            d="M24.335 16.001a8.333 8.333 0 11-16.667 0 8.333 8.333 0 0116.667 0z"
            fill="url(#paint2_linear_1_26909)"
          />
          <Path
            d="M24.335 16.001a8.333 8.333 0 11-16.667 0 8.333 8.333 0 0116.667 0z"
            stroke="url(#paint3_linear_1_26909)"
            strokeLinecap="round"
          />
        </G>
        <G filter="url(#filter2_d_1_26909)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.001 14.544c.345 0 .625.28.625.625v5a.625.625 0 01-1.25 0v-5c0-.345.28-.625.625-.625zm0-1.041a.833.833 0 100-1.667.833.833 0 000 1.667z"
            fill="url(#paint4_linear_1_26909)"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1_26909"
          x1={1.19922}
          y1={23.4716}
          x2={37.6245}
          y2={22.6089}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#4568DC" />
          <Stop offset={1} stopColor="#B06AB3" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_1_26909"
          x1={1.19922}
          y1={1.19922}
          x2={30.8142}
          y2={30.7842}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" stopOpacity={0.25} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_1_26909"
          x1={16.1416}
          y1={27.8854}
          x2={39.1443}
          y2={5.33707}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_1_26909"
          x1={7.66797}
          y1={7.66797}
          x2={24.3431}
          y2={24.3262}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" stopOpacity={0.25} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear_1_26909"
          x1={15.168}
          y1={18.5766}
          x2={17.22}
          y2={18.5675}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#4568DC" />
          <Stop offset={1} stopColor="#B06AB3" />
        </LinearGradient>
        <ClipPath id="clip0_1_26909">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
        <ClipPath id="clip1_1_26909">
          <Path fill="#fff" transform="translate(6 6)" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default InfoIconGradient

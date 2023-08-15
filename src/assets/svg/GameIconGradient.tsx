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

function GameIconGradient(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_b_1_26903)" clipPath="url(#clip0_1_26903)">
        <Circle
          cx={15.9992}
          cy={15.9992}
          r={14.8}
          fill="url(#paint0_linear_1_26903)"
        />
        <Circle
          cx={15.9992}
          cy={15.9992}
          r={15}
          stroke="url(#paint1_linear_1_26903)"
          strokeWidth={0.4}
          strokeLinecap="round"
        />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.406 9.543a4.593 4.593 0 00-4.546 5.242l.192 1.347 1.213 4.247a2.868 2.868 0 005.17.763l.313-.485c1.053-1.638 3.447-1.638 4.5 0l.19.297a3.279 3.279 0 006.004-1.31l.694-4.859a4.593 4.593 0 00-6.411-4.846l-.443.197c-.854.38-1.2.53-1.549.603a3.54 3.54 0 01-1.47 0c-.349-.074-.695-.224-1.55-.604l-.442-.196a4.592 4.592 0 00-1.865-.396z"
        fill="url(#paint2_linear_1_26903)"
        stroke="url(#paint3_linear_1_26903)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.83 12.876c.346 0 .626.28.626.625v1.042h1.041a.625.625 0 110 1.25h-1.041v1.042a.625.625 0 11-1.25 0v-1.042h-1.042a.625.625 0 010-1.25h1.042v-1.042c0-.345.28-.625.625-.625zm8.334 1.459a.833.833 0 100-1.667.833.833 0 000 1.667zM18.497 16a.833.833 0 100-1.666.833.833 0 000 1.666zm4.167-.833a.833.833 0 11-1.667 0 .833.833 0 011.667 0zm-2.5 2.5a.833.833 0 100-1.667.833.833 0 000 1.667z"
        fill="url(#paint4_linear_1_26903)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1_26903"
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
          id="paint1_linear_1_26903"
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
          id="paint2_linear_1_26903"
          x1={16.1526}
          y1={25.2114}
          x2={33.0422}
          y2={1.66462}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_1_26903"
          x1={6.8125}
          y1={9.54297}
          x2={18.9776}
          y2={26.8274}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" stopOpacity={0.25} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear_1_26903"
          x1={9.53906}
          y1={16.4302}
          x2={25.6374}
          y2={15.4294}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#4568DC" />
          <Stop offset={1} stopColor="#B06AB3" />
        </LinearGradient>
        <ClipPath id="clip0_1_26903">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default GameIconGradient

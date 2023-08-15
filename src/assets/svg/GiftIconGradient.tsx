import * as React from "react"
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  Pattern,
  Use,
  LinearGradient,
  Stop,
  ClipPath,
  Image
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import GiftImage from '../images/base64/gift';

function GiftIconGradient
(
  props
) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <G filter="url(#filter0_b_1_26900)" clipPath="url(#clip0_1_26900)">
        <Circle
          cx={15.9992}
          cy={15.9992}
          r={14.8}
          fill="url(#paint0_linear_1_26900)"
        />
        <Circle
          cx={15.9992}
          cy={15.9992}
          r={15}
          stroke="url(#paint1_linear_1_26900)"
          strokeWidth={0.4}
          strokeLinecap="round"
        />
      </G>
      <Path fill="url(#pattern0)" d="M6 6H26V26H6z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_1_26900"
            transform="matrix(.00065 0 0 .00063 -.33 -.086)"
          />
        </Pattern>
        <LinearGradient
          id="paint0_linear_1_26900"
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
          id="paint1_linear_1_26900"
          x1={1.19922}
          y1={1.19922}
          x2={30.8142}
          y2={30.7842}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" stopOpacity={0.25} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <ClipPath id="clip0_1_26900">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
        <Image
          id="image0_1_26900"
          width={2542}
          height={2000}
          xlinkHref={{ uri: GiftImage.file}}
        />
      </Defs>
    </Svg>
  )
}

export default GiftIconGradient

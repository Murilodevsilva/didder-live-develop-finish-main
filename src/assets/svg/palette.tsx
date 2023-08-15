import * as React from 'react'
import Svg, { G, Path, Defs, LinearGradient, Stop } from 'react-native-svg'

export const Palette = (props) => {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_b_250_1173)">
        <Path
          d="M10.595.25h-.385C4.708.25.248 4.71.248 10.212v.385a9.5 9.5 0 007.801 9.347 2.488 2.488 0 002.893-2.893l-.396-2.177c-.465-2.557 1.769-4.79 4.326-4.326l2.177.396a2.488 2.488 0 002.893-2.893 9.5 9.5 0 00-9.347-7.8z"
          fill="url(#paint0_linear_250_1173)"
          stroke="url(#paint1_linear_250_1173)"
          strokeWidth={0.3}
          strokeLinecap="round"
        />
        <G filter="url(#filter1_d_250_1173)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.398 6.4a1 1 0 100-2 1 1 0 000 2zm4 1a1 1 0 100-2 1 1 0 000 2zm-5 1a1 1 0 11-2 0 1 1 0 012 0zm0 5a1 1 0 100-2 1 1 0 000 2z"
            fill="url(#paint2_linear_250_1173)"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_250_1173"
          x1={0.398437}
          y1={15.0239}
          x2={24.3145}
          y2={14.4576}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#4568DC" />
          <Stop offset={1} stopColor="#B06AB3" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_250_1173"
          x1={0.398437}
          y1={0.400391}
          x2={19.843}
          y2={19.8253}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" stopOpacity={0.25} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_250_1173"
          x1={8.4658}
          y1={15.3178}
          x2={20.7728}
          y2={4.59432}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

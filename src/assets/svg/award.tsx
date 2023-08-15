import * as React from 'react'
import Svg, { Path, G, Defs, LinearGradient, Stop } from 'react-native-svg'

export const Award = (props) => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_b_1114_12600)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 16.2a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
        fill="#91A1E5"
      />
      <Path
        d="M12.5 17.7a8.967 8.967 0 006-2.291v4.67c0 1.564 0 2.346-.499 2.57-.499.223-1.11-.287-2.33-1.304l-.94-.783c-1.065-.887-1.597-1.331-2.231-1.331-.634 0-1.166.444-2.231 1.331l-.94.783C8.11 22.363 7.499 22.872 7 22.648c-.499-.223-.499-1.005-.499-2.57v-4.67a8.967 8.967 0 006 2.292z"
        fill="#91A1E5"
      />
      <Path
        clipRule="evenodd"
        d="M12.5 16.2a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
        stroke="url(#paint0_linear_1114_12600)"
      />
      <Path
        d="M12.5 17.7a8.967 8.967 0 006-2.291v4.67c0 1.564 0 2.346-.499 2.57-.499.223-1.11-.287-2.33-1.304l-.94-.783c-1.065-.887-1.597-1.331-2.231-1.331-.634 0-1.166.444-2.231 1.331l-.94.783C8.11 22.363 7.499 22.872 7 22.648c-.499-.223-.499-1.005-.499-2.57v-4.67a8.967 8.967 0 006 2.292z"
        stroke="url(#paint1_linear_1114_12600)"
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.525 4.958c-.632-2.01-3.418-2.01-4.05 0a.633.633 0 01-.595.459c-2.109 0-2.872 2.713-1.26 3.923a.7.7 0 01.235.766c-.31.985.088 1.907.766 2.416.681.511 1.683.628 2.52 0a.592.592 0 01.718 0c.837.628 1.838.511 2.52 0a2.172 2.172 0 00.766-2.416.7.7 0 01.235-.766c1.612-1.21.849-3.923-1.26-3.923a.633.633 0 01-.595-.459z"
      fill="url(#paint2_linear_1114_12600)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1114_12600"
        x1={5}
        y1={1.2002}
        x2={25.1814}
        y2={15.266}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1114_12600"
        x1={5}
        y1={1.2002}
        x2={25.1814}
        y2={15.266}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_1114_12600"
        x1={12.5799}
        y1={14.9743}
        x2={25.6914}
        y2={2.13272}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
    </Defs>
  </Svg>
)

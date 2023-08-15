import * as React from 'react'
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg'

export const LevelStar = (props) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_b_6_317)" clipPath="url(#clip0_6_317)">
      <G filter="url(#filter1_b_6_317)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.447 5.234c1.748-5.379 9.357-5.379 11.105 0a3.838 3.838 0 003.65 2.652c5.656 0 8.008 7.237 3.432 10.562a3.838 3.838 0 00-1.394 4.291c1.747 5.379-4.409 9.852-8.984 6.527a3.838 3.838 0 00-4.513 0C9.168 32.591 3.012 28.118 4.76 22.74a3.838 3.838 0 00-1.394-4.291C-1.21 15.123 1.141 7.886 6.797 7.886a3.838 3.838 0 003.65-2.652z"
          fill="url(#paint0_linear_6_317)"
        />
        <Path
          d="M22.028 5.08c-1.898-5.84-10.16-5.84-12.056 0a3.338 3.338 0 01-3.175 2.306c-6.14 0-8.693 7.857-3.726 11.466a3.338 3.338 0 011.213 3.732c-1.898 5.84 4.786 10.696 9.753 7.087a3.338 3.338 0 013.925 0c4.967 3.609 11.65-1.247 9.753-7.087a3.338 3.338 0 011.213-3.732c4.967-3.609 2.414-11.466-3.726-11.466a3.338 3.338 0 01-3.174-2.306z"
          stroke="url(#paint1_linear_6_317)"
          strokeLinecap="round"
        />
      </G>
      <G filter="url(#filter2_d_6_317)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.613 9.727a1 1 0 10-1.894.642c.575 1.697 2.205 2.81 4.004 2.81a1 1 0 100-2c-.986 0-1.824-.608-2.11-1.452z"
          fill="url(#paint2_linear_6_317)"
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_6_317"
        x1={0.947266}
        y1={23.1772}
        x2={37.9922}
        y2={22.273}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_6_317"
        x1={0.947266}
        y1={1.19995}
        x2={30.1575}
        y2={31.2765}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_6_317"
        x1={20.237}
        y1={14.0581}
        x2={25.8453}
        y2={7.32761}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <ClipPath id="clip0_6_317">
        <Path fill="#fff" d="M0 0H32V32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

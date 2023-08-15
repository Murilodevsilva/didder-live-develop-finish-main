import * as React from 'react'
import Svg, { Defs, G, LinearGradient, Path, Stop } from 'react-native-svg'

export const Smile = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_b_5_12834)">
      <G filter="url(#filter1_b_5_12834)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
          fill="url(#paint0_linear_5_12834)"
        />
        <Path
          d="M12 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5 1.5 6.201 1.5 12 6.201 22.5 12 22.5z"
          stroke="url(#paint1_linear_5_12834)"
          strokeLinecap="round"
        />
      </G>
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.655 13.334a.75.75 0 011.011.32c.27.52.829 1.18 1.606 1.708.77.524 1.709.888 2.728.888 1.02 0 1.958-.364 2.728-.888.777-.528 1.337-1.188 1.606-1.707a.75.75 0 111.332.69c-.398.767-1.138 1.607-2.094 2.257-.963.655-2.191 1.148-3.572 1.148-1.38 0-2.608-.493-3.572-1.148-.956-.65-1.696-1.49-2.094-2.257a.75.75 0 01.32-1.01zM9 9a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"
      fill="url(#paint2_linear_5_12834)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_5_12834"
        x1={-38.864}
        y1={14.9777}
        x2={40.1395}
        y2={14.9777}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_5_12834"
        x1={2}
        y1={2}
        x2={22.0101}
        y2={21.9899}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_5_12834"
        x1={12.097}
        y1={20.0402}
        x2={26.9199}
        y2={4.49594}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
    </Defs>
  </Svg>
)

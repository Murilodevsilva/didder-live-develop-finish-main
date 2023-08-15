import * as React from 'react'
import Svg, {
  Path,
  Mask,
  G,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg'

export const MessageGradient = (props) => (
  <Svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.833 10.099a2.281 2.281 0 01-1.42-.498L4.047 6.89a.563.563 0 01.706-.876l3.36 2.71a1.158 1.158 0 001.443-.004l3.327-2.704a.562.562 0 11.71.873l-3.333 2.709a2.294 2.294 0 01-1.428.502z"
      fill="url(#paint0_linear_402_7398)"
    />
    <Mask
      id="a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={1}
      width={17}
      height={16}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.75 1.5h16.125v14.625H.75V1.5z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.13 15h7.364c.002-.002.008 0 .012 0 .856 0 1.615-.306 2.197-.887.676-.673 1.047-1.64 1.047-2.722V6.24c0-2.095-1.37-3.615-3.256-3.615H5.131c-1.887 0-3.256 1.52-3.256 3.615v5.151c0 1.082.372 2.049 1.047 2.722.582.581 1.342.887 2.197.887h.01zm-.014 1.125c-1.157 0-2.19-.42-2.988-1.215-.89-.886-1.378-2.136-1.378-3.519V6.24c0-2.702 1.883-4.74 4.38-4.74h7.364c2.498 0 4.38 2.038 4.38 4.74v5.151c0 1.383-.488 2.633-1.377 3.519-.797.794-1.831 1.215-2.99 1.215H5.115z"
        fill="url(#paint1_linear_402_7398)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_402_7398"
        x1={-16.5181}
        y1={8.62021}
        x2={22.8384}
        y2={8.62021}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_402_7398"
        x1={-32.1967}
        y1={10.9899}
        x2={31.4998}
        y2={10.9899}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
    </Defs>
  </Svg>
)

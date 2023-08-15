import * as React from 'react'
import Svg, {

  Path,
  Defs,
  LinearGradient,
  Stop,

} from 'react-native-svg'

export const Blue = (props) => (
  <Svg
      width={6}
      height={9}
      viewBox="0 0 6 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3 .75c-1.125 1.875-3 2.625-3 4.5 0 .75.75 1.5 1.5 1.5.375 0 .75 0 1.125-.375 0 0 .12.75-.75 1.875h2.25c-.75-1.125-.75-1.875-.75-1.875.375.375.75.375 1.125.375.75 0 1.5-.75 1.5-1.5 0-1.875-1.875-2.625-3-4.5z"
        fill="#000"
      />
      <Path
        d="M3 .75c-1.125 1.875-3 2.625-3 4.5 0 .75.75 1.5 1.5 1.5.375 0 .75 0 1.125-.375 0 0 .12.75-.75 1.875h2.25c-.75-1.125-.75-1.875-.75-1.875.375.375.75.375 1.125.375.75 0 1.5-.75 1.5-1.5 0-1.875-1.875-2.625-3-4.5z"
        fill="url(#paint0_linear_394_901)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_394_901"
          x1={3.05052}
          y1={9.84782}
          x2={13.1052}
          y2={1.96295}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
        </LinearGradient>
      </Defs>
    </Svg>
)

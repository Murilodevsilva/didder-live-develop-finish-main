import * as React from 'react'
import Svg, {

  Path,
  Defs,
  LinearGradient,
  Stop,

} from 'react-native-svg'

export const BlueLight = (props) => (
  <Svg
      width={5}
      height={6}
      viewBox="0 0 5 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.062 4.3L.654 5.875A.375.375 0 010 5.625V.374A.375.375 0 01.375 0H3.75a.375.375 0 01.375.375v5.25a.375.375 0 01-.655.25L2.062 4.3z"
        fill="#000"
      />
      <Path
        d="M2.062 4.3L.654 5.875A.375.375 0 010 5.625V.374A.375.375 0 01.375 0H3.75a.375.375 0 01.375.375v5.25a.375.375 0 01-.655.25L2.062 4.3z"
        fill="url(#paint0_linear_394_1218)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_394_1218"
          x1={2.09701}
          y1={7.27826}
          x2={9.77369}
          y2={2.10535}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
        </LinearGradient>
      </Defs>
    </Svg>
)

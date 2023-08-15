import * as React from 'react'
import Svg, { Defs, G, LinearGradient, Path, Stop } from 'react-native-svg'

export const ImageIcon = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_b_807_650)">
      <G filter="url(#filter1_b_807_650)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.94 1h.12c2.449 0 4.368 0 5.891.165 1.554.168 2.814.518 3.889 1.3a7.668 7.668 0 011.696 1.695c.78 1.075 1.13 2.335 1.299 3.889C27 9.57 27 11.49 27 13.939v.069c0 1.246 0 2.35-.02 3.326-.06 2.872-.284 4.91-1.444 6.506a7.67 7.67 0 01-1.696 1.696c-1.075.78-2.335 1.13-3.889 1.299-1.523.165-3.442.165-5.89.165h-.121c-2.449 0-4.369 0-5.891-.165-1.554-.168-2.814-.518-3.889-1.3a7.665 7.665 0 01-1.696-1.695c-.78-1.075-1.13-2.335-1.299-3.889C1 18.428 1 16.51 1 14.061v-.121c0-2.449 0-4.369.165-5.891.168-1.554.518-2.814 1.3-3.889A7.667 7.667 0 014.16 2.464c1.075-.78 2.335-1.13 3.889-1.299C9.57 1 11.49 1 13.939 1z"
          fill="#566FD7"
        />
        <Path
          d="M2.06 24.134l.404-.294-.404.294.055.075a8.165 8.165 0 001.751 1.731c1.175.854 2.532 1.22 4.129 1.392 1.55.168 3.491.168 5.916.168h.179c2.424 0 4.366 0 5.915-.168 1.597-.173 2.954-.538 4.129-1.392a8.166 8.166 0 001.806-1.806c1.263-1.738 1.48-3.926 1.54-6.79.02-.981.02-2.09.02-3.333v-.101c0-2.424 0-4.365-.168-5.915-.173-1.597-.538-2.954-1.392-4.129a8.166 8.166 0 00-1.806-1.806C22.959 1.206 21.602.84 20.005.668 18.455.5 16.514.5 14.09.5h-.179c-2.424 0-4.365 0-5.915.168C6.398.84 5.04 1.206 3.866 2.06A8.167 8.167 0 002.06 3.866C1.206 5.041.84 6.398.668 7.995.5 9.545.5 11.486.5 13.91v.179c0 2.424 0 4.366.168 5.915.173 1.597.538 2.954 1.392 4.129z"
          stroke="url(#paint0_linear_807_650)"
          strokeLinecap="round"
        />
      </G>
      <G filter="url(#filter2_d_807_650)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.336 4.082c.677-.492 1.544-.779 2.928-.929C9.667 3.001 11.478 3 14 3s4.333.001 5.736.153c1.384.15 2.25.437 2.928.93.481.349.904.772 1.254 1.253.492.677.779 1.544.929 2.928C24.999 9.667 25 11.478 25 14v.983a6.004 6.004 0 00-.407-.318 7.667 7.667 0 00-10.388 1.416c-.212.26-.414.565-.643.945l-.167-.034c-1.466-.293-2.363-.472-3.205-.454a7.667 7.667 0 00-5.788 2.83c-.36.444-.665.964-1.032 1.67a10.172 10.172 0 01-.217-1.302C3.001 18.333 3 16.522 3 14s.001-4.333.153-5.736c.15-1.384.437-2.25.93-2.928.349-.481.772-.904 1.253-1.254zM9 10a3.667 3.667 0 117.333 0A3.667 3.667 0 019 10z"
          fill="url(#paint1_linear_807_650)"
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_807_650"
        x1={1}
        y1={1}
        x2={27.0132}
        y2={26.9868}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_807_650"
        x1={14.1853}
        y1={24.8802}
        x2={38.6926}
        y2={-4.4207}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
    </Defs>
  </Svg>
)
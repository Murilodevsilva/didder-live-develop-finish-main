import * as React from 'react'
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  Circle,
} from 'react-native-svg'

export const InviteFriendsIcon = (props) => (
  <Svg
    width={36}
    height={34}
    viewBox="0 0 36 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_b_5_1225)">
      <G filter="url(#filter1_b_5_1225)">
        <Circle cx={13} cy={13} r={12} fill="#91A1E5" />
        <Circle
          cx={13}
          cy={13}
          r={12.5}
          stroke="url(#paint0_linear_5_1225)"
          strokeLinecap="round"
        />
      </G>
      <G filter="url(#filter2_d_5_1225)">
        <Path
          d="M12.125 5.54c-1.9 0-3.44 1.548-3.44 3.457 0 1.91 1.54 3.457 3.44 3.457s3.44-1.548 3.44-3.457c0-1.909-1.54-3.456-3.44-3.456z"
          fill="url(#paint1_linear_5_1225)"
        />
        <Path
          d="M19.909 10.453a.544.544 0 00-.543-.546c-.3 0-.543.244-.543.546v1.637h-1.63c-.3 0-.542.245-.542.546 0 .302.243.546.543.546h1.629v1.637c0 .302.243.546.543.546.3 0 .543-.244.543-.546v-1.637h1.63c.3 0 .542-.244.542-.546a.544.544 0 00-.543-.546H19.91v-1.637z"
          fill="url(#paint2_linear_5_1225)"
        />
        <Path
          d="M9.953 13.546c-1.9 0-3.44 1.548-3.44 3.457 0 1.909 1.54 3.456 3.44 3.456h4.345c1.899 0 3.439-1.547 3.439-3.456 0-1.91-1.54-3.457-3.44-3.457H9.953z"
          fill="url(#paint3_linear_5_1225)"
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_5_1225"
        x1={1}
        y1={1}
        x2={25.0122}
        y2={24.9878}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_5_1225"
        x1={14.4285}
        y1={23.6378}
        x2={35.0179}
        y2={2.5777}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_5_1225"
        x1={14.4285}
        y1={23.6378}
        x2={35.0179}
        y2={2.5777}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_5_1225"
        x1={14.4285}
        y1={23.6378}
        x2={35.0179}
        y2={2.5777}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
    </Defs>
  </Svg>
)

import * as React from 'react'
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg'

export const Gift = (props) => (
  <Svg
    width={35}
    height={35}
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_b_1114_12614)">
      <Circle cx={13} cy={13} r={12} fill="#91A1E5" />
      <Circle
        cx={13}
        cy={13}
        r={12.5}
        stroke="url(#paint0_linear_1114_12614)"
        strokeLinecap="round"
      />
    </G>
    <G filter="url(#filter1_d_1114_12614)">
      <Path
        d="M15.555 5.12l-1.876 1.872c-.283.282-.581.653-.679 1.012-.098-.36-.258-.73-.54-1.012L10.584 5.12a2.213 2.213 0 00-3.126 0c-.779.777-.824 2.021-.198 2.884H13 6.368c-1.22 0-2.21.988-2.21 2.206 0 .601.24 1.147.632 1.545H21.21c.391-.398.632-.944.632-1.545 0-1.218-.99-2.206-2.21-2.206h-.951.229a2.246 2.246 0 00-.23-2.884 2.213 2.213 0 00-3.125 0z"
        fill="url(#paint1_linear_1114_12614)"
      />
      <Path
        d="M5.025 13.154l-.002-.107h7.314v8.163h-.663c-2.06 0-3.09 0-3.903-.351a4.527 4.527 0 01-2.392-2.502c-.337-.85-.337-1.927-.337-4.08 0-.473-.009-.827-.017-1.123z"
        fill="url(#paint2_linear_1114_12614)"
      />
      <Path
        d="M18.229 20.859c-.813.351-1.843.351-3.903.351h-.663v-8.163h7.29c.005.318.005.7.005 1.23 0 2.153 0 3.23-.337 4.08a4.527 4.527 0 01-2.392 2.502z"
        fill="url(#paint3_linear_1114_12614)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_1114_12614"
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
        id="paint1_linear_1114_12614"
        x1={13.1489}
        y1={24.7761}
        x2={36.2388}
        y2={0.861211}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_1114_12614"
        x1={13.1489}
        y1={24.7761}
        x2={36.2388}
        y2={0.861211}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_1114_12614"
        x1={13.1489}
        y1={24.7761}
        x2={36.2388}
        y2={0.861211}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
    </Defs>
  </Svg>
)

import * as React from 'react'
import Svg, {
  Path,
  G,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg'

export const DollarCircle = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_5_4601)">
      <G filter="url(#filter0_b_5_4601)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12z"
          fill="#91A1E5"
        />
        <Path
          d="M12 .75C5.787.75.75 5.787.75 12S5.787 23.25 12 23.25 23.25 18.213 23.25 12 18.213.75 12 .75z"
          stroke="url(#paint0_linear_5_4601)"
          strokeLinecap="round"
        />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4.25a.75.75 0 01.75.75v.246a3.7 3.7 0 012.61 1.805l.376.65a.75.75 0 01-1.299.75l-.376-.65a2.2 2.2 0 00-1.312-1.02v4.696l.38.14c2.95 1.084 3.295 5.117.573 6.689a3.709 3.709 0 01-.953.386V19a.75.75 0 01-1.5 0v-.247a3.7 3.7 0 01-2.61-1.804l-.376-.65a.75.75 0 011.299-.75l.375.65c.3.518.777.87 1.312 1.02v-4.696l-.379-.14c-2.95-1.084-3.295-5.117-.573-6.689.305-.176.625-.304.952-.386V5a.75.75 0 01.75-.75zm-.953 2.743c.066-.038.134-.073.202-.103v4.03c-1.627-.719-1.78-3.016-.202-3.927zm1.702 10.117v-4.03c1.627.718 1.78 3.016.203 3.927a2.269 2.269 0 01-.203.103z"
        fill="url(#paint1_linear_5_4601)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_5_4601"
        x1={1.25}
        y1={1.25}
        x2={22.7609}
        y2={22.7391}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_5_4601"
        x1={12.064}
        y1={23.0522}
        x2={28.874}
        y2={14.8934}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
      <ClipPath id="clip0_5_4601">
        <Path fill="#fff" d="M0 0H24V24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

import * as React from 'react'
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg'

export const Ticket = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_6_577)">
      <Path
        d="M2.25 4.5A2.25 2.25 0 000 6.75V9a.75.75 0 00.75.75 2.25 2.25 0 110 4.5A.75.75 0 000 15v2.25a2.25 2.25 0 002.25 2.25h19.5A2.25 2.25 0 0024 17.25V15a.75.75 0 00-.75-.75 2.25 2.25 0 010-4.5A.75.75 0 0024 9V6.75a2.25 2.25 0 00-2.25-2.25H2.25z"
        fill="url(#paint0_linear_6_577)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.018 17c2.77 0 5.017-2.239 5.017-5s-2.246-5-5.017-5C9.246 7 7 9.239 7 12s2.246 5 5.018 5zM8.7 9.615l1.396 1.462h2.932l-.489 1.88h-1.012l.384-1.427h-1.99l-.733 2.854h4.468l.593-.487 1.012-3.76-.349-.522H8.701z"
        fill="#fff"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_6_577"
        x1={-1.91787e-8}
        y1={15.7867}
        x2={29.5082}
        y2={14.6685}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4568DC" />
        <Stop offset={1} stopColor="#B06AB3" />
      </LinearGradient>
      <ClipPath id="clip0_6_577">
        <Path fill="#fff" d="M0 0H24V24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

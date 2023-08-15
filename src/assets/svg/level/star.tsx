import * as React from 'react'
import Svg, {

  Path,
  Defs,
  LinearGradient,
  Stop,

} from 'react-native-svg'

export const Star = (props) => (
  <Svg
    width={6}
    height={7}
    viewBox="0 0 6 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3 5.5l1.455.92c.266.169.592-.08.522-.396l-.385-1.731 1.286-1.167c.235-.213.109-.616-.2-.642l-1.693-.15L3.323.697a.345.345 0 00-.646 0L2.015 2.33.32 2.48c-.308.026-.434.43-.2.642L1.409 4.29 1.023 6.02c-.07.316.256.565.522.397L3 5.499z"
      fill="#000"
    />
    <Path
      d="M3 5.5l1.455.92c.266.169.592-.08.522-.396l-.385-1.731 1.286-1.167c.235-.213.109-.616-.2-.642l-1.693-.15L3.323.697a.345.345 0 00-.646 0L2.015 2.33.32 2.48c-.308.026-.434.43-.2.642L1.409 4.29 1.023 6.02c-.07.316.256.565.522.397L3 5.499z"
      fill="url(#paint0_linear_372_1357)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_372_1357"
        x1={3.05052}
        y1={7.75287}
        x2={11.3315}
        y2={-0.364513}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </LinearGradient>
    </Defs>
  </Svg>
)

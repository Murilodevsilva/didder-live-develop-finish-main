import * as React from 'react'
import Svg, {

  Path,
  Defs,
  LinearGradient,
  Stop,

} from 'react-native-svg'

export const Purple = (props) => (
  <Svg
  width={6}
  height={7}
  viewBox="0 0 6 7"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <Path
    d="M3 6.253l-.435-.396C1.02 4.456 0 3.53 0 2.398 0 1.471.726.748 1.65.748c.522 0 1.023.243 1.35.624A1.804 1.804 0 014.35.748c.924 0 1.65.723 1.65 1.65 0 1.131-1.02 2.058-2.565 3.459L3 6.253z"
    fill="#000"
  />
  <Path
    d="M3 6.253l-.435-.396C1.02 4.456 0 3.53 0 2.398 0 1.471.726.748 1.65.748c.522 0 1.023.243 1.35.624A1.804 1.804 0 014.35.748c.924 0 1.65.723 1.65 1.65 0 1.131-1.02 2.058-2.565 3.459L3 6.253z"
    fill="url(#paint0_linear_394_1111)"
  />
  <Defs>
    <LinearGradient
      id="paint0_linear_394_1111"
      x1={3.05052}
      y1={7.42585}
      x2={10.6332}
      y2={-0.675415}
      gradientUnits="userSpaceOnUse"
    >
      <Stop stopColor="#fff" />
      <Stop offset={1} stopColor="#fff" stopOpacity={0.2} />
    </LinearGradient>
  </Defs>
</Svg>
)

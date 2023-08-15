import * as React from 'react'
import { Image } from 'react-native'
import Svg, { Path, Defs, Pattern, Use } from 'react-native-svg'

export const GiftBox = (props) => (
  <Svg
    width={10}
    height={10}
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path fill="url(#pattern0)" d="M0.5 0.5H9.5V9.5H0.5z" />
    <Defs>
      <Pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_1114_12621"
          transform="matrix(.00065 0 0 .00063 -.33 -.086)"
        />
      </Pattern>
      <Image
        id="image0_1114_12621"
        width={2542}
        height={2000}
      />
    </Defs>
  </Svg>
)
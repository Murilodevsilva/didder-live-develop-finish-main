import * as React from 'react'
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg'

export const Vampire = (props) => (
  <Svg
  width={60}
  height={60}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  {...props}
>
  <Path fill="url(#a)" d="M0 0h60v60H0z" />
  <Defs>
    <Pattern
      id="a"
      patternContentUnits="objectBoundingBox"
      width={1}
      height={1}
    >
      <Use xlinkHref="#b" transform="scale(.00046)" />
    </Pattern>
    <Image
      id="b"
      width={2160}
      height={2160}
    />
  </Defs>
</Svg>
)